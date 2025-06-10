using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// A skunky woman
/// </summary>
public class MadamSkunky : MonoBehaviour
{
    // death support
    const float MadamSkunkyLifespanSeconds = 10; // how long madam skunky lives in seconds
    Timer deathTimer; // timer to track madam skunky's lifespan

    /// <summary>
    /// Start is called before the first frame update
    /// </summary>
    void Start()
    {
        // apply impulse force to get madam skunky moving
        const float MinImpulseForce = 3f;
        const float MaxImpulseForce = 5f;
        float angle = Random.Range(0, 2 * Mathf.PI); // Generates random angle in radians
        Vector2 direction = new Vector2(
            Mathf.Cos(angle), Mathf.Sin(angle)); // Calculate direction vector based on angle
        float magnitude = Random.Range(MinImpulseForce, MaxImpulseForce); // Randomly choose force magnitude
        GetComponent<Rigidbody2D>().AddForce(
            direction * magnitude,
            ForceMode2D.Impulse); // Apply the force to the Rigidbody2D

        // create and start timer
        deathTimer = gameObject.AddComponent<Timer>(); // create a new Timer component
        deathTimer.Duration = MadamSkunkyLifespanSeconds; // set the duration of the timer
        deathTimer.Run(); // start the timer
    }

    /// <summary>
    /// Update is called once per frame
    /// </summary>
    void Update()
    {
        // kill madam skunky if death timer finished
        if (deathTimer.Finished) // check if the timer has finished
        {
            Destroy(gameObject); // destroy this madam skunky object
        }
    }
}
