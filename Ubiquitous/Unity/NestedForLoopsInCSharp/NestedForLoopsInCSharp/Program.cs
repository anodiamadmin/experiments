using System;

namespace NestedForLoopsInCSharap
{
    /// <summary>
    /// Nested For Loops lecture code
    /// </summary>
    internal class Program
    {
        /// <summary>
        /// Nested For Loops in C#
        /// </summary>
        /// <param name="args">command-line args</param>
        static void Main(string[] args)
        {
            // print table header
            Console.Write("     "); // print empty space for alignment
            for (int i = 1; i <= 10; i++) // print column headers from 1 to 10
            {
                Console.Write("{0, 5}", i); // {0, 5} formats the output to be right-aligned in a field of width 5
            }
            Console.WriteLine(); // move to the next line after printing headers

            // print multiplication table
            for (int i = 1; i <= 10; i++) // outer loop for each row, i represents the multiplicand
            {
                Console.Write("{0, 5}", i); // print the row header (the multiplicand) aligned in a field of width 5
                for (int j = 1; j <= 10; j++) // nested loop for multiplication. using j as the multiplier because nested loop falls into iterator i's scope, can not use it twice 
                {
                    Console.Write("{0, 5}", i * j); // {0, 5} formats the product to be right-aligned in a field of width 5
                }
                Console.WriteLine(); // move to the next line after printing all products for the current multiplicand
            }
        }
    }
}
