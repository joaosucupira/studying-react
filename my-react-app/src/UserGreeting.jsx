import PropTypes from 'prop-types';

function UserGreeting(props){
    // if(props.isLogged){
    //     return <h2>Wecolme {props.username}</h2>
    // }
    
    // return <h2>Please log in</h2>
    const welcomeM = <h2 className="welcome">Welcome {props.username}. </h2>;
    const loginM = <h2 className="login">Please log in.</h2>;
    return(props.isLogged ? welcomeM :
                            loginM)
    
}
UserGreeting.proptypes = {
    isLogged: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLogged: false,
    username: "Guest",
}

export default UserGreeting