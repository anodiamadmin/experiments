using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// A timer
/// </summary>
public class Timer : MonoBehaviour
{
	#region Fields
	
	// timer duration
	float totalSeconds = 0; // total seconds to run the timer for; can be set by consumer of class

    // timer execution
    float elapsedSeconds = 0;
	bool running = false; // true if the timer is currently running

    // support for Finished property
    bool started = false; // true if the timer has been started at least once

    #endregion

    #region Properties

    /// <summary>
    /// Sets the duration of the timer
    /// The duration can only be set if the timer isn't currently running
    /// </summary>
    /// <value>duration</value>
    public float Duration
    {
		set
        {
			if (!running) // only allow setting duration if the timer isn't running
            {
				totalSeconds = value; // set the duration
            }
		}
	}
	
	/// <summary>
	/// Gets whether or not the timer has finished running
	/// This property returns false if the timer has never been started
	/// </summary>
	/// <value>true if finished; otherwise, false.</value>
	public bool Finished
    {
		get { return started && !running; }  // true if the timer has been started and is no longer running
    }
	
	/// <summary>
	/// Gets whether or not the timer is currently running
	/// </summary>
	/// <value>true if running; otherwise, false.</value>
	public bool Running
    {
		get { return running; } // true if the timer is currently running
    }

    #endregion

    #region Methods

    /// <summary>
    /// Update is called once per frame
    /// </summary>
    void Update()
    {	
		// update timer and check for finished
		if (running) // only update if the timer is running
        {
			elapsedSeconds += Time.deltaTime; // increment elapsed seconds by the time since the last frame
            if (elapsedSeconds >= totalSeconds) // check if the elapsed time has reached or exceeded the total duration
            {
				running = false; // stop the timer
            }
		}
	}
	
	/// <summary>
	/// Runs the timer
	/// Because a timer of 0 duration doesn't really make sense,
	/// the timer only runs if the total seconds is larger than 0
	/// This also makes sure the consumer of the class has actually 
	/// set the duration to something higher than 0
	/// </summary>
	public void Run()
    {	
		// only run with valid duration
		if (totalSeconds > 0) // check if the total seconds is greater than 0
        {
			started = true; // mark the timer as started
			running = true; // set the timer to running
            elapsedSeconds = 0; // reset elapsed seconds to 0
        }
	}
	
	#endregion
}
