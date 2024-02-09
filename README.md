# fe-03 : Cards

Your goal is to use HTML and CSS to layout the faces of some playing cards. **Don't feel obligated to do all 10.** But I won't stop you if you feel ambitious.

<img width="611" alt="Screenshot 2024-02-08 at 10 16 52 PM" src="https://github.com/IGME-330-01-2235/fe03-cards/assets/1882129/06c63772-8dc2-40c3-bd01-d59afeb4a71e">

<img width="611" alt="Screenshot 2024-02-08 at 10 17 22 PM" src="https://github.com/IGME-330-01-2235/fe03-cards/assets/1882129/9d632091-80e7-4a12-9d55-95f26583008c">

<br/><br/>

In order of complexity (easy to difficult), I'd rank them as follows:

* A
* 2, 4, 10
* 3, 6
* 5, 9
* 8, 7

To get full credit for this assignment, complete *at least* the first **three** cards (A, 2, 3). There are no unit or e2e tests, just be sure I can load up http://localhost:5173 and see the cards. Go further if you find personal value in the extra practice.

## Recommended Steps

#### 0 - Initial Setup

Perform the steps we are getting used to for every repository setup. (Except you don't have to worry about test commands, as there are none for this exercise.)

<details>
<summary> <i>Hint: Initial Setup</i> </summary>

1. Clone the Repo
2. Open GitBash at the repo root folder.
3. Run `npm install`
4. ~~Run `npm run test:install`~~ - no tests this exercise
5. Run `npm start`
6. ~~(In a new GitBash window) Run `npm run test:unit`~~ - no tests this exercise
7. ~~(In a new GitBash window) Run `npm run test:e2e`~~ - no tests this exercise
8. Open the project in VS Code
9. Open the browser to http://localhost:5173

</details>

<br/><br/>

#### 1 - The Tour

Take a tour around the codebase. Here are some landmarks:

**index.html** - This has the markup. Notice the custom `<card-suit>` HTML tag? We can define our own Custom Elements - which I did here to make it easy to swap the different suit symbols.

**Suit `<button>`** - Clicking the suit buttons at the top of the page already changes the `<card-suit>` symbols for us. This is done using the same body/className trick we've used a few times, in conjunction with some CSS (see the bottom of `src/styles/styles.css`).

**Flip `<button>`** - Clicking the flip button changes the className on `section#cards` from `fronts` to `backs` and back. This, in turn, drives the transitions specified in `src/styles/card-flip.css` to get a pleasing flip effect.

**main.ts** - Our main file imports all the CSS, defines the `<card-suit>` Custom Element (along with `src/CardSuit.ts`), and hooks up the button events. I left some comments for the curious - but you shouldn't need to touch this file.

> For this exercise, you'll be spending most (all?) of your time in `src/index.html` and `src/styles/card-layout.css`.

<br/><br/>

#### 2 - Corners

Find your strategy for putting the value and suit symbol in the upper-left and lower-right corners of each card.

You should be doing this by adding HTML elements to the `<div class="front">` in `index.html`, and then styling it in `src/styles/card-layout.css`.

<details>
<summary> <i>Hint: Position</i> </summary>

I recommend making these with an `absolute` positioned parent div, which has two block-level elements as children (one block is the number, the second block is the suit).

</details>

<details>
<summary> <i>Hint: Upside Down</i> </summary>

To flip things upside down, consider `transform: rotateZ(180deg)` and maybe an adjustment to the `transform-origin` property to adjust the pivot point if need be.

</details>

<br/><br/>

#### 3 - Content

Find your strategy for arranging the suit symbols around the face of the card. Don't just jump into writing code. Instead, think about how to order and group the symbols in ways that make it easier to apply some flexbox styles.

Try to avoid using `position: absolute` when working on this step.

If you feel stuck, reference the [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - as well as any notes we took in the Warm-Up document.

<br/><br/>

#### 4 - Complete?

To get full credit for this assignment, complete at least the first three cards (A, 2, 3). There are no unit or e2e tests, just be sure I can load up http://localhost:5173 and see the cards. (Go further than the required three if you find personal value in the extra practice.)

Push your files to GitHub, and I'll take a look at them there.
