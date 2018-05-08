import React from 'react';

export default function Main({  Navbar, Content }) {
  return (
    <main className="container">
      <Navbar />
      <Content />
    </main>
  );
}


/** This is the alternative way to send down the content, check the commented
 * out code in App.js 
 */

// export default function Main(props) {
//   return (
//     <main className="container">
//       { props.children }
//     </main>
//   );
// }