using System;
using System.Collections.Generic; // using directive for List<T>
using ConsoleCards; // using directive for the ConsoleCards namespace

namespace MoreForLoopsInCSharp
{
    /// <summary>
    /// More For Loops i C#
    /// </summary>
    internal class Program
    {
        /// <summary>
        /// For Loops with Lists and .dll dependency
        /// </summary>
        /// <param name="args">command-line args</param>
        static void Main(string[] args)
        {
            Deck deck = new Deck(); // create a new deck of cards
            List<Card> hand = new List<Card>(); // create a new list of cards named hand

            // add cards to hand
            hand.Add(deck.TakeTopCard());
            hand.Add(deck.TakeTopCard());
            hand.Add(deck.TakeTopCard());

            // print cards in hand
            for (int card = 0; card < hand.Count; card++) // for loop to iterate through the hand list
            {
                Console.WriteLine(hand[card].Rank + " of " +
                    hand[card].Suit);
            }

            //for (int card = 1; card <= hand.Count; card++) // for loop to iterate through the hand list starting from 1
            //{
            //    Console.WriteLine(hand[card - 1].Rank + " of " +
            //        hand[card - 1].Suit); // Adjust index by subtracting 1
            //} // Decrementing 1 because lists are zero-indexed and the loop starts at 1

            // add five more cards to hand
            for (int card = 1; card <= 5; card++) // for loop to add five more cards. card++ is same as card = card + 1
            {
                hand.Add(deck.TakeTopCard());
            }

            // print cards in hand
            Console.WriteLine();
            for (int card = 0; card < hand.Count; card++) // for loop to iterate through the hand list again
            {
                Console.WriteLine(hand[card].Rank + " of " +
                    hand[card].Suit);
            }
        }
    }
}