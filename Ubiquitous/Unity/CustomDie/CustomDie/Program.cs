namespace CustomDie
{
    /// <summary>
    /// Demonstrates the testing of Die class
    /// </summary>
    internal class Program
    {
        /// <summary>
        /// Tests the Die class
        /// </summary>
        /// <param name="args"></param>
        static void Main(string[] args)
        {
            // test standard die
            Die standardDie = new Die(); // Create an instance of the Die class using the default constructor
            Console.WriteLine("Standard Die");
            Console.WriteLine("----------");
            Console.WriteLine("Number of Sides: " + standardDie.NumSides); // Access the NumSides property to get the number of sides
            Console.WriteLine("Top Side: " + standardDie.TopSide); // Access the TopSide property to get the current top side
            Console.WriteLine(); // Print a blank line for better readability

            // roll the standard die
            Console.WriteLine("Rolling the standard die..."); // Print a message indicating that the die is being rolled
            standardDie.Roll(); // Call the Roll method to simulate rolling the die
            Console.WriteLine("Top Side: " + standardDie.TopSide);
            Console.WriteLine();

            // test D20 die
            Die d20Die = new Die(20); // Create an instance of the Die class using the parameterized constructor that takes an integer parameter for the number of sides
            Console.WriteLine("D20 Die");
            Console.WriteLine("----------");
            Console.WriteLine("Number of Sides: " + d20Die.NumSides); // Access the NumSides property to get the number of sides
            Console.WriteLine("Top Side: " + d20Die.TopSide); // Access the TopSide property to get the current top side
            Console.WriteLine(); // Print a blank line for better readability

            // roll the D20 die
            Console.WriteLine("Rolling the d20 die..."); // Print a message indicating that the die is being rolled
            d20Die.Roll(); // Call the Roll method to simulate rolling the die
            Console.WriteLine("Top Side: " + d20Die.TopSide);
            Console.WriteLine();
        }
    }
}
