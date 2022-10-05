import {useRouter} from 'next/router'
import Button from '@mui/material/Button';
const error404 = () => {
  const router = useRouter();


  return (
    <div className='error404'>
        <h2>Page Not Found</h2>
        <Button variant="contained" onClick={() => router.push('/')}>Back Home</Button>
    </div>
  )
}

export default error404