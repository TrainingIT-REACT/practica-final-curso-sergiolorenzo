import React from "react";
import { connect } from 'react-redux';

const Profile = ({username}) => {

  return <div className="profile">
      <h2>Perfil de Usuario</h2>
      <p>Nombre de usuario: {username} </p>
    </div>
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}
  
export default connect(
  mapStateToProps
)(Profile);