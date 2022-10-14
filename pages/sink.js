import { useRouter } from 'next/router'
import axios from 'axios';
import { db } from './../config/db'

function sink({}) {
//console.log(data4);
  return (
    <div></div>
  )
}


export async function getServerSideProps(context) {
  
  db.query(" TRUNCATE `categories` ");
  db.query(" TRUNCATE `products` ");
  db.query(" TRUNCATE `banks` ");
  db.query(" TRUNCATE `bank_products` ");
  db.query(" TRUNCATE `company_types` ");
  
  
  const res1  = await axios("https://testapi.referloan.in/api/categories");
  const data1 = await res1.data;
  
  if(data1)
  {
    data1.forEach(function (value,key) {
      db.query(" INSERT INTO `categories` (`id`, `name`, `status`) VALUES ('" + value.id + "', '" + value.name + "', '" + value.status + "') ");
    });
  }
  

  const res2 = await axios("https://testapi.referloan.in/api/products");
  const data2 = await res2.data;

  if(data2)
  {
    data2.forEach(function (value,key) {
      db.query(" INSERT INTO `products` (`id`, `name`,`categories_id`, `status`) VALUES ('" + value.id + "', '" + value.name + "', '" + value.categories_id + "','" + value.status + "') ");
    });
  }


  const res3 = await axios("https://testapi.referloan.in/api/categories");
  const data3 = await res3.data;

  if(data3)
  {
    data3.forEach(function (value,key) {
      db.query(" INSERT INTO `banks` (`id`, `name`,`code`,`status`) VALUES ('" + value.id + "', '" + value.name + "', '" + value.name + "', '" + value.status + "') ");
    });
  }
  

  const res4 = await axios("https://testapi.referloan.in/api/products");
  const data4 = await res4.data;

  if(data4)
  {
    data4.forEach(function (value,key) {
      db.query(" INSERT INTO `bank_products` (`id`, `banks_id`,`products_id`,`status`) VALUES ('" + value.id + "', '" + value.categories_id + "', '" + value.categories_id + "', '" + value.status + "') ");
    });
  }
  

  const res5 = await axios("https://testapi.referloan.in/api/categories");
  const data5 = await res5.data;

  data1.forEach(function (value,key) {
    db.query(" INSERT INTO `company_types` (`id`, `name`,`status`) VALUES ('" + value.id + "', '" + value.name + "', '" + value.status + "') ");
  });

  return {
    props: {  }
  }

}

export default sink