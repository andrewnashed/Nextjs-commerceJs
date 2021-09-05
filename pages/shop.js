import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import commerce from '../lip/commerce'
import Shop from '../components/ShopPage/Shop';

export default function Category({products, categories}) {
    return (
      <div >
        <Head>
          <title>Helwa | Shop</title>

        </Head>
        <Layout>
         <Shop  categories={categories} products={products}/>
        </Layout>
       
      </div>
    )
  }


  export async function getStaticProps() {
   
    const {data: categories} = await commerce.categories.list()
    const {data: products} = await commerce.products.list()

    return {
        props: {
            categories,
            products
        }
    }
}