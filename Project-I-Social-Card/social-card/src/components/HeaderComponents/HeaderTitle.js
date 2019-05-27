import React from 'react';
import './Header.css';

function HeaderTitle(props) {

    return(
       <div className='header-title'>
           <h3>{props.heading}</h3>
           <p class='text-color'>{props.text}</p>
           <p class='text-color'> &#8226; {props.date}</p>
       </div> 
    )
}

export default HeaderTitle;