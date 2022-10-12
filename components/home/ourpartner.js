import { db } from "../../config/db";
import Image from 'next/image'

function Partner({ data }) {
console.log(data)
  return (
    <section class="partnerArea">
      <div class="container">
        <h2 class="heading text-center">Our partners</h2>
        <h3>from across the industry</h3>
        <ul>
          {data.map((datas) => (
            <li>{datas.name} <Image src={'/uploads/partner/' + datas.logo_path} layout='fill' /></li>
          )
          )}
        </ul>
      </div>
    </section>
  )

}

export async function getServerSideProps() {
  const res = await db.query("SELECT * FROM `partners` WHERE `is_active` = '1'")
  const data = await JSON.parse(JSON.stringify(res))
  return { props: { data } }
}

export default Partner