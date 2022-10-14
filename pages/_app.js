import Layout from '../components/layout';
import { Provider } from 'react-redux'
import store from '../redux/store';
import { db } from './../config/db'
function MyApp({ Component, pageProps, data }) {
  console.log("menu", data)
  return (
    <Provider store={store}>
      <Layout {...Component}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )


}
export async function getServerSideProps(context) {
  const res = await db.query("select * from products where categories_id ='1' ");
  const data = res;
  return { props: { data } }
}

export default MyApp