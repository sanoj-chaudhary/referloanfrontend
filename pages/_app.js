import Layout from '../components/layout';

  
function MyApp({ Component, pageProps, data }) {
  return (
    <Layout {...Component}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp