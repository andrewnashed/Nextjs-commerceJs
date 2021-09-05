import commerce from '../lip/commerce'
import React, { useEffect,useState } from 'react';
import {UseCartState, UseCartDispatch} from '../context/cart';
import styles from './Cart.module.scss'
import Link from 'next/link'
import Image from 'next/image';
import Router from 'next/router';



function CartItem({id, name, quantity, line_total, media, permalink,product_id}) {
    const [inventory, setInventory] = useState(0);
    const {setCart} = UseCartDispatch();
    const handleUpdateCart =({cart}) => setCart(cart)
    const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart);
    const decrementQuantity = () => {
        quantity > 1 ? commerce.cart.update(id, {quantity: quantity -1}).then(handleUpdateCart) : removeItem();
        
    }
    const incrementQuantity = () => commerce.cart.update(id, {quantity: quantity + 1}).then(handleUpdateCart)
  
    useEffect(()=> {
        getProduct();
        
    },[])
   
    const getProduct= async () => {
        try {
            const product = await commerce.products.retrieve(product_id)
            setInventory(product.inventory['available'])
        } catch (error) {
            console.log(error);
        }
    }
   
   return (
        <ul className={styles.cart}>
            <li><Image src={media.source} alt={name} width={70}  height={80}  /></li>
            <li>{name}</li>
            
            {quantity < inventory && (  <li>
            <span className={styles.quantity}>
                    <button onClick={decrementQuantity}>-</button>
                    <p>{quantity}</p>
                    <button onClick={incrementQuantity}>+</button>
                    </span>
            </li>)}
            <li>{line_total.formatted_with_symbol}</li>
            <li><button onClick={removeItem}>𝙭</button></li>
        </ul>
    )
}