import React, { useState } from 'react'

function Tracks({tracks}) {
    
  return (
    <div className='container'>
       <div className='row'>
            {
              tracks.map((e)=>{
                return(
                  <div key={e.id} className='col-lg-3 col-md-6 py-2'>
                <div  className="card">
                <img src={e.album.images[0].url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className='card-title'>{e.name}</h5>
                  <p className="card-text">
                   Artists : {e.album.artists[0].name}
                   Release Date : {e.album.release_date }
                  </p>
                  <audio src={e.preview_url} controls className='w-100'></audio>
                </div>
              </div>
              </div>
                );               
              })
            }
          </div>     
    </div>
  )
}

export default Tracks;




// import React, { useState } from 'react';

// export default function Tracks() {
//   const [tracks, setTracks] = useState([]);
//   const [error, setError] = useState(null);

//   const getTracks = async () => {
//     try {
//       const response = await fetch("https://v1.nocodeapi.com/snehh/spotify/eSSMBvuX");
//       const data = await response.json();
//       console.log(data);
//       setTracks(data);
//     } catch (error) {
//       console.error('Error fetching tracks:', error);
//       setError(error.message);
//     }
//   };
  
//   return (
//     <div className='container'>
//       <div className='row'>
//         <div className='col'>
//           <button onClick={getTracks} className="btn btn-primary">Click Me!!</button>
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           {tracks.length > 0 && (
//             <ul>
//               {tracks.map((track, index) => (
//                 <li key={index}>{track.name}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

