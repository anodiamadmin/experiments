using System;
using System.Collections.Generic;

namespace ObjectsAsParams
{
    /// <summary>
    /// A Closer Look at Methods lecture code
    /// </summary>
    internal class Program
    {
        /// <summary>
        /// Demonstrates passing an object as a parameter
        /// </summary>
        /// <param name="args">command-line args</param>
        static void Main(string[] args)
        {
            // build a hand of cards
            List<Card> hand = new List<Card>();
            hand.Add(new Card(Rank.Two, Suit.Clubs));
            hand.Add(new Card(Rank.Three, Suit.Diamonds));
            hand.Add(new Card(Rank.Four, Suit.Hearts));
            hand.Add(new Card(Rank.Three, Suit.Spades));
            hand.Add(new Card(Rank.Two, Suit.Diamonds));

            // cheat
            CardChanger cardChanger = new CardChanger();
            foreach (Card card in hand)
            {
                cardChanger.ChangeCard(card);
            }

            // print cheating results
            foreach (Card card in hand)
            {
                card.FlipOver();
                card.Print();
            }
        }
    }
}
