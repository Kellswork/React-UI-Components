import React from 'react';
import './Header.css';

function HeaderTitle(props) {

    return(
       <div className='header-title'>
           <h3>{props.heading}</h3>
           <p>{props.text}</p>
           <p>26 Jan</p>
       </div> 
    )
}

export default HeaderTitle;