import React from 'react';
import Button from './Button';

/**
 * The function returns another component. Here we are adding
 * hard coded styles to distinguish the differences between the buttons
 * the regular button has a default style. PrimaryButton has a specific border
 */

export default function PrimaryButton(props) {
  /**If we are sending down props to the button, we just spread them down with
   * the spread syntax: [...]. Everything that Button has to have */
  return (
    <Button {...props} style={ { border: '2px solid #ff00cc' }  } />
  );
}