using UsingDeckClass;

namespace DeckOfCards
{
    /// <summary>
    /// Deck Of Cards Program
    /// </summary>
    internal class Program
    {
        /// <summary>
        /// Demonstration of the Deck of Cards program
        /// </summary>
        /// <param name="args"> Command line arguments</param>
        static void Main(string[] args)
        {
            // Declares and prints a deck of cards
            Deck deck = new Deck();
            deck.Print();
            Console.WriteLine();
            Console.WriteLine("Deck empty:" + deck.Empty);
            Console.WriteLine();
            deck.Cut(13);
            deck.Print();
            Console.WriteLine();
            deck.Shuffle();
            deck.Print();
            Card topCard = deck.TakeTopCard();
            Console.WriteLine("Top card: " + topCard.Rank + " of " + topCard.Suit);
        }
    }
}
