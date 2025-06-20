using System;
using System.Collections.Generic;

namespace GettingValidUserInput
{
    /// <summary>
    /// Getting Valid User Input lecture code
    /// </summary>
    internal class Program
    {
		/// <summary>
		/// Demonstrates getting valid use input
		/// </summary>
		/// <param name="args">command-line args</param>
        static void Main(string[] args)
        {
			List<int> scores = new List<int>();

			int numScores = GetValidInput(
				"How many scores do you want to enter (1-10): ",
				"Number of scores must be between 1 and 10",
				1, 10);

			// get scores from user
			Console.WriteLine();
			for (int i = 0; i < numScores; i++)
			{
				scores.Add(GetValidInput(
					"Enter Score " + (i + 1) + " (0-100): ",
					"Score must be between 0 and 100",
					0, 100));
				Console.WriteLine();
			}
		}

		/// <summary>
		/// Gets a valid input from the user
		/// </summary>
		/// <param name="promptString">prompt string</param>
		/// <param name="errorString">error string</param>
		/// <param name="lowerBound">lower bound</param>
		/// <param name="upperBound">upper bound</param>
		/// <returns>valid input</returns>
		static int GetValidInput(string promptString,
			string errorString, int lowerBound,
			int upperBound)
		{
			int value;
			Console.Write(promptString);
			value = int.Parse(Console.ReadLine());
			while (value < lowerBound ||
				value > upperBound)
			{
				Console.WriteLine(errorString);
				Console.Write(promptString);
				value = int.Parse(Console.ReadLine());
			}
			return value;
		}
	}
}
