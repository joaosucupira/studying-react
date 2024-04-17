// import profilePic from './assets/react.svg'

import profilePic from './assets/joao.png'

function Card(){
    return(
        <div className="card">
            <img className='card-img' src={profilePic} alt="Profile pic"/>
            <h2 className='card-title'>João Sucupira</h2>
            <p className='card-text'>Web Developer</p>
            <p className='card-text'>Student at UTFPR</p>
        </div>
    );
}

export default Card