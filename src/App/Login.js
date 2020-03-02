import React, { createRef } from 'react';
import { connect } from 'react-redux';

// Acciones
import { updateUsername } from './actions/user';
// Contexto de usuario
import UserContext from './contexts/user';

const Login = ({username, updateUsername, location}) => {
  const input = createRef();

  const onSubmit = updateUser => e => {
    e.preventDefault();
    updateUsername(input.current.value);
    updateUser(true)
    input.current.value = '';
  }
  
  return <UserContext.Consumer>
  {({ signedIn, updateUser }) => {
    return <form onSubmit={onSubmit(updateUser)}>
      <label htmlFor="username">¿Cuál es tu usuario?</label>&nbsp;
      <input id="username" type="text" ref={input} placeholder="Usuario..." />&nbsp;
      <button>Login</button>
    </form>
  }}
  </UserContext.Consumer>;
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}

 const mapDispatchToProps = (dispatch) => {
   return { 
     updateUsername: (username) => dispatch(updateUsername(username))
    }
 };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
