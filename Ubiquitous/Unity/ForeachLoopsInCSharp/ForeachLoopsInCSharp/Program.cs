using System;
using System.Collections.Generic;
using ConsoleCards;

namespace ForeachLoopsInCSharp
{
    /// <summary>
    /// Foreach Loops in C#
    /// </summary>
    internal class Program
    {
        /// <summary>
        /// Demonstrates foreach loops and their use with collections
        /// </summary>
        /// <param name="args">command-line args</param>
        static void Main(string[] args)
        {
            // create deck and hand
            Deck deck = new Deck();
            List<Card> hand = new List<Card>();

            // add cards to hand
            hand.Add(deck.TakeTopCard());
            hand.Add(deck.TakeTopCard());
            hand.Add(deck.TakeTopCard());

            // print cards in hand
            foreach (Card card in hand) // Here we can use a foreach loop because we are iterating over a collection directly
            {
                Console.WriteLine(card.Rank + " of " +
                    card.Suit);
            }

            // add five more cards to hand
            for (int i = 1; i <= 5; i++) // Here we can not use a foreach loop because we are not iterating over a collection directly
            {
                hand.Add(deck.TakeTopCard());
            }

            // print cards in hand
            Console.WriteLine();
            foreach (Card card in hand)
            {
                Console.WriteLine(card.Rank + " of " +
                    card.Suit);
                // hand.Remove(card); // This is not safe to do in a foreach loop, as it modifies the collection while iterating over it
            }
        }
    }
}
