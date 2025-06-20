using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObjectsAsParams
{
    /// <summary>
    /// Changes cards into Aces
    /// </summary>
    class CardChanger
    {
        #region Constructors

        /// <summary>
        /// Constructor
        /// </summary>
        public CardChanger()
        {

        }

        #endregion

        #region Methods

        /// <summary>
        /// Changes the given card to be an Ace
        /// </summary>
        /// <param name="card">card to change</param>
        public void ChangeCard(Card card)
        {
            card.Rank = Rank.Ace;
        }

        #endregion
    }
}
