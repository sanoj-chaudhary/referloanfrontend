import React, { useEffect, useState } from "react";
import axios from "axios";

function ourVideo() {
  const [data, setData] = useState(null)

  const getVideo = async ()=>{
    const res = await axios.get('/api/video');
    setData(res.data)
  }
  useEffect(() => {
    getVideo()
      
  }, [])

  if (!data) return <p>No video data</p>

  return (
    <section className="videoSevtion">
      <h2 className="heading text-center">Our Videos</h2>
      <div className="container">
        <ul className="vdoArea">
          {data.map((value, key) => (
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