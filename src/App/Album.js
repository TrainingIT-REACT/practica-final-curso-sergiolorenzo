import React from 'react';
import { connect } from 'react-redux';

// Acciones
import { getSongs } from './actions/songs';
import { getAlbum } from './actions/albums';

import { FaPlayCircle } from 'react-icons/fa';
import { NavLink} from 'react-router-dom';

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
          <h1>{album[0].name}</h1><p>Artista: {album[0].artist}</p>
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
      return <ul>
        {songs.map(song => <li key={song.id}>{song.name} 
          {new Date(null, null, null, null, null, song.seconds).toTimeString().replace(/.*(\d{2}:)(\d{2}:\d{2}).*/, "$2") } 
          <NavLink to={"/player/" + song.id}><FaPlayCircle /></NavLink></li>)}
          
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
