using System;

namespace DrawingAsteriskBoxWithNestedForLoop
{
    /// <summary>
    /// Nesting and Boxes
    /// </summary>
    internal class Program
    {
        /// <summary>
        /// Takes user input to draw a box of asterisks with specified width and height.
        /// 
        /// The idea for this problem comes from Beginning C by Ivor Horton
        /// </summary>
        /// <param name="args">command-line args</param>
        static void Main(string[] args)
        {
            int width; // Variable to hold the width of the box
            int height; // Variable to hold the height of the box

            // get valid width
            Console.Write("Enter box width (3-20): "); // Prompt user for width
            width = int.Parse(Console.ReadLine()); // Read user input and convert to integer
            while (width < 3 || width > 20) // Validate width input (must be between 3 and 20)
            {
                Console.WriteLine("Width must be between 3 and 20"); // Inform user of invalid Width input
                Console.Write("Enter box width (3-20): "); // Prompt again if invalid
                width = int.Parse(Console.ReadLine()); // Read user input again
            }

            // get valid height
            Console.WriteLine(); // Print a blank line for better readability
            Console.Write("Enter box height (3-20): "); // Prompt user for height
            height = int.Parse(Console.ReadLine()); // Read user input and convert to integer
            while (height < 3 || height > 20) // Validate height input (must be between 3 and 20)
            {
                Console.WriteLine("Height must be between 3 and 20"); // Inform user of invalid Height input
                Console.Write("Enter box height (3-20): "); // Prompt again if invalid
                height = int.Parse(Console.ReadLine()); // Read user input again
            }
            Console.WriteLine(); // Print a blank line for better readability

            // print top row
            for (int i = 1; i <= width; i++) // Loop to print the top row of the box
            {
                Console.Write('*'); // Print an asterisk for each column in the top row
            }
            Console.WriteLine(); // Move to the next line after printing the top row

            // print middle of box
            for (int row = 2; row <= height - 1; row++) // Loop through each row in the middle of the box
            {
                Console.Write('*'); // Print the left border of the box
                for (int column = 2; column <= width - 1; column++) // Loop through each column in the middle of the box
                {
                    Console.Write(' '); // Print a space for the hollow interior of the box
                }
                Console.Write('*'); // Print the right border of the box
                Console.WriteLine(); // Move to the next line after printing the middle row
            }

            // print bottom row
            for (int i = 1; i <= width; i++) // Loop to print the bottom row of the box
            {
                Console.Write('*'); // Print an asterisk for each column in the bottom row
            }
            Console.WriteLine(); // Move to the next line after printing the bottom row
        }
    }
}
