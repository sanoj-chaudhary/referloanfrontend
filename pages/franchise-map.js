import CallbackForm from "../components/page/callbackForm"
import Map from './../components/page/map'

const Franchisemap = () => {

  return (
    <>
  
      <div className="franchise-banner">
        <img src="/images/fran-banner.jpg" alt="" />
      </div>
      <h1 className="text-center"> Our Franchise Maps</h1>
    <div className="container-fluid mb-4 px-4">
      <div className="row map_container">
        <div className="col-md-6">
        <Map />
        </div>
        <div className="col-md-6 franchise_listing_area ">
          <CallbackForm />
        </div>
      </div>
    </div>
      </>
  
  )
}

export default Franchisemap