/* eslint-disable no-lone-blocks */

import "./App.css";

import React from 'react';


/* eslint-disable no-undef */


// function App() {
  // going to map over this array to add a <p> element to the page with each itme from below array
  // changed this below to add state so we can add the array to the page
  // const thingsArray = ["Thing 1", "Thing 2"];
  
  // changed above array to the one below  also added state to the function below 

  // const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
  /**
   * Challenge: Map over the thingsArray to generate
   * a <p> element for each item and render them on the page
   * below the button
   */
  // below is function to map over things array and add thing one and two to the page as paragraph
  // /had to add a key to make sure each string is unique else youll get an error and it wont work

  
  // adding event listener to button

  // we have to add state with react not document,getelementbytId in react to add items to the page
  // state makes ot so we can hook into the "state" which is our array so whenever we update our stae with the .map and button it will update the user interface aka the dom with what we added
  // function addItem() {
    // here we add text that we want added to the array when button is clicked
    // we used back ticks and templete litterallls

    // changed our newThingText to from thigns array.length to things.length for state below and abouve 

    // const newThingText = `Thing ${thingsArray.length + 1}`;

    // const newThingText = `Thing ${things.length + 1}`
    //     setThings(prevState => [...prevState, newThingText])

    // below we use .push to push new text into array
    
    // took out push an added the state documentation
    
    // thingsArray.push(newThingText);
    // console.log(thingsArray);

    // here we add state below 


  // changed below text from thingsArray.map to just thigns.map
  // const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);
  // const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
  /**
   * Challenge: Add an event listener to the button so when
   * it is clicked, it adds another thing to our array
   *
   * Hint: use the array length + 1 to determine the number
   * of the "Thing" being added. Also, have you event listener
   * console.log(thingsArray) after adding the new item to the
   * array
   *
   * Spoiler: the page won't update when new things get added
   * to the array!
   */

  // return (
  //   <div>
      {/* on button click this adds items to the array but only logs them to the console, and keeps adding thing one and two nothing new ? */}
      {/* <button onClick={addItem}>Add Item </button> */}
      {/* calling the thingsElements like this just added the array thing one and two  directly to the page, didint do anything with the button  */}
      {/* // so we would add curly brackets aND  call the thingsElements from above to add it to the page */}
{/* 
      {thingsElements} */}

      {/* Insert the things here*/}
    {/* </div>
  );
} */}
// we cant use array.push becuase we can never directly modify our state


function App() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
  
  function addItem() {
      const newThingText = `Thing ${things.length + 1}`
      // ... is an array spread operator 
      setThings(prevState => [...prevState, newThingText])
  }
  //  setThingsArray(<new value || callback function>) we use a call back functio because we need to know what the old value was 
  
  const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
  
  return (
      <div>
          <button onClick={addItem}>Add Item</button>
          {thingsElements}
      </div>
  )
}


// function App() {
//   const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
  // theres a few different thigns in this version but it still sroke, its not as broken down as the one above 
//   function addItem() {
//       setThingsArray(prevState => {
//           return [...prevState, `Thing ${prevState.length + 1}`]
//       })
//   }
  
//   const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  
//   return (
//       <div>
//           <button onClick={addItem}>Add Item</button>
//           {thingsElements}
//       </div>
//   )
// }

export default App;
