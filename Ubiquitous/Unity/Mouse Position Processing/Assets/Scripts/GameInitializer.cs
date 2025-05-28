using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// Initializes the game
/// </summary>
public class GameInitializer : MonoBehaviour 
{
    /// <summary>
    /// Awake is called before Start
    /// </summary>
	void Awake() // This is called before Start, so we can initialize things here
    {
        // initialize screen utils
        ScreenUtils.Initialize(); // This initializes the screen utilities, which is necessary for the game to function correctly
    }
}
