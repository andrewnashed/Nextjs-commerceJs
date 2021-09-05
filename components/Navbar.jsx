import React,{useState} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import useWindowDimensions from '../hooks/useWindowsDimensions';
import {GiHamburgerMenu} from "react-icons/gi"
import {IoCloseSharp} from "react-icons/io5";
import { useRouter } from 'next/router';
import Cart from './Cart/Cart';



const Navbar = () => {
    const [navButton, setButton] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const { width } = useWindowDimensions();
    const {asPath} = useRouter();
    const [open, checkOpen] = useState(false)
   
    const navOpen = () => {
        if (navButton === false ) {
            setButton(true)
        }
        else { setButton(false)
        }
    }

    const checkBackground = () => {
        
        // if (asPath === '/') return {backgroundColor: 'transparent'}
        if (navbar || navButton || asPath !== '/') return {backgroundColor: 'white', border: 'none', borderBottom :'1px solid black'}
      
        else return {backgroundColor: 'transparent',}
    }

    const changeNavColor = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }
    if (typeof window !== "undefined") 
   { window.addEventListener('scroll', changeNavColor)}

    return ( 
        <nav style={checkBackground()} className={navButton? styles.navScroll: styles.nav}>

{!navButton?
<Link href="/">
<a style={{color: (navbar || asPath !== '/')?'black':'white'}}>Helwa</a>
</Link> : <Link href="/">
<a style={{color: 'black'}}>Helwa</a>
</Link> 
}
            {width < 800 ? <button className={styles.navButton} onClick={navOpen}>

            {!navButton ? <p style={{color: (navbar || asPath !== '/')?'black':'white'}}> Menu</p> : <IoCloseSharp style={{color: 'black', fontSize:50}}/>}
            </button> : 
            <ul className={navbar || asPath !== '/'?styles.navOrangList:styles.navList}>
            <li  className={styles.navItem} >
                <Link href="/shop">
                <a>
                   SHOP
                </a>
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link href="/blog">
                <a>
                    BLOG
                </a>
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link href="/blog">
                <a>
                    About
                </a>
                </Link>
            </li>
        </ul>
            }
            
     <Cart navButton={navButton} navbar={navbar}/>
      
        { navButton ? (<ul className={styles.navList}>
            <li className={styles.navItem}>
            <Link href="/shop">
                <a>
                   SHOP
                </a>
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link href="/blog">
                <a>
                    BLOG
                </a>
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link href="/blog">
                <a>
                    About
                </a>
                </Link>
            </li>
            </ul>) : null}
           
        </nav> 
     );
}
 
export default Navbar;