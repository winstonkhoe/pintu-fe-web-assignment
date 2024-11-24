This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

**Working** **demo** of the page can be found here — [https://pintu-fe-web-assignment.vercel.app/](https://pintu-fe-web-assignment.vercel.app/)

**Demo explanation** of the web can be found here — [https://youtu.be/Ba78jEmFht0](https://youtu.be/Ba78jEmFht0)

# Application Design Documentation

## **Features**

**1.**	**Market Crypto Currencies Overview**
	Display a list of available currencies with its icon, name, currency group, price, percentage changes (daily, weekly, monthly, yearly)

**2.**	**Search Functionality**
	Allows users to search and filter the currencies list dynamically.

**3.**	**Almost Real-time Data Updates**
	Market data updates frequently with periodic/interval data fetching.

**4.**	**Responsive Design**
	Optimize different screen sizes (desktop, mobile)

**5.**	**Dark Mode**
	UI adapts based on system preference (light or dark mode).

## Technology Stack (Frontend Only)

* Next.js (TypeScript)
* TailwindCSS
* React Query

## Libraries

* **React Window** — Used for virtualization window
  * pros: improve initial rendering load
  * cons: look is not that similar to the ones at pintu's /market
* **React Icons** — For several icons used inside
  * pros: widely used, easy
  * cons: not that much.. but maybe limited options??
* **React SVG** — To handle SVG injection, so we can manipulate color
  * pros: have cache
  * cons: client side, initial load may have not image on it.
* **Lodash** - for debounce
  * pros: simple, easy
  * cons: -

## State Management

### Contexts

1. **FilterContext**
   Provides global state for managing the search input value.

### React Query

1. **Price Changes**
   Periodically fetches updated price data (every 5 seconds).
2. **Supported Currencies**
   Fetches supported currency information.

## Data Flow

1. **Fetching Data**
   * `usePriceChanges` hook fetches real-time market price data.
   * `useSupportedCurrencies` hook fetches all supported currencies that are filtered if matching market price data was found, then those will be return.
2. **Filtering**
   * The `SearchBar` updates the global filter state using `FilterContext`.
   * The `MarketTable` dynamically filters the paired data based on the search input.

## Subtle Animations

The `FilterList` which consists DeFi, NFT/Gaming, CEX, and etc has subtle hover and selected animation (color, opacity) which targets not to cause heavy rendering issue.

## Accessibility

Added for icon (cross icon), and search bar's input

## Performance Considerations

* **Debouncing Search**
  The SearchBar input uses a debounced state update to minimize unnecessary re-renders.
* **React Query**
  Handles caching and minimizes network requests.
* **React SVG**
  Handles caching SVG from URL
* **React Window**
  Add virtualizations window to reduce high initial rendering load (Lists contains 300+)
* **Reduce Rerendering on Price Change**
  To prevent a lot of whole element re-rendering on price change, I've prevented from making and using hook to Pair SupportedCurrencies with periodically fetched PriceChanges. I've found it's more "less" cleaner code, but with better performance.
  * pros: improve performance
  * cons: more lines of code to maintain

## Future Improvements

1. **WebSocket Integration** (of course should consider if data is worth using WS)
   Replace polling with WebSocket for real-time updates
2. **Enhanced Filtering**
   Add multi-criteria filters + sort, ex. search keyword, sort, price range
3. **My current code**
   * Make components more general (ex. Table Row - see if it can be generalized for more usage, to improve reusability)
   * Improve foldering structure of components, (current structure could be less ideal when more components got created)
   * Improve re-renderings
   * Adjust react-window/explore other library/DIY  to match the window's scroll
   * Add filter category functionality (DeFi, NFT/Gaming), as current api wasn't enough for me to categorized it (except manual way..)
   * Improve best practices
   * Add Integration Tests &/ Unit Tests
   * Improve StoryBook documentations
   * As app got more complex we can try with other state management libraries (ex. Redux)
   * Add more support for various device size (currently just focusing on semi-large desktop, and certain mobile size)
   * Improve UX both on mobile and desktop (Search functionality, filter)
   * Add options to change percentage price change view (currently only daily on mobile)

# Run Code

## Getting Started

First, create `.env.local` file and copy from `.env.example`, or copy from this:

```plaintext
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Storybook

To run storybook:

```bash
npm run storybook
```
