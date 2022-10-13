import Home from './../components/home'
import { db } from './../config/db'
export default function Index({ partner,video,testimonial }) {

  return (
    <>
      <Home partner={partner} video={video} testimonial={testimonial} />
    </>
  )

}


export async function getServerSideProps() {

  const results = await db.query("SELECT * FROM `videos` WHERE `is_active` = '1' ");
  const video = JSON.parse(JSON.stringify(results))
  const testimonialRes = await db.query("SELECT * FROM `testimonials` WHERE `is_active` = '1' ");
  const testimonial = JSON.parse(JSON.stringify(testimonialRes))

  const res = await db.query("SELECT logo_path,name FROM `partners` WHERE `is_active` = '1' ");
  const partner = JSON.parse(JSON.stringify(res))
  return { props: { partner,video,testimonial } }
}
