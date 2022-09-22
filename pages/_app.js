import Layout from '../components/layout';
import { Provider } from 'react-redux'
import store from '../redux/store';
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout {...Component}>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  )
}
