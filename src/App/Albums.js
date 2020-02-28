import React from 'react';
import { connect } from 'react-redux';
import { NavLink} from 'react-router-dom';

// Acciones
import { getAlbums } from './actions/albums';

class Albums extends React.Component {
  componentDidMount() {
    this.props.getAlbums();
  }

  renderAlbums() {
    const { isLoading, error, albums } = this.props.albums;
     if (isLoading) {
       return <p>Cargando...</p>
     } else if (error) {
       return <p>Hubo un error al obtener los datos :(</p>
     } else {
       return <ul>
         {albums.map(album => <li key={album.id}><NavLink activeClassName="active" to={"/album/"+album.id}>{album.name}</NavLink></li>)}
       </ul>
     }
  }

  render() {
    return <>
      <p>Estos son todos los albums:</p>
      { this.renderAlbums() }
    </>
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  getAlbums: () => dispatch(getAlbums()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
