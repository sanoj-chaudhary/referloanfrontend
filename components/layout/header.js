import Head from "next/head"
import { useRouter } from 'next/router';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
export default function Header(children) {
    const router = useRouter();
    const title = 'Referloan: ' + (children.title || 'Apply for Loans, Credit Card, Insurance and Investment');
    const description = children.description || 'We provide wide range of services like loans, Credit Card, Insurance and Investment. We aim to bring a stronghold in the market and aim to build a satisfied community that reaches out to us anytime and everytime they need.';
    const keywords = children.keywords || 'Apply for Loans, Apply for credit card, Apply for Insurance, Loans Apply';
    const path = 'https://referloan.in' + router.pathname;
    return (
        <Head>
            {/* Meta */ }
            <meta charset={ 'utf-8' } />
            <meta name={ 'viewport' } content={ 'width=device-width, initial-scale=1, shrink-to-fit=no' } />
            <title>{ title }</title>
            <meta name={ 'description' } content={ description } />
            <meta name={ 'keywords' } content={ keywords } />
            <link rel={ 'canonical' } href={ path } />
            <meta property={ 'og:title' } content={ title } />
            <meta property={ 'og:description' } content={ description } />
            <meta property={ 'og:url' } content={ path } />
            <meta property={ 'og:type' } content={ 'website' } />
            <meta name={ 'author' } content="Referloan" />
            <meta name={ 'subject' } content="Finance Company" />
            <meta name={ 'owner' } content="Referloan" />
            <meta name={ 'coverage' } content="India" />
            <meta name={ 'Geography' } content={ '1/25, 1rd floor, Lalita Park, Laxmi Nagar, (Land mark near Gurudawara)110092 Delhi, India' } />
            <meta name={ 'Language' } content={ 'English' } />
            <meta http-equiv={ 'CACHE-CONTROL' } content={ 'PUBLIC' } />
            <meta name={ 'distribution' } content={ 'Global' } />
            <meta name={ 'audience' } content={ 'All' } />
            <meta name={ 'revisit-after' } content={ '3 days' } />
            <meta name={ 'Robots' } content={ 'INDEX,NOFOLLOW' } />
            <meta name={ 'country' } content={ 'India' } />

            {/* Favicon */ }
            <link href={ '/favicon.ico' } rel={ 'icon' } type={ 'image/x-icon' } />

            {/* Core theme CSS (includes Bootstrap) */ }
            <link href={ 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' } rel={ 'stylesheet' } />
            <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />

            {/* core Custom css */ }
            <link href={ '/css/global.css' } rel={ 'stylesheet' } />
            <link href={ '/css/styles.css' } rel={ 'stylesheet' } />
            <link href={ '/css/menu.css' } rel={ 'stylesheet' } />
            <link href={ '/css/custom.css' } rel={ 'stylesheet' } />
            <link href={ '/css/mmenu.css' } rel={ 'stylesheet' } />
            <link href={ '/css/slick-theme.css' } rel={ 'stylesheet' } />
            <link href={ '/css/slick.css' } rel={ 'stylesheet' } />
            <link href={ '/css/media.css' } rel={ 'stylesheet' } />
            <link href={ '/css/innerPages.css' } rel={ 'stylesheet' } />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="undefined" crossorigin="anonymous" />
            <script src={'/js/common-validation.js'} />
            <script src={'/js/menu.js'} />

        </Head>
    )
}
