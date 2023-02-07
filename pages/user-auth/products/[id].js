import axios from "axios";
import { useEffect, useState } from "react";
import BankProductsCard from './BankProductCard'
import { useRouter } from "next/router";
import Profile from '../../../components/auth/Profile'
const BankProducts = () => {
  const [sidebarmenu, setSidebarMenu] = useState([]);

  const router = useRouter()
  const getsidebarMenu = async () => {
    try {
      const res = await axios.get(`${process.env.APP_URL}/headermenu`);
      setSidebarMenu(res.data);
    }
    catch (err) {
      console.log(err)
    }
  }



  useEffect(() => {
    getsidebarMenu();

  }, []);

 
  return (
    <>


      <div className="content-row">

        <div className="content-col">
          <div className="offer-section">
            <h3 className="offer-title">Offer's for you</h3>
            <div className="gx-0 gy-3 row">

              {
                sidebarmenu.length > 0 && sidebarmenu.slice(0, 2).map((item, i) => (
                  item.product.length > 0 && item.product.map((crl, ind) => (
                    crl.page_id == router.query.id && <BankProductsCard key={ind} data={crl.bank_product} />
                  ))
                ))
              }
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default BankProducts