import Layout from '../components/layout';
import AuthLayout from '../components/authLayout'
import { useEffect, useState } from 'react'
import Loader from '../components/page/loader';
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps, data }) {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    return setTimeout(() => setLoading(false), 1000);

  }, []);


let url = router.asPath.split('/')

  if (url[1] === "user-auth") {
    return (
      <>
        {loading && <Loader />}
        <style jsx global>{`
        body {
          background: #F8F8F8};
        }
      `}</style>
        <AuthLayout {...Component}>
          <Component {...pageProps} />
        </AuthLayout>

      </>

    )
  } else {
    return (
      <>
        {loading && <Loader />}
        <Layout {...Component}>
          <Component {...pageProps} />
        </Layout>

      </>

    )
  }

}

export default MyApp