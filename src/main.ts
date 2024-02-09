import './styles/reset.css'
import './styles/styles.css'
import './styles/card-flip.css'
import './styles/card-layout.css'

import { CardSuit } from './CardSuit'
// Defining a <card-suit> Custom Element : https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
customElements.define('card-suit', CardSuit)
// We're not doing anything with Custom Elements (yet!), other than using <card-suit> in our HTML.

// changes the className on section#cards from (fronts to backs) or (backs to fronts)
const flipCards = () => {
  const cards = document.querySelector<HTMLElement>('#cards')
  if (cards) {
    cards.className = cards.className === 'fronts' ? 'backs' : 'fronts'
  }
}

// a generalized click handler, that does something different depending on the className of the target
const handleButtonClick = (event: MouseEvent) => {
  const button = event.currentTarget as HTMLButtonElement
  if (button.className === 'flip') {
    flipCards()
  } else {
    document.body.className = button.className
  }
}

// querySelectorAll gives us an array of all matching elements
document.querySelectorAll<HTMLButtonElement>('#suits button').forEach((button) => {
  button.addEventListener('click', handleButtonClick)
})