import React from 'react';

import Link from 'next/link'
import styles from '../styles/Layout.module.css'


const Footer = () => {
    return ( 
        <footer className={styles.footer}>
        <span>
      <ul>
          <li><strong>Support</strong></li>
          <li>Returns</li>
          <li>Shipping</li>
      </ul>
        </span>
      <span>
      <ul>
      <li><strong>Connect</strong></li>
          <li>
              <Link href="https://www.instagram.com/the2traintoparis/"><a>
                  Instagram
              </a></Link>
          </li>
      </ul>
      </span>
      <form className={styles.form}>
            <label htmlFor=""><strong>Sign Up For The Latest News</strong> </label><br/>
            <input type="text" /><br/>
            <button type="submit">Submit</button>
        </form>
      <p style={{textAlign: 'center'}}>Copyright © Helwa 2021 all rights reserved.</p>
  </footer> 
     );
}
 
export default Footer;