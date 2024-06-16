## React Application with State, Props, Hooks, JSX, and CSS

This project demonstrates managing state and props in a React component using hooks, JSX, and CSS. It includes a simple counter application as an example.

### Installation

1. Clone this repository.
2. Install dependencies: `npm install`

### Running the application

1. Start the development server: `npm start`
2. Open http://localhost:3000/ in your browser.

### Code Structure

- `src/`: Contains the application source code.
  - `App.js`: The main application component.
  - `styles.css`: Global CSS styles.

### App.js

This file implements the counter application:

```javascript
import React, { useState } from "react";
import "./styles.css";

function App() {
  // State to store the counter value
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const handleIncrement = () => setCount(count + 1);

  // Function to decrement the counter
  const handleDecrement = () => setCount(count - 1);

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} disabled={count === 0}>
        Decrement
      </button>
    </div>
  );
}

export default App;
```

**Explanation:**

- We import `useState` from React to manage the counter state.
- We define the `App` function as a functional component.
- Inside `App`, we declare the state variable `count` and its setter function `setCount` using `useState(0)`.
- We define two functions: `handleIncrement` and `handleDecrement` to update the count.
- The component renders JSX elements:
  - An `<h1>` element displaying "Counter".
  - A `<p>` element displaying the current count value.
  - Two buttons:
    - One to increment the count (disabled if count reaches 0).
    - One to decrement the count.

### styles.css

This file defines basic styling for the application:

```css
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

.App {
  text-align: center;
  padding: 20px;
}
```

**Explanation:**

- We define styles for the body and the `App` class.
- These styles set basic font family, margins, and padding.

### Summary

This example demonstrates how to use React hooks (`useState`) to manage state, pass props between components (button click functions), implement JSX for UI elements, and use basic CSS for styling. You can extend this structure to build more complex React applications.
