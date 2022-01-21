import React, { Component } from "react";
import { SongListMap } from "./SongListMap"; 

let htmlElement = document.documentElement;

class Themechanger extends Component { 

  state = {

    play: false,
    menu: false, 
    musicmenu: false,
    thememenu: false, 
    videoMenu: false, 

  }

  handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });
  handleAudioToggle = () => this.setState({ play: !this.state.play });
  handleMainMenuToggle = () => this.setState({ menu: !this.state.menu });
  handleThemeMenuToggle = () => this.setState({ thememenu: !this.state.thememenu });
  

  Song = (event) => {
    
    let audio = document.getElementById(event.target.value);
    audio.classList.remove("CurrentSong"); 
    
    let sounds = document.getElementsByTagName('audio');
    for (let i = 0; i < sounds.length; i++) sounds[i].classList.remove("CurrentSong");
   
    if (this.state.play === false) {
      
      let audio = document.getElementById(event.target.value);
      document.getElementById(event.target.value).classList.add("CurrentSong"); 
      audio.play();
      
      this.setState({ play: !this.state.play })

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

  rickMe = () =>{
 
    let video = document.getElementById('RickMe');
    
    if (this.state.videoMenu === true) { 
      video.volume = 1; 
      video.pause(); 
   
    }

    else {
      video.volume = 1; 
      video.play();
    }

    this.setState({ videoMenu: !this.state.videoMenu })
  
  }


  render() {
    return (
      <div>
        <div className={`VideoToggle${
            this.state.videoMenu ? " Showing" : " NotShown"
          }`}>
        <video id="RickMe" src="./SongsList/RickMe.mp4"></video>

        </div>
        <div
          className={`MusicMenuToggle${
            this.props.showbox ? " open" : " closed"
          }`}
        >
          <div
            className={`MainMenuToggle${
              this.state.menu ? " Mainclosed" : " Mainopen"
            }`}
          >
            <button
              className="MusicMenuButton"
              onClick={this.handleMainMenuToggle}
            >
              Song List
            </button>
            <button onMouseEnter={this.clickSoundPlay}
            onMouseOut={this.clickSoundPause} className="MusicMenuButton" onClick={this.handleThemeMenuToggle}>Theme List</button>
          </div>
          <button
              className="MusicMenuButton"
              onClick={this.rickMe}
            >
              Click to Find Out the Meaning of Life
            </button>

          <div
            className={`MusicMenu${
              this.state.menu ? " Mainopen" : " Mainclosed"
            }`}
          >
            {SongListMap.map((item, index) => {
              return (
                <button
                  key={index}
                  className={item.MusicMenuButton}
                  value={item.music}
                  onClick={this.Song}
                  onMouseEnter={this.clickSoundPlay}
                  onMouseOut={this.clickSoundPause}
                  style={{ backgroundColor: `${item.hex_value}` }}
                >
                  Song: {item.songName}
                </button>
              );
            })}
             <button   onMouseEnter={this.clickSoundPlay}
                  onMouseOut={this.clickSoundPause} className="MusicMenuButton" onClick={this.handleMainMenuToggle}>Main Menu</button>
          </div>
          <div
            className={`MusicMenu${
              this.state.thememenu ? " Mainopen" : " Mainclosed"
            }`}
          >
          <button
            className="MusicMenuButton"
            onMouseEnter={this.clickSoundPlay}
            onMouseOut={this.clickSoundPause}
            onClick={this.Snow}
          >
            Christmas
          </button>
          <button
            className="MusicMenuButton"
            onMouseEnter={this.clickSoundPlay}
            onMouseOut={this.clickSoundPause}
            onClick={this.Default}
          >
            Default
          </button>
          <button
            className="MusicMenuButton"
            onMouseEnter={this.clickSoundPlay}
            onMouseOut={this.clickSoundPause}
            onClick={this.DarkMode}
          >
            Darkmode
            </button>
            </div>
        </div>
        <audio id="SB1" src="./SongsList/medieval.mp3"/>
        <audio id="SB2" src="./SongsList/thisKiss.mp3"/>
        <audio id="SB3" src="./SongsList/song3.mp3"/>
        <audio id="SB4" src="./SongsList/song4.mp3"/>
        <audio id="SB5" src="./SongsList/song5.mp3"/>
        <audio id="SB6" src="./SongsList/song6.mp3"/>
        <audio id="beep" src="./SongsList/beep.mp3"/>
        <audio id="SB7" src="https://www.partyvibe.com:8060/;listen.pls?sid=1" />
        

      </div>
    );
  }
}

export default Themechanger;
