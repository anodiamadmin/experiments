using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// Game manager
/// </summary>
public class TedTheCollector : MonoBehaviour
{
	#region Fields

	[SerializeField]
	GameObject prefabPickup; // instantiate the prefab for pickups
    List<GameObject> pickups = new List<GameObject>(); // list of pickups in the game

    #endregion

    #region Properties

    /// <summary>
    /// Gets the next target pickup for the teddy bear to collect
    /// </summary>
    /// <value>target pickup</value>
    public GameObject TargetPickup
    {
		get 
		{
			if (pickups.Count > 0) // if there are pickups in the game
            {
				return pickups[0]; // return the first pickup in the list
            }
            else
            {
				return null;
			}
		}
	}

    #endregion

    #region Methods

    /// <summary>
    /// Update is called once per frame
    /// </summary>
    void Update()
    {
		// add pickup on right press
		if (Input.GetMouseButtonDown(1)) // right mouse button pressed
        {
			// calculate world position of mouse click
			Vector3 mousePosition = Input.mousePosition; // get mouse position in screen coordinates
            mousePosition.z = -Camera.main.transform.position.z; // set z to the distance from the camera to the plane
            Vector3 worldPosition = Camera.main.ScreenToWorldPoint(mousePosition); // convert to world coordinates

            // create pickup and add to list
            GameObject pickup = Instantiate<GameObject>(prefabPickup); // instantiate the pickup prefab
            pickup.transform.position = worldPosition; // set the position of the pickup to the world position
            pickups.Add(pickup); // add the pickup to the list
        }
	}

	/// <summary>
	/// Removes the given pickup from the game
	/// </summary>
	/// <param name="pickup">the pickup to remove</param>
	public void RemovePickup(GameObject pickup)
    {
		pickups.Remove(pickup);
		Destroy(pickup);
	}

	#endregion
}
