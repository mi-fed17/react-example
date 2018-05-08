import React from 'react';
import Header from './Header';
import Main from './Main';
import Navbar from './Navbar';
import Content from './Content';
import '../styles/App.css';


/*  We can send along components as props if we like, this below is
 * not something bst practice. It is an example of what we are allowed to do.
 * Check Main component for how the components are used */
export default function App() {
  return (
    <div className="app">
      <Header />
      <Main Navbar={ Navbar }
            Content={ Content } />   
    </div>
  );
}

// We can also have this structure. But if we use this approach we have to 
// use 'this.props.children' in main component so 

// export default function App() {
//   return (
//     <div className="app">
//       <Header />
//       <Main>
//          <Content />
//          <Navbar />
//       </Main>
//     </div>
//   );
// }