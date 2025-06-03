using System;

namespace WhileLoopsInCSharp
{
    internal class Program
    {
        /// <summary>
        /// While loops in C# are used to repeatedly execute a block of code as long as a specified condition is true
        /// </summary>
        /// <param name="args">command-line args</param>
        static void Main(string[] args)
        {
            // prompt for and get health
            Console.Write("What's your health (0-100)? "); // prompt user for health input
            int health = int.Parse(Console.ReadLine()); // read health from user input

            // input validation
            while (health < 0 ||
                health > 100) // check if health is outside the valid range
            {
                Console.WriteLine(); // print a blank line for better readability
                Console.WriteLine("Health needs to be between 0 and 100"); // print error message if health is out of range
                Console.Write("What's your health (0-100)? "); // prompt user for health input again (when previous input is out of range)
                health = int.Parse(Console.ReadLine()); // read health from user input again and assign it to health variable
            }

            // print health
            Console.WriteLine(); // print a blank line for better readability
            Console.WriteLine("Your health: " + health); // print the valid health value to the console
        }
    }
}
