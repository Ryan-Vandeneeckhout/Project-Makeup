import React, { Component } from "react";
import { SongListMap } from "./SongListMap"; 

let htmlElement = document.documentElement;

class Themechanger extends Component { 

  state = {

    play: false,
    menu: false, 
    musicmenu: false,
    thememenu: false, 

  }

  handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });
  handleAudioToggle = () => this.setState({ play: !this.state.play })

  Song = (event) => {
    
    let audio = document.getElementById(event.target.value);
    audio.classList.remove("CurrentSong"); 
    let sounds = document.getElementsByTagName('audio');
    for (let i = 0; i < sounds.length; i++) sounds[i].classList.remove("CurrentSong");
   
    if (this.state.play === false) {
      
      let audio = document.getElementById(event.target.value);
      document.getElementById(event.target.value).classList.add("CurrentSong"); 
      audio.play();
      
      this.handleAudioToggle();

    }

    else {

      let sounds = document.getElementsByTagName('audio');
      document.getElementById(event.target.value).classList.remove("CurrentSong"); 
      for (let i = 0; i < sounds.length; i++) sounds[i].pause();
      this.handleAudioToggle();

    }

    audio.onended = () => {
      document.getElementById(event.target.value).classList.remove("CurrentSong"); 
      this.setState({ play: !this.state.play })
    
    }

  }

  clickSoundPlay = () => {
    
    let audio = document.getElementById('beep');
    audio.volume = 0.5; 
    audio.play();
    audio.currentTime=0;

  }

  clickSoundPause = () => {
    let audio = document.getElementById('beep');
    audio.pause();

  }
  DarkMode() {
    htmlElement.setAttribute("data-theme", "dark");
    }

Default() {
    htmlElement.setAttribute("data-theme", "light");
    }
  
  Snow() {
    htmlElement.setAttribute("data-theme", "snowy");
    
  }
  render() {
    return (

      <div>
         <div className={`MusicMenuToggle${this.props.showbox ? " open" : " closed"}`}>
          {SongListMap.map((item, index) => {
          return (
          <button key={index} className={item.MusicMenuButton} value={item.music} onClick={this.Song} onMouseEnter={this.clickSoundPlay} onMouseOut={this.clickSoundPause} style={{ backgroundColor: `${item.hex_value}` }}>Song: {item.songName}</button>
        );
          })}
          <button className="MusicMenuButton" onMouseEnter={this.clickSoundPlay} onMouseOut={this.clickSoundPause} onClick={this.Snow}>Snow</button>
          <button className="MusicMenuButton" onMouseEnter={this.clickSoundPlay} onMouseOut={this.clickSoundPause} onClick={this.Default}>Default</button>
          <button className="MusicMenuButton"onMouseEnter={this.clickSoundPlay} onMouseOut={this.clickSoundPause} onClick={this.DarkMode}>Darkmode</button>
          </div>
        <audio id="SB1" src="./SongsList/medieval.mp3" ></audio>
        <audio id="SB2" src="./SongsList/thisKiss.mp3" ></audio>
        <audio id="SB3" src="./SongsList/song3.mp3" ></audio>
        <audio id="SB4" src="./SongsList/song4.mp3" ></audio>
        <audio id="SB5" src="./SongsList/song5.mp3" ></audio>
        <audio id="SB6" src="./SongsList/song6.mp3" ></audio>
        <audio id="beep" src="./SongsList/beep.mp3" ></audio>
      </div>

    );
  }
}

export default Themechanger;
