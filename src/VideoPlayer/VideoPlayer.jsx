import React from "react";

import { Video } from "./Video";
import { Menu } from "./Menu";

import "./videoplayer.scss";

const VIDEOS = {
  fast:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  slow:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cute:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  eek:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: VIDEOS.fast };
    this.chooseVideo = this.chooseVideo.bind(this);
  }

  chooseVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo]
    });
  }

  render() {
    return (
      <div className="v-player">
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />
      </div>
    );
  }
}

export default VideoPlayer;
