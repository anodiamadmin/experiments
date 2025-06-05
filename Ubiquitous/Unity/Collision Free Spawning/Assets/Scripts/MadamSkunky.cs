using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// A skunky woman
/// </summary>
public class MadamSkunky : MonoBehaviour
{
    // death support
    const float MadamSkunkyLifespanSeconds = 10;
    Timer deathTimer;

    /// <summary>
    /// Start is called before the first frame update
    /// </summary>
    void Start()
    {
        // apply impulse force to get madam skunky moving
        const float MinImpulseForce = 3f;
        const float MaxImpulseForce = 5f;
        float angle = Random.Range(0, 2 * Mathf.PI);
        Vector2 direction = new Vector2(
            Mathf.Cos(angle), Mathf.Sin(angle));
        float magnitude = Random.Range(MinImpulseForce, MaxImpulseForce);
        GetComponent<Rigidbody2D>().AddForce(
            direction * magnitude,
            ForceMode2D.Impulse);

        // create and start timer
        deathTimer = gameObject.AddComponent<Timer>();
        deathTimer.Duration = MadamSkunkyLifespanSeconds;
        deathTimer.Run();
    }

    /// <summary>
    /// Update is called once per frame
    /// </summary>
    void Update()
    {
        // kill madam skunky if death timer finished
        if (deathTimer.Finished)
        {
            Destroy(gameObject);
        }
    }
}
