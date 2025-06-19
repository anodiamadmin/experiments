using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomDie
{
    /// <summary>
    /// A Die
    /// </summary>
    internal class Die
    {

        #region Fields

        // public int numSides; // public ACCESS MODIFIER allows access from outside the class
        int numSides; // Number of sides on the die. Integer data type (by default private)
        int topSide; // The side currently facing up. integer data type (by default private)

        #endregion

        #region Constructors

        /// <summary>
        /// Constructor for six-sided (standard) die
        /// </summary>
        //public Die()
        //{ 
        
        //    numSides = 6; // Default number of sides is set to 6 (for six-sided die)
        //    topSide = 1; // Default top side is set to 1 (the side facing up, could be any side from 1 to 6)
        //}

        public Die() : this(6) // Constructor that calls the other constructor with 6 sides as default
        {
            // This constructor is used to create a standard six-sided die by calling the other constructor with 6 sides
            // The this keyword refers to the current instance of the class and allows calling another constructor within the same class
        }

        /// <summary>  
        /// Constructor for custom die with user specified number of sides
        /// </summary>
        ///  <param name="numSides">The number of sides on the die</param>
        public Die(int numSides) // Constructor that takes an integer parameter for the number of sides
        {
            this.numSides = numSides; // Set the number of sides using the property setter. this keyword assigns the value of the parameter numSides to the instance variable numSides
            topSide = 1;
        }


        #endregion

        #region Properties

        /// <summary>
        /// Gets the number of sides on the die
        /// </summary>

        public int NumSides // Property to get the number of sides on the die
        {
            get { return numSides; } // get accessor returns the value of numSides
            // set { numSides = value; } // set accessor allows setting the value of numSides. value keyword represents the value being assigned to the property which can be changed
        }

        /// <summary>
        /// Gets the top side of the die
        /// </summary>
        public int TopSide 
        {
            get { return topSide; } // get accessor returns the value of topSide
        }

        #endregion

        #region Methods

        /// <summary>  
        ///  Rolls the die and returns the new top side
        /// </summary>
        public void Roll() // Method to roll the die and get a new top side
        {
            Random random = new Random(); // Create a new instance of the Random class to generate
            topSide = random.Next(1, numSides + 1); // Generate a random number between 1 and numSides (inclusive) and assign it to topSide
        }

            #endregion
        }
}
