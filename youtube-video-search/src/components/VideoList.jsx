import React, { Component } from "react";
import WatchVideo from "../pages/WatchVideo";
import VideoItem from "./VideoItem";

class VideoList extends Component {

    //state = { video: ... }

    changeVideoInFrame = (event) => {
        event.preventDefault();
        // this.setState({
        //     video: ...
        // })
    }
    
    render() {
        //console.log(this.state.video);        

        return (

            <div className='content-holder'>
                <div>
                    {
                        this.props.videos.map(video => 
                            <WatchVideo id={video} />)
                        .shift()
                    }
                </div>  
                <div>
                    <div>
                        {
                            this.props.videos.map(video =>                              
                                <VideoItem
                                    video={video}
                                    key={video.id.videoId}
                                    changeVideoInFrame={ this.changeVideoInFrame }
                                />)
                        }
                    </div>
                </div>
            </div>)
    }
}
 
export default VideoList;