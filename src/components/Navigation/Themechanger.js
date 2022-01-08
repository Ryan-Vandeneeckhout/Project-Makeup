import React, { Component } from "react";
import { SongListMap } from "./SongListMap"; 

class Themechanger extends Component { 
  state = {
    showBox: false,
    play: false, 
  };

  handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });
  handleAudioToggle = () => this.setState({ play: !this.state.play })
  
  Song = (event) => {

    this.handleAudioToggle();
    
    if (this.state.play === false) {
      
      let audio = document.getElementById(event.target.value);
      audio.play();

    }

    else {

      let sounds = document.getElementsByTagName('audio');
      for (let i = 0; i < sounds.length; i++) sounds[i].pause();
      this.setState.play = false; 

    }
  

  }


  render() {
    return (

      <div>
        <button className={`themeClick${this.state.showBox ? " rotating" : " not"}`} onClick={this.handleBoxToggle}>
          <i className={`${this.state.showBox ? "fas fa-bahai" : "fas fa-times"}`}></i>
        </button>
        <div className={`MusicMenuToggle${this.state.showBox ? " open" : " closed"}`}>

        {SongListMap.map((item, index) => {
              return (
                <button key={index}className={item.MusicMenuButton} value={item.music} onClick={this.Song} style={{ backgroundColor: `${item.hex_value}` }}>Song: {item.songName}</button>
              );
            })}
         
        </div>
        <audio id="SB1" src="./SongsList/medieval.mp3" ></audio>
        <audio id="SB2" src="./SongsList/thisKiss.mp3" ></audio>
      </div>

    );
  }
}

export default Themechanger;
