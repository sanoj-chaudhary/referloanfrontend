import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import SubMenu from './subMenu';

const Menu = () => {
    const [headermenu, setHeaderMenu] = useState([]);
    const [isHovering, setIsHovering] = useState(false);
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
        item.hierarchy == 'Product_BankProduct' ? <li key={item.id}><Link href={'/'+item.slug+process.env.UTM} ><a className={item.product ? "hasSub_menu" : ''} title={item.name}>{item.name}</a></Link>
            <div className={item.product ? "megaMenu_container" : ''} >
                <ul className={item.product ? "subMenuLevel2" : ''}>
                    {item.product && item.product.map((value, Indexkey) => (
                        <li key={value.id}
                            className={Indexkey ? "activeSubMenu" : "activeSubMenu menu-active" && isHovering ? 'activeSubMenu' : 'activeSubMenu menu-active'}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        > <Link href={'/'+value.slug+process.env.UTM}  ><a title={value.name}>{value.name}</a></Link>
                            <div className="submenuContainer">
                                <ul>
                                    {value.bank_product && <SubMenu utm={process.env.UTM} data={value.bank_product} />}
                                </ul>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </li> : <li key={item.id}><Link href={'/'+item.slug+process.env.UTM} ><a className={item.page ? "hasSub_menu" : ''} title={item.name}>{item.name}</a></Link>
            <div className={item.page ? "megaMenu_container" : ''} >
                <ul className={item.page ? "subMenuLevel2" : ''}>
                    {item.page && item.page.map((value, Indexkey) => (
                        <li key={value.id}
                            className={Indexkey ? "activeSubMenu" : "activeSubMenu menu-active" && isHovering ? 'activeSubMenu' : 'activeSubMenu menu-active'}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        > <Link href={'/'+value.slug+process.env.UTM}  ><a style={{ textTransform: 'capitalize' }} title={value.name}>{value.name}</a></Link>
                        </li>
                    ))}
                </ul>
            </div>
        </li>

    ))

    useEffect(() => {
        getheaderMenu();
    }, []);
    return (
        <>
            <header id="moileheader" className="d-md-none d-block">
                <div className="mheadWrapper">
                    <div className="header_left">
                        <a className="logo" href="/"><img src="/images/logo.png" alt="logo" /></a>
                    </div>
                    <div className="header_right">
                        <label htmlFor="menuTrigger" className="nav_ico"><i className="fa fa-bars"></i></label>
                        <input id="menuTrigger" type="checkbox" name="" />
                        <nav className="main_nav">
                            <ul>
                                {
                                    headermenu.map((item1, index) => (
                                        item1.hierarchy == 'Product_BankProduct' ? <li key={index}><Link href={'/'+item1.slug+process.env.UTM}><a>{item1.name}</a></Link>
                                        <i className="fa fa-caret-down"></i>
                                            <ul>
                                                {
                                                    item1.product && item1.product.map((value1, key) => (

                                                        <li key={key} ><Link href={'/'+value1.slug+process.env.UTM} ><a >{value1.name}</a></Link>
                                                            <i className="fa fa-caret-down"></i>

                                                            <ul>
                                                                {value1.bank_product && <SubMenu data={value1.bank_product} />}
                                                            </ul>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                        </li> :
                                        <li key={index}><Link href={'/'+item1.slug+process.env.UTM}><a >{item1.name}</a></Link>
                                        <i className="fa fa-caret-down"></i>
                                            <ul>
                                                {
                                                    item1.page && item1.page.map((value1, key) => (
                                                        <li key={key} ><Link href={'/'+value1.slug+process.env.UTM}><a >{value1.name}</a></Link></li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                    ))
                                }
                               
                                <li><Link href="/zero-investment-franchise"><a title="Franchise">Franchise</a></Link></li>
                                <li><Link href="https://blog.referloan.in/"><a  title="Blogs">Blogs</a></Link></li>
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
                          
                            <Link href="/"><a className="logoSection"><img src="/images/top-logo.png" alt="" title="referloan" /></a></Link>

                            <div className="info_section">
                                <ul>
                                    <li>
                                        <Link href="mailto:info@referloan.in"><a><i className="fa fa-envelope" aria-hidden="true"></i> info@referloan.in</a></Link>
                                    </li>
                                    <li>
                                        <Link href="tel:0124-4847123"><a > <i className="fas fa-phone-square-alt"></i>  0124-4847123</a></Link>
                                    </li>
                                </ul>
                                <Link href="#"><a ><img src="/images/CIBIL Score.gif" alt="" /></a></Link>
                            </div>

                        </div>
                    </div>

                </section>

                <nav className=" navBarContainer">
                    <div className="container">
                        <ul>
                            {items}
                            <li><Link href="/zero-investment-franchise"><a title="Franchise">Franchise</a></Link></li>
                            <li><Link href="https://blog.referloan.in/"><a target="_blank" title="Blogs">Blogs</a></Link></li>
                            <li><Link href="/contact"><a title="Contact">Contact</a></Link></li>
                        </ul>
                    </div>
                </nav >
            </header >
        </>


    )

}

export default Menu