import React, { useState } from 'react'
import Tracks from './Tracks';
function NavBar() {
  const [track,setTrack]=useState([]);
  const [song,setSong]=useState('');
  const handleChange=(e)=>{
   setSong(e.target.value);
  }

  const  getTracks=async()=>{
      try {
          let data = await fetch(`https://v1.nocodeapi.com/snehh/spotify/eSSMBvuXUbMBULyq/search?q=${song}&type=track`);
          let jsonRes = await data.json();
          console.log(jsonRes);
          console.log(jsonRes.tracks.items);
          setTrack(jsonRes.tracks.items); 
        } catch (error) {
          console.error('Error fetching tracks:', error);
        }

  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
       My-Music
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={song}
          onChange={handleChange}
        />
        <button className="btn btn-outline-success" onClick={getTracks}>
          Search
        </button>   
    </div>
  </div>
</nav>
<Tracks tracks={track}/>
    </div>
  )
}

export default NavBar
