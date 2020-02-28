import React from 'react';
import { connect } from 'react-redux';

// Acciones
import { getRandomSongs } from './actions/songs';

import { FaPlayCircle } from 'react-icons/fa';
import { NavLink} from 'react-router-dom';

class Home extends React.Component {


  componentDidMount() {
    this.props.getRandomSongs();
  }
  
  renderSongs() {
    console.log(this.props);
    const { isLoading, error, randomSongs } = this.props.songs;
    if (isLoading) {
      return <p>Cargando...</p>
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>
    } else {

      return <ul>
        {randomSongs.filter(song => song.name.toUpperCase().includes(this.random())).map(song => <li key={song.id}>{song.name} 
          {new Date(null, null, null, null, null, song.seconds).toTimeString().replace(/.*(\d{2}:)(\d{2}:\d{2}).*/, "$2") } 
          <NavLink to={"/player/" + song.id}><FaPlayCircle /></NavLink></li>)}
       </ul>
     }
  }

  random() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < 1; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  renderBuscador() {
    return <>
      <form onSubmit={(e) => {alert("No implementado");; e.preventDefault();}}>
        <label for="searchSong">Si lo prefieres puedes buscar tu canción preferida</label>
        <input id="searchSong" type="text" placeholder="Título de la canción..." />
        <button>Buscar</button>
      </form>
    </>
  }

  render() {
    return <>
      <p>Esta es una selección de canciones sugeridas:</p>
      { this.renderSongs() }
      { this.renderBuscador()}
    </>
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  getRandomSongs: () => dispatch(getRandomSongs()),  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
