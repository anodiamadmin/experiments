namespace FloatingPointDataTypes
{
    /// <summary>
    /// Project for floating Point Data Types   
    /// </summary>
    internal class Program
    {
        /// <summary>
        /// Main method for the Floating Point Data Types project.
        /// </summary>
        /// <param name="args"></param>
        static void Main(string[] args)
        {
            int score = 14593;
            int secondsPlayed = 2873;
            // calculate and print the score per second
            double scorePerSecond = (double)score / secondsPlayed;
            Console.WriteLine($"Score per second: {scorePerSecond}");
        }
    }
}
