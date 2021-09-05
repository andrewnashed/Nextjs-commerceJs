import React from 'react';
import styles from './Shop.module.css'
import Product from '../Product';


const Shop = ({categories, products}) => {

    return ( 
    <div className={styles.container}>
        <h1>Shop</h1>
        
        <div className={styles.shopsecWithSidebar} >
            
            <div className={styles.sidebar} >
             {categories.map(category => {return(<div key={category.id}>
                <h2 >{category.name}</h2>
                <p>{category.products}</p>
                </div>)}
             )}
             </div>
                <div className={styles.content}>
                <div style={{width: '100%'}}>
             {categories.map(category => 
                    <div key={category.id} className={styles.category}>
                     <h2>{category.name}</h2>
                                <div className={styles.products}>
                    {products.filter(product => product.categories[0].name === category.name).map(product => {
                       return( <Product key={product.id} product={product}/>)
                    })}
                </div>
              </div>
             )}
               </div>
                 </div>
                 </div>
      <div>
          {products.filter}
      </div>
         
      
    </div> );
}
 
export default Shop;