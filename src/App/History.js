import React from 'react';
import { connect } from 'react-redux';

class History extends React.Component {

  renderAlbums() {
    const { isLoading, error, alb } = this.props.albumHistory;
     if (isLoading) {
       return <p>Cargando...</p>
     } else if (error) {
       return <p>Hubo un error al obtener los datos :(</p>
     } else {
      if (alb.length > 0) {
        return <>
          <p>Estas son todas los albums que se han visitado</p>
          {alb.map(album => <li key={album.id}>{album.name}</li>)}
        </>
       } else {
        return <p>Todavía no se ha visitado ningún álbum</p>
       }
     }
  }

  renderSongs() {
    const { isLoading, error, songs } = this.props.songHistory;
     if (isLoading) {
       return <p>Cargando...</p>
     } else if (error) {
       return <p>Hubo un error al obtener los datos :(</p>
     } else {
       if (songs.length > 0) {
        return <>
          <p>Estas son todas las canciones que has reproducido:</p>
          <ul>{songs.map(song => <li key={song.id}>{song.name}</li>)}</ul>
        </>
       } else {
        return <p>Todavía no se ha reproducido ninguna canción</p>
       }

     }
  }

  render() {
    return <>
      { this.renderAlbums() }      
      { this.renderSongs() }
    </>
  }
}

const mapStateToProps = (state) => ({
  ...state
});

export default connect(
  mapStateToProps
)(History);