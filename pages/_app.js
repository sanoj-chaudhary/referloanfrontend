import Layout from '../components/layout';
// export const config = { amp: true }
function MyApp({ Component, pageProps, data }) {
  return (
    <Layout {...Component}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp