
function ourVideo(props) {

  return (
    <section className="videoSevtion">
      <h2 className="heading text-center">Our Videos</h2>
      <div className="container">
        <ul className="vdoArea">
          {props.video && props.video.map((value, key) => (
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

export default ourVideo