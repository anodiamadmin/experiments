using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// Changes character on left mouse button
/// </summary>
public class CharacterChangerWithList : MonoBehaviour
{
    List<GameObject> prefabCharacters = new List<GameObject>(); // list of character prefabs

    // need for location of new character
    GameObject currentCharacter;

    // first frame input support
    bool previousChangeCharacterInput = false;

    /// <summary>
    /// Start is called before the first frame update
    /// </summary>
    void Start()
    {
        // populate character prefab array
        prefabCharacters.Add(Resources.Load<GameObject>(
            @"Prefabs\Demon Hunter")); // adds Demon Hunter prefab to the list
        prefabCharacters.Add(Resources.Load<GameObject>(
            @"Prefabs\Madam Skunky"));
        prefabCharacters.Add(Resources.Load<GameObject>(
            @"Prefabs\Miss Pioneer"));
        prefabCharacters.Add(Resources.Load<GameObject>(
            @"Prefabs\Pro Miner"));

        currentCharacter = Instantiate<GameObject>(
            prefabCharacters[0], Vector3.zero,
            Quaternion.identity);
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
                    prefabCharacters[Random.Range(0, 4)],
                    position, Quaternion.identity);
            }
        }
        else
        {
            // no change character input
            previousChangeCharacterInput = false;
        }
    }
}
