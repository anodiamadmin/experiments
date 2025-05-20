using UnityEngine;

/// <summary>
/// Prints a message to the console when the game starts
/// </summary>
public class Talker : MonoBehaviour
{
    /// <summary>
    /// Start is called once before the first execution of Update after the MonoBehaviour is created
    /// </summary>
    void Start()
    {
        // temporary Debugging code
        Vector3 position = transform.position;
        position.x = 1;

        // Print a message to the console
        Debug.Log("Hello, Teddy!");
    }
}
