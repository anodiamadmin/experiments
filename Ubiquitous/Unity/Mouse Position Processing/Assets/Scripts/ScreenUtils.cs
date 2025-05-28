using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// The ScreenUtils class is a static utility class designed to provide screen boundary information in world coordinates for use in Unity. 
/// It ensures efficient boundary checking and adapts to screen resolution changes
/// </summary>
public static class ScreenUtils
{
    #region Fields

    // saved to support resolution changes when game windows are resized
    static int screenWidth; // variable to store the width of the screen in pixels
    static int screenHeight; // variable to store the height of the screen in pixels

    // cached for efficient boundary checking
    static float screenLeft; // variable to store the left edge of the screen in world coordinates
    static float screenRight; // variable to store the right edge of the screen in world coordinates
    static float screenTop; // variable to store the top edge of the screen in world coordinates
    static float screenBottom; // variable to store the bottom edge of the screen in world coordinates

    #endregion // code organizing in collapsible regions

    #region Properties

    /// <summary>
    /// Gets the left edge of the screen in world coordinates
    /// </summary>
    /// <value>left edge of the screen</value>
    public static float ScreenLeft
    {
        get
        {
            CheckScreenSizeChanged(); // check if the screen size has changed   
            return screenLeft; // return the left edge of the screen in world coordinates
        }
    }

    /// <summary>
    /// Gets the right edge of the screen in world coordinates
    /// </summary>
    /// <value>right edge of the screen</value>
    public static float ScreenRight
    {
        get
        {
            CheckScreenSizeChanged(); // check if the screen size has changed
            return screenRight; // return the right edge of the screen in world coordinates
        }
    }

    /// <summary>
    /// Gets the top edge of the screen in world coordinates
    /// </summary>
    /// <value>top edge of the screen</value>
    public static float ScreenTop
    {
        get
        {
            CheckScreenSizeChanged(); // check if the screen size has changed
            return screenTop; // return the top edge of the screen in world coordinates
        }
    }

    /// <summary>
    /// Gets the bottom edge of the screen in world coordinates
    /// </summary>
    /// <value>bottom edge of the screen</value>
    public static float ScreenBottom
    {
        get 
        {
            CheckScreenSizeChanged(); // check if the screen size has changed
            return screenBottom; // return the bottom edge of the screen in world coordinates
        }
    }

    #endregion

    #region Methods

    /// <summary>
    /// This method initializes the screen utilities, setting up the screen boundaries in world coordinates
    /// </summary>
    public static void Initialize()
    {
        // save to support resolution changes
        screenWidth = Screen.width; // stores the current screen width in pixels
        screenHeight = Screen.height; // stores the current screen height in pixels

        // save screen edges in world coordinates
        float screenZ = -Camera.main.transform.position.z; // get the z position of the camera to convert screen coordinates to world coordinates
        Vector3 lowerLeftCornerScreen = new Vector3(0, 0, screenZ); // create a vector for the lower left corner of the screen in screen coordinates
        Vector3 upperRightCornerScreen = new Vector3(
            screenWidth, screenHeight, screenZ); // create a vector for the upper right corner of the screen in screen coordinates
        Vector3 lowerLeftCornerWorld =
            Camera.main.ScreenToWorldPoint(lowerLeftCornerScreen); // convert the lower left corner from screen coordinates to world coordinates
        Vector3 upperRightCornerWorld =
            Camera.main.ScreenToWorldPoint(upperRightCornerScreen); // convert the upper right corner from screen coordinates to world coordinates
        screenLeft = lowerLeftCornerWorld.x; // set the left edge of the screen in world coordinates
        screenRight = upperRightCornerWorld.x; // set the right edge of the screen in world coordinates
        screenTop = upperRightCornerWorld.y; // set the top edge of the screen in world coordinates
        screenBottom = lowerLeftCornerWorld.y; // set the bottom edge of the screen in world coordinates
    }

    /// <summary>
    /// Checks for screen size change
    /// </summary>
    static void CheckScreenSizeChanged()
    {
        if (screenWidth != Screen.width || 
            screenHeight != Screen.height) // if the screen width or height has changed from the stored/cached values
        {
            Initialize(); // if the screen size has changed, recalculates the screen boundaries
        }
    }

    #endregion
}
