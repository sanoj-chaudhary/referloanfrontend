import React, { useEffect, useState } from "react";


function ourVideo() {
  const [data, setData]         = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/video')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No video data</p>

  return (
    <section className="videoSevtion">
      <h2 className="heading text-center">Our Videos</h2>
      <div className="container">
        <ul className="vdoArea">
          {data.map((value, key) => (
              <li>
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