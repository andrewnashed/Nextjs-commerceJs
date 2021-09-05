import React,{useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import {UseCartState, UseCartDispatch} from '../../context/cart';
import styles from './Cart.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Router  from 'next/router';
import commerce from '../../lip/commerce'
import {AiOutlineShopping} from 'react-icons/ai'

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
   <div className={styles.cartItem}>
     
      <Image src={media.source} alt={name} width={110}  height={110}  />
  
     <div className={styles.CartItemDetails}>
       <div className={styles.price}>
       <p>{name}</p>
        <p>{line_total.formatted_with_symbol}</p>
       </div>
        
      <div className={styles.cartButtons}>
      {quantity < inventory && ( 
         <span className={styles.quantity}>
                 <button  onClick={decrementQuantity}>-</button>
                 <p>{quantity}</p>
                 <button onClick={incrementQuantity}>+</button>
                 </span>
          )}
          
          <button onClick={removeItem}>Remove</button>
       </div>
    </div>
   </div>
  )
}

const Cart = ({navButton, navbar}) => {
  const {line_items, subtotal,total_items} = UseCartState()
  const isEmpty = line_items.length === 0
    const {asPath} = useRouter();
    const [open, setOpen] = useState(false);
    if (!open) return (     <button style={{border:'none', fontSize: '4rem', backgroundColor: 'transparent'}} onClick={()=>setOpen(true)}>
    {!navButton?<AiOutlineShopping style={{color:  (navbar || asPath !== '/')?'black':'white'}}/>:<AiOutlineShopping style={{color: 'black'}}/>}  
    {total_items > 0 ? <sup style={{fontSize: '2.5rem',color:  (navbar || asPath !== '/')?'black':'white', borderRadius: '50%'}}>{total_items}</sup> : null} 
</button>)

    return ( 
      <div className={styles.container}>
   <div className={styles.cart}>

     <div className={styles.title}>
     <p>Cart</p>
       <button onClick={()=>setOpen(false)}>X</button>
     </div>
       <div className={styles.cartItems}>
       {isEmpty?<h3>Your Cart Is Empty Continue <Link style={{color: 'blue'}} href="/shop">Shopping</Link> </h3>:<ul>
           {line_items.map(item => <CartItem key={item.id} {...item} />)}
           
       </ul>}
       <div className={styles.footer}>
         <span>
         <p>Subtotal: {subtotal.formatted_with_symbol}</p>
         </span>
         <div className={styles.footButtons}>
         <button  onClick={()=> {
           setOpen(false)
           Router.push('/shop')}} 
         
         className={styles.buttonOutline}>
           Continue Shopping
         </button>
         <button className={styles.buttonFill}>
           Checkout
         </button>
         </div>
        
       </div>
       </div>
       
   </div>
   </div>
    );
}
 
export default Cart;
