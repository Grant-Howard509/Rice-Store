import { useState, useEffect } from 'react'
import './index.css'

import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const publicKey = import.meta.env.VITE_SHOPIFY_PUBLIC_KEY;

const client = createStorefrontApiClient({
  storeDomain: 'https://ricebandmerch.myshopify.com/',
  apiVersion: '2024-04',
  publicAccessToken: `${publicKey}`,
});


function App() {

const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


const productQuery = `
  {
    product(id: "gid://shopify/Product/9563122499893") {
      title
      id
      handle
      description
      createdAt
      totalInventory
      images(first: 1) {
        nodes {
          src
        }
      }
    }
  }
  `;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.request(productQuery);
        setData(response.data.product);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if(error) {
    return <div>Error: {error.message}</div>;
  }

  let date = new Date(data.createdAt);
  
  return (
    <div className='flex justify-center items-center flex-col'>
     <h1 className='text-3xl font-bold underline text-red-400'>{data.title}</h1>
     <p>{data.description}</p>
     <p>{date.toDateString()}</p>
     <p>{data.totalInventory}</p>
     <img src={data.images.nodes[0].src} width={500}/>
    </div>
  )
}

export default App
