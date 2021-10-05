import React, { Component } from "react";

class WatchVideo extends Component {

    render() {
        const videoId = this.props.id.id.videoId;
        
        //console.log(this.props);
        
        return (
            <div>
                <div>
                    <iframe
                        title='videoPlayer'
                        src={`https://www.youtube.com/embed/${videoId}`}>
                    </iframe>  
                </div>
                <div>
                    <b>
                        {this.props.id.snippet.title}
                    </b>
                    <p>
                        {this.props.id.snippet.description}
                    </p> 
                </div>
            </div>);
    }
}
 
export default WatchVideo;