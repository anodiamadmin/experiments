﻿using System;

namespace WhyWeIndexArraysFromZero
{
    /// <summary>
    /// Why We Start indexing Arrays from Zero
    /// </summary>
    internal class Program
    {
        /// <summary>
        /// Demonstrates why we start indexing at zero
        /// </summary>
        /// <param name="args">command-line args</param>
        static void Main(string[] args)
        {
            int[] scores = { 100, 95, 90, 85, 80 }; // array initialized with 5 predefined elements

            // output array information
            // ugly unsafe access to address of array element
            // note use of unsafe block and compiled with unsafe code allowed
            unsafe // unsafe block to allow pointer arithmetic and direct memory access
            {
                fixed (int* elementAddress = &scores[0]) // fixed statement to pin the address of the first element
                {
                    Console.WriteLine("scores[{0}] Address: {1} Contents: {2}\n", 0, (int)elementAddress, scores[0]); // output address and contents of the first element
                }
                fixed (int* elementAddress = &scores[1])
                {
                    Console.WriteLine("scores[{0}] Address: {1} Contents: {2}\n", 1, (int)elementAddress, scores[1]);
                }
                fixed (int* elementAddress = &scores[2])
                {
                    Console.WriteLine("scores[{0}] Address: {1} Contents: {2}\n", 2, (int)elementAddress, scores[2]);
                }
                fixed (int* elementAddress = &scores[3])
                {
                    Console.WriteLine("scores[{0}] Address: {1} Contents: {2}\n", 3, (int)elementAddress, scores[3]);
                }
                fixed (int* elementAddress = &scores[4])
                {
                    Console.WriteLine("scores[{0}] Address: {1} Contents: {2}\n", 4, (int)elementAddress, scores[4]);
                }
            }
        }
    }
}
