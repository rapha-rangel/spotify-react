import React from 'react';
import './styles.css';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ArtistsCard = ({artist}) => {
  return (
    <div className="artist-card" id="">
      <div className="card-img">
        <img id="artist-img" className="artist-img" src={artist.picture} alt="Artista Foto"/>
        <div className="play">
          <a href={artist.link}>
            <span><FontAwesomeIcon  icon={faPlay} color='#fff'/></span>
          </a>
        </div>
      </div>
      <div className="card-text">
        <a className="vst" href="">
          <span className="artist-name" id="artist-name">{artist.name}</span>
        </a>
      </div>
    </div>
  )
}

export default ArtistsCard
