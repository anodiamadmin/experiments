using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// A character
/// </summary>
public class CharacterWithKeyboardInput : MonoBehaviour
{
    // saved for efficiency
    float colliderHalfWidth;
    float colliderHalfHeight;

    // movement support
    const float MoveUnitsPerSecond = 5; // constant for movement speed in Unity world units per second

    /// <summary>
	/// Start is called before the first frame update
	/// </summary>	
    void Start()
    {
        // save for efficiency
        BoxCollider2D collider = GetComponent<BoxCollider2D>();
        colliderHalfWidth = collider.size.x / 2;
        colliderHalfHeight = collider.size.y / 2;
    }

    /// <summary>
	/// Update is called once per frame
	/// </summary>	
    void Update()
    {
        // move game object as appropriate
        Vector3 position = transform.position; // get current position of the character
        float horizontalInput = Input.GetAxis("Horizontal"); // get horizontal input (left/right arrow keys or A/D keys)
        float verticalInput = Input.GetAxis("Vertical"); // get vertical input (up/down arrow keys or W/S keys)
        if (horizontalInput != 0) // check if there is horizontal input
        {
            position.x += horizontalInput * MoveUnitsPerSecond *
                Time.deltaTime; 
        }
        if (verticalInput != 0)
        {
            position.y += verticalInput * MoveUnitsPerSecond *
                Time.deltaTime; // if statement is used instead of else because both horizontal and vertical input can be used at the same time (diagonal movement)
        }

        // move character
        transform.position = position;
        ClampInScreen();
    }

    /// <summary>
    /// Clamps the character in the screen
    /// </summary>
    void ClampInScreen()
    {
        Vector3 position = transform.position;

        // clamp horizontally
        if (position.x - colliderHalfWidth < ScreenUtils.ScreenLeft)
        {
            position.x = ScreenUtils.ScreenLeft + colliderHalfWidth;
        }
        else if (position.x + colliderHalfWidth > ScreenUtils.ScreenRight)
        {
            position.x = ScreenUtils.ScreenRight - colliderHalfWidth;
        }

        // clamp vertically
        if (position.y + colliderHalfHeight > ScreenUtils.ScreenTop)
        {
            position.y = ScreenUtils.ScreenTop - colliderHalfHeight;
        }
        else if (position.y - colliderHalfHeight < ScreenUtils.ScreenBottom)
        {
            position.y = ScreenUtils.ScreenBottom + colliderHalfHeight;
        }

        transform.position = position;
    }
}
