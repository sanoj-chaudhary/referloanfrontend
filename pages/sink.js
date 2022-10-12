import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

function sink() {

  const [category, setcategory] = useState(true);
  const [product, setproduct] = useState(true);
  const [bank, setbank] = useState(true);

  function getCategory()
  {
      const res = axios.get('https://testapi.referloan.in/api/categories')
      const data = res.data;
      if(data)
      {
          // sink
          setcategory(data)
      }
  }

  function getProduct()
  {
      const res = axios.get('https://testapi.referloan.in/api/products')
      const data = res.data;
      if(data)
      {
          // sink
          setproduct(data)
      }
  }

  function getBank()
  {
      const res = axios.get('https://testapi.referloan.in/api/banks')
      const data = res.data;
      if(data)
      {
          // sink
          setbank(data)
      }
  }

  useEffect(
    getCategory(),
    getProduct(),
    getBank() 
  )


  return (
    <div></div>
    // https://testapi.referloan.in/api/categories
    // https://testapi.referloan.in/api/products
    // https://testapi.referloan.in/api/banks
  )
}

export default sink