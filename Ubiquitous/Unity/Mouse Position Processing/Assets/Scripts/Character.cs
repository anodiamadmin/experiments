using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// A character
/// </summary>
public class Character : MonoBehaviour
{
    // saved for efficiency
    float colliderHalfWidth; // variable to store half the width of the character's collider
    float colliderHalfHeight; // variable to store half the height of the character's collider

    /// <summary>
	/// Start is called before the first frame update
	/// </summary>	
    void Start()
    {
        // save for efficiency
        BoxCollider2D collider = GetComponent<BoxCollider2D>(); // get the BoxCollider2D component attached to this GameObject in unity
        colliderHalfWidth = collider.size.x / 2; // calculate half the width of the collider
        colliderHalfHeight = collider.size.y / 2; // calculate half the height of the collider
    }

    /// <summary>
	/// Update is called once per frame
	/// </summary>	
    void Update()
    {
        // convert mouse position to world position
        Vector3 position = Input.mousePosition; // get mouse position in screen (pixel) coordinates
        position.z = -Camera.main.transform.position.z; // set z to the camera's z position to convert to world coordinates
        position = Camera.main.ScreenToWorldPoint(position); // convert to world coordinates

        // move character
        transform.position = position; // set character position to mouse position
        ClampInScreen(); // clamp character in screen
    }

    /// <summary>
    /// Clamps the character in the screen
    /// </summary>
    void ClampInScreen()
    {
        Vector3 position = transform.position; // get current position of the character

        // clamp horizontally
        if (position.x - colliderHalfWidth < ScreenUtils.ScreenLeft) // check if character is out of the left edge of the screen
        {
            position.x = ScreenUtils.ScreenLeft + colliderHalfWidth; // if so, set position to the left edge plus half the width of the collider
        }
        else if (position.x + colliderHalfWidth > ScreenUtils.ScreenRight) // check if character is out of the right edge of the screen
        {
            position.x = ScreenUtils.ScreenRight - colliderHalfWidth; // if so, set position to the right edge minus half the width of the collider
        }

        // clamp vertically
        if (position.y + colliderHalfHeight > ScreenUtils.ScreenTop) // check if character is out of the top edge of the screen
        {
            position.y = ScreenUtils.ScreenTop - colliderHalfHeight; // if so, set position to the top edge minus half the height of the collider
        }
        else if (position.y - colliderHalfHeight < ScreenUtils.ScreenBottom) // check if character is out of the bottom edge of the screen
        {
            position.y = ScreenUtils.ScreenBottom + colliderHalfHeight; // if so, set position to the bottom edge plus half the height of the collider
        }

        transform.position = position; // set the character's position to the clamped position
    }
}
