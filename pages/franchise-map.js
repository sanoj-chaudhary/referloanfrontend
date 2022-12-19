import CallbackForm from "../components/page/callbackForm"
import { useLoadScript } from "@react-google-maps/api"
import Map from './../components/page/map'

const Franchisemap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC5vJg6Zs-nho_xeQgpVJXJsm8rWN1wovU" // Add your API key
  });
  return (
    <>
  
      <div class="franchise-banner">
        <img src="/images/fran-banner.jpg" alt="" />
      </div>
      <h1 class="text-center"> Our Franchise Maps</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <Map />
        </div>
        <div className="col-md-6">
          <CallbackForm />
        </div>
      </div>
    </div>
      </>
  
  )
}

export default Franchisemap