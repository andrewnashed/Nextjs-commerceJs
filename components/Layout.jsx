import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

const Layout = (props) => {
    return ( <div className={styles.container} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Navbar/>
        <main className={styles.main} style={{marginTop: '10rem'}}>
            {props.children}
        </main>
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
                <Link href="https://www.instagram.com/"><a>
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
        <p style={{textAlign: 'center'}}>Copyright © The 2 Train To Paris 2021 all rights reserved.</p>
    </footer> 
    </div> );
}
 
export default Layout;