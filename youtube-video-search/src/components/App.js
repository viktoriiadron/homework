import React, { Component } from 'react';
import SearchInput from './SearchInput';
import VideoList from './VideoList';

// import './App.css';

// function App() {
//   return (
//     <div>
//       <h1>Hello from videoSearch</h1>
//     </div>
//   );
// }

// export default App;

export default class App extends Component {
  render() {
    return(
      <>
        <SearchInput />
        <VideoList />
      </>
    )
  }
}
