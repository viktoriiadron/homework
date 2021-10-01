import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {


    
    render() {
        console.log(this.props.videos);
        return (
            <div>
                {
                    this.props.videos.map(video => <VideoItem
                        video={video}
                        key={ video.id.videoId }/>)
                }


            </div>);
    }
}
 
export default VideoList;