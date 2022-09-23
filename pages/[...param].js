import { useRouter}  from 'next/router'

function router(){
    const router        =   useRouter();
    const { param }     =   router.query;

    
    return(
        <div>Page : { param }</div>
    )
}


export default router