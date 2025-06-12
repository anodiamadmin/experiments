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
	GameObject prefabPickup; // the pickup prefab to instantiate

    TeddyBear teddyBear;
	List<GameObject> pickups = new List<GameObject>(); // the list of pickups in the scene

    #endregion

    #region Properties

    /// <summary>
    /// Gets the pickups currently in the scene
    /// </summary>
    /// <value>pickups</value>
    public List<GameObject> Pickups
	{
		get { return pickups; }
	}

	#endregion

	#region Methods

	/// <summary>
	/// Use this for initialization
	/// </summary>
	void Start()
	{
		// save reference for efficiency
		GameObject teddyBearGameObject = GameObject.FindWithTag("TeddyBear"); // find the teddy bear in the scene with the "TeddyBear" tag set in Unity
        teddyBear = teddyBearGameObject.GetComponent<TeddyBear>(); // get the TeddyBear component from the GameObject
    }

	/// <summary>
	/// Update is called once per frame
	/// </summary>
	void Update()
	{
		// add pickup on right press
		if (Input.GetMouseButtonDown(1)) // right mouse button pressed
		{
			// calculate world position of mouse click
			Vector3 mousePosition = Input.mousePosition; // get the mouse position in screen coordinates
            mousePosition.z = -Camera.main.transform.position.z; // set the z position to the negative of the camera's z position to ensure correct depth
            Vector3 worldPosition = Camera.main.ScreenToWorldPoint(mousePosition); // convert the screen position to world coordinates

            // create pickup and add to list
            GameObject pickup = Instantiate<GameObject>(prefabPickup); // instantiate a new pickup from the prefab
            pickup.transform.position = worldPosition; // set the position of the pickup to the world position calculated from the mouse click
            pickups.Add(pickup); // add the pickup to the list of pickups

            // have teddy bear update its target
            teddyBear.UpdateTarget(pickup); // update the teddy bear's target to the newly created pickup
        }
	}

	/// <summary>
	/// Removes the given pickup from the game
	/// </summary>
	/// <param name="pickup">the pickup to remove</param>
	public void RemovePickup(GameObject pickup) // remove the specified pickup from the game
    {
		pickups.Remove(pickup); // remove the pickup from the list of pickups
        Destroy(pickup); // destroy the pickup GameObject to remove it from the scene
    }

	#endregion
}
