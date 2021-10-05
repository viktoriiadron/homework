import React, { Component } from 'react';
import SearchInput from '../components/SearchInput';
import VideoList from '../components/VideoList';
import { searchVideo } from '../api/youtube';
import '../App.css';

export default class SearchVideo extends Component {
  state = { videos: [] };

  onSearchSubmit = async (query) => {
    const response = await searchVideo(query);
    //console.log(response);
    this.setState({
      videos: response.data.items
    })
  }

  render() {
    return(
      <>
        <SearchInput onSubmit={ this.onSearchSubmit }/>
        <VideoList videos={this.state.videos} />
      </>
    )
  }
}