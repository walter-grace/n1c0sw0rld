import React, { Component } from 'react';
import Xtsy from './xtsy.mp4';
import VideoPop from 'react-video-pop';


class Encryption extends Component {
    render() {
        return (
                <VideoPop Src={Xtsy} 
                mute={true} autoplay={true}   
                root="video-root" 
                ratio={{w:10,h:9}} />
        );
    }
}

export default Encryption;