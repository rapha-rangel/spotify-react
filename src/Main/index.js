import './styles.css';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Playlist1 from '../assets/playlist/1.jpeg';
import Playlist2 from '../assets/playlist/2.png';
import Playlist3 from '../assets/playlist/3.jpeg';
import Playlist4 from '../assets/playlist/4.jpeg';
import Playlist5 from '../assets/playlist/5.jpeg';
import Playlist6 from '../assets/playlist/6.jpeg';
import Playlist7 from '../assets/playlist/7.jpeg';
import Playlist8 from '../assets/playlist/8.jpeg';
import Playlist9 from '../assets/playlist/9.jpeg';
import Playlist10 from '../assets/playlist/10.jpeg';
import Playlist11 from '../assets/playlist/11.jpeg';
import Playlist12 from '../assets/playlist/12.jpeg';
import Playlist13 from '../assets/playlist/13.jpeg';
import Playlist14 from '../assets/playlist/14.jpeg';
import Playlist15 from '../assets/playlist/15.jpeg';
import Card from '../Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ArtistsCard from '../ArtistsCard';

const Main = ({showTitle, inputValue, showFooter}) => {
	const [resArtists, setResArtists] = useState("");
	const [resPlaylist, setResPlaylist] = useState("");

	useEffect(()=>{
		const getPlaylist =async ()=>{
			const {data} = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/editorial`);
				console.log(data);
				setResPlaylist(data.data)
		}
		const getArtists = async ()=>{
			if(inputValue.length> 0){
				const {data} = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${inputValue}`);
				console.log(data);
				setResArtists(data.data)
			}
		}
		getArtists();
		getPlaylist()
	},[inputValue]);

	const folders = [
		{ name:"Boas festas",image:Playlist1, cardStyle:"cards card1" }, 
		{ name:"Feitos para você",image:Playlist2, cardStyle:"cards card2" },
		{ name:"Lançamentos",image:Playlist3, cardStyle:"cards card3" },
		{ name:"Creators",image:Playlist4, cardStyle:"cards card4" },
		{ name:"Para treinar",image:Playlist5, cardStyle:"cards card5" },
		{ name:"Podcasts",image:Playlist6, cardStyle:"cards card6" },
		{ name:"Sertanejo",image:Playlist7, cardStyle:"cards card7" },
		{ name:"Samba e pagode",image:Playlist8, cardStyle:"cards card8" },
		{ name:"Funk",image:Playlist9, cardStyle:"cards card9" },
		{ name:"MPB",image:Playlist10, cardStyle:"cards card10" },
		{ name:"Rock",image:Playlist11, cardStyle:"cards card11" },
		{ name:"Hip Hop",image:Playlist12, cardStyle:"cards card12" },
		{ name:"Indie",image:Playlist13, cardStyle:"cards card13" },
		{ name:"Relax",image:Playlist14, cardStyle:"cards card14" },
		{ name:"Música Latina",image:Playlist15, cardStyle:"cards card15" }
		];
	return (
		<div className="playlist-container">
			<div id="result-playlists">
				<div className="playlist">
					<h1 id="greeting">Boas vindas</h1>
					<h2 className="session">Navegar por todas as seções</h2>
				</div>
				<div className={showFooter.main}>
					<div className="offer__list">
						{showTitle?
							<section className="offer__list-item">
								{resPlaylist && resPlaylist.map((folder, key)=> 
									<Card folder={folder}
												index={key}/>)}
							</section>
						:
							<div id="result-artist" >
      					<div className="grid-container">
									{resArtists && resArtists.map((artist, index)=>
										<ArtistsCard artist={artist}
															key={index}/>
									)}
								</div>
							</div>
						}
					</div>
				</div>
			</div>
		</div>
	)
};

export default Main;