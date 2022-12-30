import { useState, Fragment } from "react";
import "./App.css";

// Goal is to take an array of some data
// Converting that data and converting it to jsx components
// That will be added to the DOM
export default function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState([]);

  return (
    <div className="App">
      <ul>
        {/* We can use a javascipt expression to add an array */}
        {/* This map function returns an array of list items */}
        {/* This will present an error in the console for a duplicate key */}
        {/* {items.map(item => {
          return(
            <li key={item}>{item}</li>
          );
        })} */}

        {/* We can use an index as a workaround for a duplicated key if needed
        This is a temporary fix but can be useful, keeping keys unique is the way to go
        Using an index should be used as a last resort */}
        {/* {items.map((item, index) => {
          return(
            <li key={index}>{item}</li>
          );
        })} */}

        {/* Fragment edge case example, resulting in an error */}
        {/* {items.map((item, index) => {
          return (
            <>
              <li key={index}>{item}</li>
              <li>Fragment example we no longer have key props</li>
            </>
          );
        })} */}

        {/* We can address this by using an actual React Fragment
        What ever we add to the list will be rendered as the new Fragment of list items */}
        {items.map((item, index) => {
          return (
            <Fragment key={index}>
              <li>{item}</li>
              <li>Fragment example we no longer have key props</li>
            </Fragment>
          );
        })}
      </ul>

      {/* This is controlled by the newItem state */}
      <input
        type="text"
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
      />

      {/* The items are going to be set to the previous items */}
      {/* It will spread the previous items and then add the newItem */}
      {/* The newItem will then be reset to an empty string '' */}
      <button
        onClick={() => {
          setItems([...items, newItem]);
          setNewItem("");
        }}
      >
        Add List Item
      </button>
    </div>
  );
}
