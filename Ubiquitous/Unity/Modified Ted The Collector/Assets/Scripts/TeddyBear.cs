using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// A collecting teddy bear
/// </summary>
public class TeddyBear : MonoBehaviour
{
	#region Fields

	const float ImpulseForceMagnitude = 2.0f; // the magnitude of the impulse force applied to the teddy bear when moving toward a pickup

    bool collecting = false; // whether the teddy bear is currently collecting pickups
    GameObject targetPickup = null; // the pickup currently targeted for collection, set to null when no pickups are targeted

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
		Vector3 position = Vector3.zero;

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
			collecting = true;
			GoToNextPickup();
		}
	}

	/// <summary>
	/// Called when another object is within a trigger collider
	/// attached to this object
	/// </summary>
	/// <param name="other"></param>
	void OnTriggerStay2D(Collider2D other) // trigger collider is used to detect pickups (collision with apples' circle colliders)
    {
		// only respond if the collision is with the target pickup
		if (other.gameObject == targetPickup) // check if the collider is the target pickup
		{
			// remove collected pickup from game and go to the next one
			tedTheCollector.RemovePickup(targetPickup); // remove the target pickup from the game
            rb2d.linearVelocity = Vector2.zero; // stop the teddy bear's movement, otherwise it will keep moving with more speed than intended
            GoToNextPickup(); // go to the next pickup
        }
	}

	/// <summary>
	/// Updates the pickup currently targeted for collection.
	/// If the provided pickup is closer than the currently
	/// targeted pickup, the provided pickup is set as the
	/// new target. Otherwise, the targeted pickup isn't
	/// changed.
	/// </summary>
	/// <param name="pickup">pickup</param>
	public void UpdateTarget(GameObject pickup) // Update the target pickup
    {
		if (targetPickup == null) // if no target pickup is set
		{
			SetTarget(pickup); // set the provided pickup as the target
        }
		else
		{
			float targetDistance = GetDistance(targetPickup); // get the distance to the current target pickup
            if (GetDistance(pickup) < targetDistance) // if the provided pickup is closer than the current target
            {
				SetTarget(pickup); // set the provided pickup as the target
            }
		}
	}

	/// <summary>
	/// Sets the target pickup to the provided pickup
	/// </summary>
	/// <param name="pickup">Pickup.</param>
	void SetTarget(GameObject pickup) // Set the target pickup to the provided pickup
    {
		targetPickup = pickup; // set the target pickup to the provided pickup
        if (collecting) // if the teddy bear is currently collecting pickups
        {
			GoToTargetPickup(); // start moving toward the new target pickup
        }
	}

	/// <summary>
	/// Starts the teddy bear moving toward the next pickup
	/// </summary>
	void GoToNextPickup()
	{
		// calculate direction to target pickup and start moving toward it
		targetPickup = GetClosestPickup(); // get the closest pickup in the scene
        if (targetPickup != null)
		{
			GoToTargetPickup();
		}
		else
		{
			collecting = false;
		}
	}

	/// <summary>
	/// Starts the teddy bear moving toward the target pickup
	/// </summary>
	void GoToTargetPickup()
	{
		// calculate direction to target pickup and start moving toward it
		Vector2 direction = new Vector2(
			targetPickup.transform.position.x - transform.position.x,
			targetPickup.transform.position.y - transform.position.y); // calculate the direction vector to the target pickup
        direction.Normalize(); // normalize the direction vector to have a magnitude of 1, otherwise the teddy bear will move faster than intended
        rb2d.linearVelocity = Vector2.zero; // stop the teddy bear's movement, otherwise it will keep moving with more speed than intended
        rb2d.AddForce(direction * ImpulseForceMagnitude,
			ForceMode2D.Impulse); // apply an impulse force to the teddy bear in the direction of the target pickup
    }

	/// <summary>
	/// Gets the pickup in the scene that's closest to the teddy bear
	/// If there are no pickups in the scene, returns null
	/// </summary>
	/// <returns>closest pickup</returns>
	GameObject GetClosestPickup()
	{
		// initial setup
		List<GameObject> pickups = tedTheCollector.Pickups; // get the list of pickups from the TedTheCollector component
        GameObject closestPickup; // the closest pickup to the teddy bear
        float closestDistance; // the distance to the closest pickup
        if (pickups.Count == 0) // if there are no pickups in the scene
        {
			return null;
        }
		else
		{
			closestPickup = pickups[0]; // start with the first pickup in the list, assuming that is the closest one
            closestDistance = GetDistance(closestPickup); // get the distance to the first pickup
        }

		// find and return closest pickup
		foreach (GameObject pickup in pickups) // iterate through all pickups in the scene
        {
			float distance = GetDistance(pickup); // get the distance to the current pickup
            if (distance < closestDistance) // if the current pickup is closer than the closest one found so far
            {
				closestPickup = pickup; // set the current pickup as the closest one
                closestDistance = distance; // update the closest distance
            }
		}
		return closestPickup;
	}

	/// <summary>
	/// Gets the distance between the teddy bear and the 
	/// provided pickup
	/// </summary>
	/// <returns>distance</returns>
	/// <param name="pickup">pickup</param>
	float GetDistance(GameObject pickup) // Get the distance between the teddy bear and the provided pickup
    {
		return Vector3.Distance(transform.position, pickup.transform.position); // calculate the distance between the teddy bear and the provided pickup
    }

	#endregion
}
