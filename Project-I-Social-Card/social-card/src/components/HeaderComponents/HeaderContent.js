import React from 'react';
import './Header.css';

function HeaderContent(props) {
  return(
    <p className='text-content'>{props.text}</p>
  )
}

export default HeaderContent;
