import React from 'react';
import styles from './Avatar.module.css'

export function Avatar({hasBoder = true,  src}) {
  
  return(
    <>
       <img className={hasBoder ? styles.avatarWithBolder : styles.avatar} 
       src={src} 
       />
    </>
   
  )
}