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
    const int SpawnBorderSize = 100;
    int minSpawnX;
    int maxSpawnX;
    int minSpawnY;
    int maxSpawnY;

    // collision-free spawn support
    const int MaxSpawnTries = 20;
    float madamSkunkyColliderHalfWidth;
    float madamSkunkyColliderHalfHeight;
    Vector2 min = new Vector2();
    Vector2 max = new Vector2();

    /// <summary>
    /// Start is called before the first frame update
    /// </summary>
    void Start()
    {
        // save spawn boundaries for efficiency
        minSpawnX = SpawnBorderSize;
        maxSpawnX = Screen.width - SpawnBorderSize;
        minSpawnY = SpawnBorderSize;
        maxSpawnY = Screen.height - SpawnBorderSize;

        // create and start timer
        spawnTimer = gameObject.AddComponent<Timer>();
        spawnTimer.Duration = Random.Range(MinSpawnDelay, MaxSpawnDelay);
        spawnTimer.Run();

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
        if (spawnTimer.Finished)
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
        Vector3 worldLocation = Camera.main.ScreenToWorldPoint(location);
        SetMinAndMax(worldLocation);

        // make sure we don't spawn into a collision
        int spawnTries = 1;
        while (Physics2D.OverlapArea(min, max) != null &&
            spawnTries <= MaxSpawnTries)
        {
            // change location and calculate new rectangle points
            location.x = Random.Range(minSpawnX, maxSpawnX);
            location.y = Random.Range(minSpawnY, maxSpawnY);
            worldLocation = Camera.main.ScreenToWorldPoint(location);
            SetMinAndMax(worldLocation);

            spawnTries++;
        }

        // create new skunky woman if found collision-free location
        if (Physics2D.OverlapArea(min, max) == null)
        {
            GameObject madamSkunky = Instantiate<GameObject>(
                prefabMadamSkunky, Vector3.zero, Quaternion.identity);
            madamSkunky.transform.position = worldLocation;

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
        min.x = location.x - madamSkunkyColliderHalfWidth;
        min.y = location.y - madamSkunkyColliderHalfHeight;
        max.x = location.x + madamSkunkyColliderHalfWidth;
        max.y = location.y + madamSkunkyColliderHalfHeight;
    }
}
