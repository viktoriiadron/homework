import React, { Component } from 'react';
import SearchInput from './SearchInput';
import VideoList from './VideoList';
import { searchVideo } from '../api/youtube';
import '../App.css';

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
  state = { videos: [] };

  onSearchSubmit = async (query) => {
    const response = await searchVideo(query);
    console.log(response);
    this.setState({
      videos: response.data.items
    })
  }

  render() {
    return(
      <>
        <SearchInput onSubmit={ this.onSearchSubmit }/>
        <VideoList videos={ this.state.videos }/>
      </>
    )
  }
}
