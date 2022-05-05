import React from 'react';

const VideoItem = (props) => {
  return <li>Li{props.item.snippet.title}</li>;
};

export default VideoItem;
