import React, {useState} from 'react';
import styles from '../styles/Home.module.css'
import {UseCartDispatch, UseCartState} from '../context/cart';
import commerce from '../lip/commerce'
import {IoHeartOutline, IoHeart} from 'react-icons/io5'
import {BiPlusMedical} from 'react-icons/bi'
const Product = ({product}) => {
    const [liked, setLiked] = useState(false)
    const {setCart} = UseCartDispatch();
    const handleLikes = () => {
      if (liked) {setLiked(false)}
      else{setLiked(true)}
    }
   const addToCart = () =>  commerce.cart.add(product.id, 1).then(({cart}) => setCart(cart))
    return(
        <div className={styles.product} key={product.id}>
            <div className={styles.productImg}>
            <img src={product.media.source}/>
            <span className={styles.productButtons}>
                <ul>
                    <li>
                    <button onClick={addToCart} style={{backgroundColor:'transparent', border: 'none',}}>
                    <BiPlusMedical style={{color: liked?'DA0037':'white'}} />
                </button>
                    </li>
                <li >
                <button onClick={handleLikes} style={{backgroundColor:'transparent', border: 'none'}}>
                <IoHeart style={{color: liked?'DA0037':'white'}} />
                </button>
                </li>
                </ul>
            </span>
            </div>
            <div className={styles.productDetails}>
            <p><strong>{product.name}</strong></p>
            <p>{product.price.formatted_with_symbol}</p>
            </div>
            
        </div>
        );
    }
 
export default Product;