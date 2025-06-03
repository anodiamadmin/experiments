using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// The CharacterChanger class is a Unity script that allows the player to change the character in the game by clicking the left mouse button
/// </summary>
public class CharacterChangerWithCustomInputAxes : MonoBehaviour
{
    [SerializeField] // This attribute allows us to assign these GameObjects in the Unity Inspector
    GameObject prefabCharacter0; // Prefab for the first character
    [SerializeField]
    GameObject prefabCharacter1; // Prefab for the second character
    [SerializeField]
    GameObject prefabCharacter2; // Prefab for the third character
    [SerializeField]
    GameObject prefabCharacter3; // Prefab for the fourth character

    // need for location of new character
    GameObject currentCharacter; // Variable to hold the current character GameObject
    // int lastPrefabNumber = -1; // Variable to hold the last prefab index, initialized to -1 so it doesn't match any prefab index (between 0-3) at the start

    // First frame input support
    bool previousChangeCharacterInput = false; // Variable to track the previous state of the "ChangeCharacter" input, set to false initially because no input has been received yet

    /// <summary>
    /// Start is called before the first frame update
    /// </summary>
    void Start()
    {
        currentCharacter = Instantiate<GameObject>(
            prefabCharacter0, Vector3.zero,
            Quaternion.identity); // Instantiate the first character at the origin (Vector3.zero = 0,0,0) with no rotation (Quaternion.identity)
        // int lastPrefabNumber = 0; // Initialize the last prefab index to 0, since we just instantiated the first character
    }

    /// <summary>
    /// Update is called once per frame
    /// </summary>
    void Update()
    {
        // change character on left mouse button
        if (Input.GetAxis("ChangeCharacter") > 0) // Check if the custom input axis "ChangeCharacter" is pressed (greater than 0 because positive button). This axis can be configured in Unity's Input Manager.
        {
            if (!previousChangeCharacterInput) 
            { 
                previousChangeCharacterInput = true; // Set the previous input state to true if the input is pressed, so that we can detect the first frame of input
                // save position and destroy current character
                Vector3 position = currentCharacter.transform.position;
                Destroy(currentCharacter);

                // Generate a random prefab index that is not the same as the last one

                int prefabNumber = Random.Range(0, 4); // Generate a random number between 0 and 3 (upper bound inclusive for Range()) to select a character prefab and store in the variable prefabNumber
            
                // int prefabNumber;
                // do
                // {
                //     prefabNumber = Random.Range(0, 4); // Generate a random number between 0 and 3 (upper bound inclusive for Range()) to select a character prefab and store in the variable prefabNumber       
                // } while (prefabNumber == lastPrefabNumber);

                // instantiate new character
                if (prefabNumber == 0)
                {
                    currentCharacter = Instantiate<GameObject>(
                        prefabCharacter0, position, Quaternion.identity);
                }
                else if (prefabNumber == 1)
                {
                    currentCharacter = Instantiate<GameObject>(
                        prefabCharacter1, position, Quaternion.identity);
                }
                else if (prefabNumber == 2)
                {
                    currentCharacter = Instantiate<GameObject>(
                        prefabCharacter2, position, Quaternion.identity);
                }
                else
                {
                    currentCharacter = Instantiate<GameObject>(
                        prefabCharacter3, position, Quaternion.identity);
                }
                    // Update the last prefab index
                    // lastPrefabNumber = prefabNumber;
                    // Note: Commented out lines 84, 56-60, 34 and 21 implements a logic to ensure that the same character does not popup twice in a row on mouse click. To implement it, uncomment those lines and comment out the line no. 54 before building the solution.
            }
        }
        else
        {
            // no change character input
            previousChangeCharacterInput = false; // Reset the previous input state to false if the input is not pressed 
        }
    }
}
