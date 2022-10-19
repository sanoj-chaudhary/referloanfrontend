import Head from 'next/head';
import MidContent from './midcontent';

const midcontent = ({data}) => {

  return (
    <>
      

      <div class="innerpage_bg">
        <section class="section_pad">
          <div class="container">

            
            <MidContent midcontent={data[0].description} />

            
          </div>
        </section>
      </div>
    </>

  )
}

export default midcontent