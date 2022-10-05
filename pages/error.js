import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Error({ statusCode }) {
  console.log('Error - Error Component');
  const router = useRouter();
  useEffect(() => {
    router.push(`/error404`);
  });
  return '';
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;