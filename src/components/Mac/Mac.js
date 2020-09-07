import React, { Component } from 'react';
import './Mac.css'
import ReactPlayer from 'react-player'
import Mike from './miked.mp4'

class Mac extends Component {
  render() {
    return (
      <div>
        
    <div class="macintosh" aria-label="1984 Macintosh illustration">
        <div class="monitor">
          <div class="monitor-inner">
            <div class="screen-cutout">
              <div class="screen">
                <div class="screen-video">    
              <ReactPlayer url={Mike}
              width='100%'
              height='100%'
              controls />
              </div>
              </div>
              </div>
              <div class="logo"> 
            </div>
            <div class="opening">
              <div class="opening-inner">
              <span class="text">Macintosh Plus</span>
              </div>
            </div>
          </div>
        </div>
        <div class="foot">
          <div class="inset"></div>
          <div class="cable-container">
            <div class="cable-hole"></div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Mac;
