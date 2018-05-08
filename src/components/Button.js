import React from 'react';

export default function Button({ handleClick, value , style }) {
  /*  Depending om what value we send down this button can increase or
  * decrease the counter. The logic for updating the counter doesn't have to
  * be in here */
  let bool = value === "increase" ? true : false
  /* () => handleClick(bool) send back the value to the component above
  * look at how we have to use a anonymous function to prevent the function
  * from being called on mount. */
  return (
    <button onClick={() => handleClick(bool)}
            className="button" 
            style={ style }>
        { value }
    </button>
  );
}