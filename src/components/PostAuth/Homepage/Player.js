import React from "react";

const Player = (song = {
  "album_cover":"https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg",
}) => {
  return (
        <div id="player">
          <div id="player-track">
            <div id="album-name"/>
            <div id="track-name"/>
            <div id="track-time">
              <div id="current-time"/>
              <div id="track-length"/>
            </div>
            <div id="s-area">
              <div id="ins-time"/>
              <div id="s-hover"/>
              <div id="seek-bar"/>
            </div>
          </div>
          <div id="player-content">
            <div id="album-art">
              <img
                  src={song.album_cover}
                  className="active" id="_1"/>
              <div id="buffer-box">Buffering ...</div>
            </div>
            <div id="player-controls">
              <div className="control">
                <div className="button mix-pbutton" id="play-previous">
                  <i className="fas fa-backward"/>
                </div>
              </div>
              <div className="control">
                <div className="button mix-pbutton" id="play-pause-button">
                  <i className="fas fa-play"/>
                </div>
              </div>
              <div className="control">
                <div className="button mix-pbutton" id="play-next">
                  <i className="fas fa-forward"/>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Player;