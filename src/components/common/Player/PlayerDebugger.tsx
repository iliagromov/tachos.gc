import React, { Component } from 'react';
import { PrismCode } from 'react-prism';
import { Player, ControlBar } from 'video-react';
import { Button } from 'reactstrap';

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm'
};

export default class PlayerControlExample extends Component {
  constructor(props: any, context: any) {
    super(props, context);

    this.state = {
      source: sources.bunnyMovie
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  setMuted(muted) {
    return () => {
      this.player.muted = muted;
    };
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  load() {
    this.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      this.player.seek(player.currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.playbackRate = player.playbackRate + steps;
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.volume = player.volume + steps;
    };
  }

  changeSource(name) {
    return () => {
      this.setState({
        source: sources[name]
      });
      this.player.load();
    };
  }

  render() {
    return (
      <div>
        <Player
          ref={player => {
            this.player = player;
          }}
          autoPlay
        >
          <source src={this.state.source} />
          <ControlBar autoHide={false} />
        </Player>
        <div className="py-3">
          <Button onClick={this.play} className="page-btn">
            play()
          </Button>
          <Button onClick={this.pause} className="page-btn">
            pause()
          </Button>
          <Button onClick={this.load} className="page-btn">
            load()
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.changeCurrentTime(10)} className="page-btn">
            currentTime += 10
          </Button>
          <Button onClick={this.changeCurrentTime(-10)} className="page-btn">
            currentTime -= 10
          </Button>
          <Button onClick={this.seek(50)} className="page-btn">
            currentTime = 50
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.changePlaybackRateRate(1)} className="page-btn">
            playbackRate++
          </Button>
          <Button onClick={this.changePlaybackRateRate(-1)} className="page-btn">
            playbackRate--
          </Button>
          <Button onClick={this.changePlaybackRateRate(0.1)} className="page-btn">
            playbackRate+=0.1
          </Button>
          <Button onClick={this.changePlaybackRateRate(-0.1)} className="page-btn">
            playbackRate-=0.1
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.changeVolume(0.1)} className="page-btn">
            volume+=0.1
          </Button>
          <Button onClick={this.changeVolume(-0.1)} className="page-btn">
            volume-=0.1
          </Button>
          <Button onClick={this.setMuted(true)} className="page-btn">
            muted=true
          </Button>
          <Button onClick={this.setMuted(false)} className="page-btn">
            muted=false
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.changeSource('sintelTrailer')} className="page-btn">
            Sintel teaser
          </Button>
          <Button onClick={this.changeSource('bunnyTrailer')} className="page-btn">
            Bunny trailer
          </Button>
          <Button onClick={this.changeSource('bunnyMovie')} className="page-btn">
            Bunny movie
          </Button>
          <Button onClick={this.changeSource('test')} className="page-btn">
            Test movie
          </Button>
        </div>
        <div>State</div>
      </div>  
    );
  }
}