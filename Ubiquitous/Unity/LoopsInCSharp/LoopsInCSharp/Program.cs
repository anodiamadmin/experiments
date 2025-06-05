namespace ForLoopsInCSharp
{
    internal class Program
    {
        /// <summary>
        /// For Loops in C# are used to execute a block of code a specific number of times.
        /// </summary>
        /// <param name="args"></param>
        static void Main(string[] args)
        {
            // Print the squares from 1 to 10 using a for loop
            for(int i = 1; i <= 10; i++) // i starts at 1, goes up to and including 10, incrementing by 1 each time
            {
               Console.WriteLine($"Square of {i} is {i * i}");
            }

            // prompt for and get number of squares to print from user
            Console.Write("Enter number of squares to print: "); // prompt user for input
            int n = int.Parse(Console.ReadLine()); // read user input and convert it to an integer

            // print the squares from 1 to n
            for (int i = 1; i <= n; i++) // i starts at 1, goes up to and including n, incrementing by 1 each time
            {
                Console.WriteLine(i * i);
            }

            // Note: if user inputs 0, the loop will not execute because the condition i <= n will be false as we initialized i to 1 (initializing to 0 will print 0 in this case)
        }
    }
}
