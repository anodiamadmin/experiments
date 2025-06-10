using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// Changes character on left mouse button
/// </summary>
public class CharacterChangerWithField : MonoBehaviour
{
    [SerializeField]
    GameObject[] prefabCharacters = new GameObject[4]; // array of character prefabs with 4 elements

    // need for location of new character
    GameObject currentCharacter;

    // first frame input support
    bool previousChangeCharacterInput = false;

    /// <summary>
    /// Start is called before the first frame update
    /// </summary>
    void Start()
    {
        currentCharacter = Instantiate<GameObject>(
            prefabCharacters[0], Vector3.zero,
            Quaternion.identity); // instantiate first character which is the first element in the array (at 0th index)
    }

    /// <summary>
    /// Update is called once per frame
    /// </summary>
    void Update()
    {
        // change character on left mouse button
        if (Input.GetAxis("ChangeCharacter") > 0)
        {
            if (!previousChangeCharacterInput)
            {
                previousChangeCharacterInput = true;

                // save position and destroy current character
                Vector3 position = currentCharacter.transform.position;
                Destroy(currentCharacter);

                // instantiate new character
                currentCharacter = Instantiate<GameObject>(
                    prefabCharacters[Random.Range(0, 4)], // random character (from the index number given by the Random.range(0,4) method) from the array
                    position, Quaternion.identity); // instantiate new character at the saved position
            }
        }
        else
        {
            // no change character input
            previousChangeCharacterInput = false;
        }
    }
}
