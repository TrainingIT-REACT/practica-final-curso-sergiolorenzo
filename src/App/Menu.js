import React from "react";
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

const Menu = ({username}) => {

  return (
    <nav>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/albums">Albums</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/history">Historial de Reproducción</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" hidden={!username} to="/profile">Perfil</NavLink>
        </li>
      </ul>
    </nav>
);}
  
  const mapStateToProps = (state) => {
    return {
      username: state.user.username
    }
  }
  
  export default connect(
    mapStateToProps
  )(Menu);