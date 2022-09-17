import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout { ...Component }>
      <Component { ...pageProps } />
    </Layout>
  )
}
