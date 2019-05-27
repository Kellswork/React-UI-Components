import React from 'react';
import './Header.css';

function HeaderContent(props) {
  return(
    <p className='textContent'>{props.text}</p>
  )
}

export default HeaderContent;
