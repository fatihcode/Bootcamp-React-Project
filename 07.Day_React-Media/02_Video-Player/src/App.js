import React from 'react';
import Menu from './Menu';
import Video from './Video';


const VIDEOS = {
  fast: 'https://cdn.videvo.net/videvo_files/video/free/2015-04/small_watermarked/Equestrian_04_Videvo_preview.webm',
  slow: 'https://cdn.videvo.net/videvo_files/video/free/2019-11/small_watermarked/190301_1_25_11_preview.webm',
  cute: 'https://cdn.videvo.net/videvo_files/video/free/2016-03/small_watermarked/gatos__preview.webm',
  eek: 'https://cdn.videvo.net/videvo_files/video/free/2014-04/small_watermarked/Albino_Snake_CCBY_NatureClip_preview.webm'
};

export default class App extends React.Component {

  state = { src: "" }

  chooseVideo = (src) => {
    this.setState({ src: VIDEOS[src] })
  }

  render() {
    return (
      <div className="card">

        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />

      </div>
    );
  }
}