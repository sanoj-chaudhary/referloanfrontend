import { useRouter } from 'next/router'
import axios from 'axios';
import { db } from './../config/db'

function sink() {
 // console.log(temp);
  return (
    <div></div>
  )
}


export async function getServerSideProps(context) {
  
  db.query(" TRUNCATE ` categories ` ");
  db.query(" TRUNCATE ` products ` ");
  db.query(" TRUNCATE ` banks ` ");
  db.query(" TRUNCATE ` bank_products ` ");
  
  const res1  = await axios("https://testapi.referloan.in/api/categories");
  const data1 = await res1.data;
  
  data1.forEach(function (value,key) {
    db.query(" INSERT INTO `categories` (`id`, `name`, `status`) VALUES ('" + value.id + "', '" + value.name + "', '" + value.status + "') ");
  });

  const res2 = await axios("https://testapi.referloan.in/api/products");
  const data2 = await res2.data;

  data2.forEach(function (value,key) {
    db.query(" INSERT INTO `products` (`id`, `name`,`categories_id`, `status`) VALUES ('" + value.id + "', '" + value.name + "', '" + value.categories_id + "','" + value.status + "') ");
  });

  const res3 = await axios("https://testapi.referloan.in/api/banks");
  const data3 = await res3.data;

  data3.forEach(function (value,key) {
    db.query(" INSERT INTO `banks` (`id`, `name`,`code`,`status`) VALUES ('" + value.id + "', '" + value.name + "', '" + value.code + "', '" + value.status + "') ");
  });

  const res4 = await axios("https://testapi.referloan.in/api/bank_products");
  const data4 = await res4.data;

  data4.forEach(function (value,key) {
    db.query(" INSERT INTO `bank_products` (`id`, `banks_id`,`products_id`,`status`) VALUES ('" + value.id + "', '" + value.banks_id + "', '" + value.products_id + "', '" + value.status + "') ");
  });

  return {
    props: {  }
  }

}

export default sink