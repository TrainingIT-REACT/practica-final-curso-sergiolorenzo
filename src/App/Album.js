import React, { createRef }  from 'react';
import { connect } from 'react-redux';

// Acciones
import { getSongs } from './actions/songs';
import { getAlbum } from './actions/albums';

import { FaPlayCircle } from 'react-icons/fa';
import { NavLink} from 'react-router-dom';

const title = createRef();
var totalSeconds = 0;

class Album extends React.Component {
  

  componentDidMount() {
    this.props.getAlbum(this.props.match.params.id);
    this.props.getSongs(this.props.match.params.id);
  }

  renderAlbum() {
    const { isLoadingAlbum, errorAlbum, album } = this.props.albums;
    
     if (isLoadingAlbum) {
       return <p>Cargando...</p>
     } else if (errorAlbum) {
       return <p>Hubo un error al obtener los datos :(</p>
     } else {
        if(album.length > 0) {
        return <>
          <h1 ref={title}>{album[0].name}</h1><p>Artista: {album[0].artist}</p>
          <img className="cover" src={album[0].cover} alt={"Carátula del album"+ album[0].name}></img>
          </>
        }
      }
  }
  
  renderSongs() {
    const { isLoading, error, songs } = this.props.songs;
    if (isLoading) {
      return <p>Cargando...</p>
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>
    } else {

       songs.map(song => totalSeconds += song.seconds);
       if(title !== null && title.current !== null)  {
        console.log(title.current.innerHTML += " (" + new Date(null, null, null, null, null, totalSeconds).toTimeString().replace(/.*(\d{2}:)(\d{2}:\d{2}).*/, "$2") + ")");
       }
      return <ul>
        {songs.map(song => <li key={song.id}>{song.name}&nbsp;
          {new Date(null, null, null, null, null, song.seconds).toTimeString().replace(/.*(\d{2}:)(\d{2}:\d{2}).*/, "$2") } &nbsp;
          <NavLink to={"/player/" + song.id} aria-label={"click to play " + song.name}><FaPlayCircle /></NavLink></li>)}
          
       </ul>
     }
  }

  render() {
    return <>
      { this.renderAlbum() }
      <p>Estas son todas las canciones:</p>
      { this.renderSongs() }
    </>
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  getAlbum: (id) => dispatch(getAlbum(id)),
  getSongs: (id) => dispatch(getSongs(id)),  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
