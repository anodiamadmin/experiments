namespace IntegerDataTypes
{
    /// <summary>
    /// Integer data types
    /// </summary>
    internal class Program
    {
        /// <summary>
        /// Main method
        /// </summary>
        /// <param name="args">Command-line-args</param>
        static void Main(string[] args)
        {
            const int SecondsPerMinute = 60; // seconds per minute
            int totalSecondsPlayed = 100; // total seconds played
            // calculate minutes and seconds played
            int minutesPlayed = totalSecondsPlayed / SecondsPerMinute; // calculate minutes played
            // print minutes and seconds played
            int secondsPlayed = totalSecondsPlayed % SecondsPerMinute; // calculate seconds played
            Console.WriteLine($"minutes Played: {minutesPlayed} minutes\nseconds played: {secondsPlayed} seconds");
        }
    }
}
