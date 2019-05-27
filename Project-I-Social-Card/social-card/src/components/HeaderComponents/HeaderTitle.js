import React from 'react';
import './Header.css';

function HeaderTitle({heading, text, date}) {

    return(
       <div className='header-title'>
           <h3>{heading}</h3>
           <p class='text-color'>{text}</p>
           <p class='text-color'> &#8226; {date}</p>
       </div> 
    )
}

export default HeaderTitle;