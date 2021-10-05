import React, { Component } from 'react';

class VideoItem extends Component {

    render() {

        //console.log(this.props)

        const { snippet: { thumbnails: { medium: { url: src } }, title: videoTitle} } = this.props.video;
        
        return (
            <div className='video-container'
                onClick={(event) => this.props.changeVideoInFrame(event)}
            >
                <div className='img-container'>
                    <img src={src} alt='videopreview'/>  
                </div>
                <div className='title-container'>
                    <p>{ videoTitle }</p>
                </div>
            </div>
        );
    }
}
 
export default VideoItem;