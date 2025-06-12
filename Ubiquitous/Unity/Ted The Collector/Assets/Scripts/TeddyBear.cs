using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// A collecting teddy bear
/// </summary>
public class TeddyBear : MonoBehaviour
{
	#region Fields

	const float ImpulseForceMagnitude = 2.0f;

	bool collecting = false; // flag to indicate if teddy bear is collecting a pickup
    GameObject targetPickup; // the current target pickup for the teddy bear to collect

    // saved for efficiency
    Rigidbody2D rb2d;
	TedTheCollector tedTheCollector;

    #endregion

    #region Methods

    /// <summary>
    /// Start is called before the first frame update
    /// </summary>
    void Start()
    {
		// center teddy bear in screen
		transform.position = Vector3.zero;

		// save references for efficiency
		rb2d = GetComponent<Rigidbody2D>();
		tedTheCollector = Camera.main.GetComponent<TedTheCollector>();
	}

    /// <summary>
    /// OnMouseDown is called when the user has pressed the mouse button
    /// over the collider
    /// </summary>
    void OnMouseDown()
    {
		// ignore mouse clicks if already collecting
		if (!collecting)
        {
			GoToNextPickup();
		}
	}

    /// <summary>
    /// Called when another object is within a trigger collider
    /// attached to this object
    /// </summary>
    /// <param name="other">collider info</param>
    void OnTriggerStay2D(Collider2D other)
    {
		// only respond if the collision is with the target pickup
		if (other.gameObject == targetPickup)
        {
			// remove collected pickup from game and go to the next one
			tedTheCollector.RemovePickup(targetPickup);
			rb2d.linearVelocity = Vector2.zero; // stop the teddy bear otherwise resultant forces will keep adding up and moving it at more speed
            GoToNextPickup(); // go to the next pickup
        }
	}

	/// <summary>
	/// Starts the teddy bear moving toward the next pickup
	/// </summary>
	void GoToNextPickup()
    {
		// calculate direction to target pickup and start moving toward it
		targetPickup = tedTheCollector.TargetPickup; // get the next target pickup from the game manager
        if (targetPickup != null) // if there is a target pickup
        {
			Vector2 direction = new Vector2(
				targetPickup.transform.position.x - transform.position.x,
				targetPickup.transform.position.y - transform.position.y); // calculate the direction to the target pickup
            direction.Normalize(); // normalize the direction vector to get a unit vector
            rb2d.AddForce(direction * ImpulseForceMagnitude, 
				ForceMode2D.Impulse); // apply an impulse force to the teddy bear in the direction of the target pickup
        }
	}

	#endregion
}
