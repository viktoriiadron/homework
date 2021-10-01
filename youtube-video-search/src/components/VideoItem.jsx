import React, { Component } from 'react';

class VideoItem extends Component {
    render() {
        const { snippet: { thumbnails: { medium: { url: src } }, title: videoTitle, description: videoDescription }, id: { videoId: videoId} } = this.props.video;
        
        //console.log(videoId)
        console.log(this.props.video)
        return (
            <div className='video-container'>
                <div className='img-container'>
                  <img src={src} alt='videopreview'/>  
                </div>
                <div className='title-container'>
                    <p>{ videoTitle }</p>
                </div>
                

            </div>);
    }
}
 
export default VideoItem;