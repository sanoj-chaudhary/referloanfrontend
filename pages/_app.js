import Layout from '../components/layout';
import { useEffect, useState } from 'react'
import Loader from '../components/page/loader';
// export const config = { amp: true }
function MyApp({ Component, pageProps, data }) {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    return setTimeout(() => setLoading(false), 1000);

  }, []);

  return (
    <>
      {loading && <Loader />}
      <Layout {...Component}>
        <Component {...pageProps} />
      </Layout>

    </>

  )
}

export default MyApp