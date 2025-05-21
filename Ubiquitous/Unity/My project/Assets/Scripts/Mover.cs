using UnityEngine;

public class Mover : MonoBehaviour
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        // Move Right only
        //Rigidbody2D rb2d = GetComponent<Rigidbody2D>();
        //rb2d.AddForce(new Vector2(1, 0), ForceMode2D.Impulse);
        //GetComponent<Rigidbody2D>().AddForce(new Vector2(1, 0), ForceMode2D.Impulse);

        // Move to a random direction due to a random force.
        const float MinImpulseForce = 3f;
        const float MaxImpulseForce = 5f;
        float angle = Random.Range(0, 2 * Mathf.PI);
        Vector2 direction = new Vector2(Mathf.Cos(angle), Mathf.Sin(angle));
        float magnitude = Random.Range(MinImpulseForce, MaxImpulseForce);
        GetComponent<Rigidbody2D>().AddForce(direction*magnitude, ForceMode2D.Impulse);

    }
}
