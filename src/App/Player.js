import React from 'react';
import { connect } from 'react-redux';

// Acciones
import { getSong } from './actions/songs';
import ReactAudioPlayer from 'react-audio-player';

class Player extends React.Component {

  componentDidMount() {
    this.props.getSong(this.props.match.params.id);
  }

  // renderAlbum() {
  //   const { isLoadingAlbum, errorAlbum, album } = this.props.albums;

  //    if (isLoadingAlbum) {
  //      return <p>Cargando...</p>
  //    } else if (errorAlbum) {
  //      return <p>Hubo un error al obtener los datos :(</p>
  //    } else {
  //       if(album.length > 0) {

  //         return <>           
  //           <h3>{album[0].name}</h3>
  //         </>         
  //       }
  //     }
  // }
  
  renderSong() {
    const { isLoadingSong, errorSong, song } = this.props.songs;
    if (isLoadingSong) {
      return <p>Cargando...</p>
    } else if (errorSong) {
      return <p>Hubo un error al obtener los datos :(</p>
    } else {
      if(song.length > 0) {
        return <>
          {/* <audio controls src={song[0].audio} autoPlay={true}> Your browser does not support the <code>audio</code> element. </audio>  */}
          <h1>{song[0].name}</h1>
          <div className="audio-center"><ReactAudioPlayer src={song[0].audio} autoPlay controls /></div>
        </>
        }

     }
  }

  render() {
    return <>
      {this.renderSong() }
    </>
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  getSong: (id) => dispatch(getSong(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
