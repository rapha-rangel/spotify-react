import React from 'react';
import './styles.css';
import axios from 'axios';

const Card = ({folder, index}) => {

  const getPlaylist = async (name)=>{
    const {data} = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/playlist?q=${name}`)
    console.log(data)
    window.location.href = data.data[0].link ;
  }

  return (
    <a  className="cards"  onClick={()=>getPlaylist(folder.name)}>
      <div className={`cards card${index+1}`}>
        <img src={folder.picture} alt="" />
        <span>{folder.name}</span>
      </div>
    </a>
  )
}

export default Card;
