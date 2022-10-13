
function ourVideo({ video }) {

  if (!video) return <p className="d-flex justify-content-center">No video data</p>

  return (
    <section className="videoSevtion">
      <h2 className="heading text-center">Our Videos</h2>
      <div className="container">
        <ul className="vdoArea">
          {video && video.map((value, key) => (
            <li key={key}>
              <div className="videBox">
                <iframe src={value.embedded_code}></iframe>
              </div>
              <p>{value.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export async function getServerSideProps() {
  const result = await db.query(" SELECT * FROM `videos` WHERE `is_active` = '1' ");
  const data = result.json();
  return {
    props: { data }
  }
}

export default ourVideo