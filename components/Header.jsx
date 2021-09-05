import React from 'react';
import styles from '../styles/Home.module.css'
import Navbar from './Navbar';
import Router  from 'next/router';

const Header = () => {
    return ( 
        <header className={styles.header}>
            <Navbar/>
            <div className={styles.hero}>
                <section >
                <h1>Helwa Care</h1>
                <p>ALL NATURAL SKIN CARE PRODUCTS</p>
                <button onClick={()=> Router.push('/shop')}>SHOP NOW</button>
                </section>    
            </div>
        </header>
     );
}
 
export default Header;