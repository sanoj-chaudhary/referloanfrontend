import Head from "next/head"
import { useRouter } from 'next/router';
import Script from 'next/script';
export default function Header(children) {
    const router = useRouter();
    let meta_description = '';
    let meta_keyword ='';
    let meta_title ='';
    let slug ='';
    if(children.children.props.data !== undefined){
        if(children.children.props.data.length !=0){
            meta_description = children.children.props.data[0].meta_description;
            meta_keyword = children.children.props.data[0].meta_keyword;
            meta_title = children.children.props.data[0].meta_title;
            slug = children.children.props.data[0].slug;
        }
    }
    
    const titles = (meta_title|| 'Apply Personal Loan, Gold Loan, Home Loan, Business Loan, Education Loan Online India - ReferLoan');
    const description = meta_description || 'We provide wide range of services like loans, Credit Card, Insurance and Investment. We aim to bring a stronghold in the market and aim to build a satisfied community that reaches out to us anytime and everytime they need.';
    const keywords = meta_keyword || 'Apply for Loans, Apply for credit card, Apply for Insurance, Loans Apply';
    const path =  slug? 'https://referloan.in/'+slug : 'https://referloan.in';
    return (
        <>
       
        <Head>
      
            {/* Meta */}
            <meta charSet={'utf-8'} />
            <meta name={'viewport'} content={'width=device-width, initial-scale=1, shrink-to-fit=no'} />
            <meta name="google-site-verification" content="A-2wTKInJgPeZBUQnYLPGAffZ_YmNF-ARQxpu3twdGw" />
            <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled"></meta>
            <title>{titles}</title>
            <meta name={'description'} content={description} />
            <meta name={'keywords'} content={keywords} />
            <link rel={'canonical'} href={path} />
            <meta property={'og:title'} content={titles} />
            <meta property={'og:description'} content={description} />
            <meta property={'og:url'} content={path} />
            <meta property={'og:type'} content={'website'} />
            <meta name={'author'} content="Referloan" />
            <meta name={'subject'} content="Finance Company" />
            <meta name={'owner'} content="Referloan" />
            <meta name={'coverage'} content="India" />
            <meta name={'Geography'} content={'1/25, 1rd floor, Lalita Park, Laxmi Nagar, (Land mark near Gurudawara)110092 Delhi, India'} />
            <meta name={'Language'} content={'English'} />
            <meta httpEquiv={'CACHE-CONTROL'} content={'PUBLIC'} />
            <meta name={'distribution'} content={'Global'} />
            <meta name={'audience'} content={'All'} />
            <meta name={'revisit-after'} content={'3 days'} />
            <meta name={'robots'} content={'index,follow'} />
            <meta name={'country'} content={'India'} />
            {/* Favicon */}
            <link href={'/favicon.ico'} rel={'icon'} type={'image/x-icon'} />
            {/* core Custom css */}
            <link href={'/css/global.css'} rel={'stylesheet'} />
            <link href={'/css/styles.css'} rel={'stylesheet'} />
            <link href={'/css/menu.css'} rel={'stylesheet'} />
            <link href={'/css/slick.css'} rel={'stylesheet'} />
            <link href={'/css/media.css'} rel={'stylesheet'} />
            <link href={'/css/innerPages.css'} rel={'stylesheet'} />
            <link href={'/css/custom.css'} rel={'stylesheet'} />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <link href={'/css/menu-new.css'} rel={'stylesheet'} />
            <script async src="https://cdn.ampproject.org/v0.js"></script>
        </Head>
        { process.env.SITEHOST == 'referloan.in'?<>
       

        <Script>
            {` window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments)
                }
                gtag('js', new Date());
                gtag('config', 'AW-513485835');
            `}
        </Script>

        <Script src="https://www.googletagmanager.com/gtag/js?id=UA-226709847-1"></Script>
        <Script>
            {` window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments)
            }
            gtag('js', new Date());
            gtag('config', 'UA-226709847-1');
        `}
        </Script>
        </>:'' }
        
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous" />

      
        </>
    )
}
