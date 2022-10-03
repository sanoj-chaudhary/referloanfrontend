import axios from 'axios';

function Router({ data }) {

  return (
    <div className='container'
      dangerouslySetInnerHTML={{ __html: data[0].post_content }}
    />
  )
}

export async function getServerSideProps(context) {

  const url = context.query.param[1].toString();
  const res = await axios.get(`${process.env.APP_URL}/page/${url}`);
  const data = await res.data;
  return { props: { data } }
}

export default Router

