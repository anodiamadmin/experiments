using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// A character spawner script that spawns characters at random locations
/// </summary>
public class CharacterSpawner : MonoBehaviour
{
    // needed for spawning
    [SerializeField]
    GameObject prefabMadamSkunky;

    // saved for efficiency
    [SerializeField]
    Sprite madamSkunkySprite0;
    [SerializeField]
    Sprite madamSkunkySprite1;
    [SerializeField]
    Sprite madamSkunkySprite2;

    // spawn control
    const float MinSpawnDelay = 1;
    const float MaxSpawnDelay = 2;
    Timer spawnTimer;

    // spawn location support
    const int SpawnBorderSize = 100; // ensures characters spawn within a safe margin from the screen edges (with a margin of 100 pixels from each edge)
    int minSpawnX; // minimum x coordinate for spawning
    int maxSpawnX; // maximum x coordinate for spawning
    int minSpawnY; // minimum y coordinate for spawning
    int maxSpawnY; // maximum y coordinate for spawning

    // collision-free spawn support
    const int MaxSpawnTries = 20;
    float madamSkunkyColliderHalfWidth; // half width of the madam skunky's box collider
    float madamSkunkyColliderHalfHeight; // half height of the madam skunky's box collider
    Vector2 min = new Vector2(); // stores minimum x and y coordinates of collision rectangle
    Vector2 max = new Vector2(); // stores maximum x and y coordinates of collision rectangle

    /// <summary>
    /// Start is called before the first frame update
    /// </summary>
    void Start()
    {
        // save screen boundaries for efficiency of spawning
        minSpawnX = SpawnBorderSize; // minimum x coordinate for spawning
        maxSpawnX = Screen.width - SpawnBorderSize; // maximum x coordinate for spawning
        minSpawnY = SpawnBorderSize; // minimum y coordinate for spawning
        maxSpawnY = Screen.height - SpawnBorderSize; // maximum y coordinate for spawning

        // create and start timer
        spawnTimer = gameObject.AddComponent<Timer>();
        spawnTimer.Duration = Random.Range(MinSpawnDelay, MaxSpawnDelay); // set random spawn delay between 1 and 2 seconds
        spawnTimer.Run(); // start the timer

        // spawn and destroy a skunky woman to cache collider values
        GameObject tempMadamSkunky = Instantiate<GameObject>(
            prefabMadamSkunky, Vector3.zero, Quaternion.identity);
        BoxCollider2D collider = tempMadamSkunky.GetComponent<BoxCollider2D>();
        madamSkunkyColliderHalfWidth = collider.size.x / 2;
        madamSkunkyColliderHalfHeight = collider.size.y / 2;
        Destroy(tempMadamSkunky);
    }

    /// <summary>
    /// Update is called once per frame
    /// </summary>
    void Update()
    {
        // check for time to spawn a new skunky woman
        if (spawnTimer.Finished) // check if the timer has finished
        {
            SpawnMadamSkunky();

            // change spawn timer duration and restart
            spawnTimer.Duration = Random.Range(MinSpawnDelay, MaxSpawnDelay);
            spawnTimer.Run();
        }
    }

    /// <summary>
    /// Spawns a new skunky woman at a random location
    /// </summary>
    void SpawnMadamSkunky()
    {
        // generate random location and calculate skunky woman collision rectangle
        Vector3 location = new Vector3(Random.Range(minSpawnX, maxSpawnX),
            Random.Range(minSpawnY, maxSpawnY),
            -Camera.main.transform.position.z);
        Vector3 worldLocation = Camera.main.ScreenToWorldPoint(location); // convert screen coordinates to world coordinates
        SetMinAndMax(worldLocation); // set min and max for collision rectangle

        // make sure we don't spawn into a collision
        int spawnTries = 1; // number of tries to find a collision-free location
        while (Physics2D.OverlapArea(min, max) != null &&
            spawnTries <= MaxSpawnTries) // while we found a collision and haven't exceeded the maximum number of tries
        {
            // change location and calculate new rectangle points
            location.x = Random.Range(minSpawnX, maxSpawnX);
            location.y = Random.Range(minSpawnY, maxSpawnY);
            worldLocation = Camera.main.ScreenToWorldPoint(location);
            SetMinAndMax(worldLocation); // recalculate min and max for collision rectangle

            spawnTries++;
        }

        // create new skunky woman if found collision-free location
        if (Physics2D.OverlapArea(min, max) == null) // if we found a collision-free location
        {
            GameObject madamSkunky = Instantiate<GameObject>(
                prefabMadamSkunky, Vector3.zero, Quaternion.identity);
            madamSkunky.transform.position = worldLocation; // create a new skunky woman at the origin with no rotation and move it to the random location (worldLocation)

            // set random sprite for new skunky woman
            SpriteRenderer spriteRenderer = madamSkunky.GetComponent<SpriteRenderer>();
            int spriteNumber = Random.Range(0, 3);
            if (spriteNumber == 0)
            {
                spriteRenderer.sprite = madamSkunkySprite0;
            }
            else if (spriteNumber == 1)
            {
                spriteRenderer.sprite = madamSkunkySprite1;
            }
            else
            {
                spriteRenderer.sprite = madamSkunkySprite2;
            }
        }
    }

    /// <summary>
    /// Sets min and max for a skunky woman collision rectangle
    /// </summary>
    /// <param name="location">location of the skunky woman</param>
    void SetMinAndMax(Vector3 location)
    {
        min.x = location.x - madamSkunkyColliderHalfWidth; // calculate min x coordinate for collision rectangle
        min.y = location.y - madamSkunkyColliderHalfHeight; // calculate min y coordinate for collision rectangle
        max.x = location.x + madamSkunkyColliderHalfWidth; // calculate max x coordinate for collision rectangle
        max.y = location.y + madamSkunkyColliderHalfHeight; // calculate max y coordinate for collision rectangle
    }
}
