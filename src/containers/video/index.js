import React from 'react';
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [{
        src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        type: 'video/mp4',
        label: "HD"
      }]
    }
    this.player = videojs(this.videoNode, videoJsOptions, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
  }

  // destroy player on unmount

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div data-vjs-player>
        <video ref={ node => this.videoNode = node } className="video-js"></video>
      </div>
    )
  }
}
