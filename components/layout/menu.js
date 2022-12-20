import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import SubMenu from './subMenu';
import { useRouter } from 'next/router';
import $ from 'jquery'
import Image from "next/image";

const Menu = () => {
    const router = useRouter()
    let utmData = '';
    const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
    if (!utm_campaign) {
        utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`
    } else {
        utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`
    }

    const [headermenu, setHeaderMenu] = useState([]);
    const [isHovering, setIsHovering] = useState(false);
    const [active,setActive] = useState('')
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    const getheaderMenu = async () => {
        try {
            const res = await axios.get(`${process.env.APP_URL}/headermenu`);

            setHeaderMenu(res.data);
        }
        catch (err) {
            console.log(err)
        }
    }


    const items = headermenu.map((item, index) => (
        item.hierarchy == 'Product_BankProduct' ? <li key={item.id}><Link href={'/' + item.slug + utmData} ><a className={item.product ? "hasSub_menu" : ''} title={item.name}>{item.name}</a></Link>
            <div className={item.product ? "megaMenu_container" : ''} >
                <ul className={item.product ? "subMenuLevel2" : ''}>
                    {item.product && item.product.map((value, Indexkey) => (
                        <li key={value.id}
                            className={Indexkey ? "activeSubMenu" : "activeSubMenu menu-active" && isHovering ? 'activeSubMenu' : 'activeSubMenu menu-active'}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        > <Link href={'/' + value.slug + utmData}  ><a title={value.name}>{value.name}</a></Link>
                            <div className="submenuContainer">
                                <ul className="secondLevelUl">
                                    {value.bank_product && <SubMenu setActive={setActive}  data={value.bank_product} />}
                                </ul>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </li> : <li key={item.id}><Link href={'/' + item.slug + utmData} ><a className={item.page ? "hasSub_menu" : ''} title={item.name}>{item.name}</a></Link>

            <ul className={item.page ? "subMenuLevel2 smallDropMenu" : ''}>
                {item.page && item.page.map((value, Indexkey) => (
                    <li key={value.id}
                        className={Indexkey ? "activeSubMenu" : "activeSubMenu menu-active" && isHovering ? 'activeSubMenu' : 'activeSubMenu menu-active'}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    > <Link href={'/' + value.slug + utmData}  ><a style={{ textTransform: 'capitalize' }} title={value.name}>{value.name}</a></Link>
                    </li>
                ))}
            </ul>
        </li>
    ))

    useEffect(() => {
        getheaderMenu();
        if (typeof window !== 'undefined') {
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("full_name");
            window.localStorage.removeItem("pan");
            window.localStorage.removeItem("phone");
          }

    }, []);

    if (typeof window !== 'undefined') {

        $('.secondLevelUl li,.subMenuLevel2 li,#mainNavUl li').on('click', function () {
            $('.megaMenu_container').addClass('d-none')
        })

        $('#mainNavUl li').on('mouseenter', function () {
            $('.megaMenu_container').removeClass('d-none')
        })
    }

    const activeFunction = ()=>{
      active !=''?setActive(''):setActive('active')
    }
    return (
        <>

            <header id="moileheader" className="d-md-none d-block">
                <div className="mheadWrapper">
                    <div className="header_left">
                        <Link href={'/' + utmData}><a className="logo" ><Image src="/images/logo.webp" alt="logo" width="175" height="36" loading='lazy' /></a></Link>
                    </div>
                    <div className="header_right">
                        <label htmlFor="menuTrigger" className="nav_ico"><i className="fa fa-bars"></i></label>
                        <input id="menuTrigger" onClick={()=>{activeFunction()}} type="checkbox" name="" />
                        <nav id="firstLevelUlMobile" className={`main_nav ${active} `} >
                            <ul className="_firtlevelul">
                                {
                                    headermenu.map((item1, index) => (

                                        item1.hierarchy == 'Product_BankProduct' ? <li key={index}><Link href={'/' + item1.slug + utmData}><a>{item1.name}</a></Link>
                                            {!item1.bank_product && <i className="fa fa-caret-down"></i>}
                                            <ul className="mobileMegaMenu">
                                                {
                                                    item1.product && item1.product.map((value1, key) => (

                                                        <li key={key} ><Link href={'/' + value1.slug + utmData} ><a >{value1.name}</a></Link>
                                                            <i className="fa fa-caret-down"></i>

                                                            <ul className="thirdLevelUl">
                                                                {value1.bank_product && <SubMenu setActive={setActive} data={value1.bank_product} />}
                                                            </ul>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                        </li> :
                                            <li key={index}><Link href={'/' + item1.slug + utmData}><a >{item1.name}</a></Link>
                                                {item1.page && <i className="fa fa-caret-down"></i>}

                                                <ul className="thirdLevelUl">
                                                    {
                                                        item1.page && item1.page.map((value1, key) => (
                                                            <li key={key} ><Link href={'/' + value1.slug + utmData}><a >{value1.name}</a></Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </li>
                                    ))
                                }
                               
                                <li><Link href="/franchise-investment"><a title="Franchise">Partners</a></Link></li>
                                <li><Link href="/contact"><a title="Contact">Contact</a></Link></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </header>
            <header className="d-md-block d-none">

                <section>
                    <div className="container">
                        <div className="customContainer">

                            <Link href={'/' + utmData}><a className="logoSection" aria-label="Referloan"><Image src="/images/top-logo.webp" alt="" title="referloan" width="231" height="50" loading='lazy' /></a></Link>

                            <div className="info_section">
                                <ul>
                                    <li>
                                        <Link href="mailto:info@referloan.in"><a><i className="fa fa-envelope"></i> info@referloan.in</a></Link>
                                    </li>
                                    <li>
                                        <Link href="tel:0124-4847123"><a > <i className="fas fa-phone-square-alt"></i>  0124-4847123</a></Link>
                                    </li>
                                </ul>
                                <Link href="/"><a aria-label="Cibil"><Image src="/images/CIBIL Score.gif" alt=""  width="156" height="40" loading='lazy' /></a></Link>
                            </div>

                        </div>
                    </div>

                </section>

                <nav className=" navBarContainer">
                    <div className="container">
                        <ul id="mainNavUl">
                            {items}
                            <li><Link href="/franchise-investment"><a title="Franchise">Partners</a></Link></li>
                            <li><Link href="/contact"><a title="Contact">Contact</a></Link></li>
                        </ul>
                    </div>
                </nav >
            </header >
        </>


    )

}

export default Menu