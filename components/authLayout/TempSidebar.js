import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const TempSideBar = ({ data }) => {
  const [open, setOpen] = useState([]);

  const toggleNavbar = (e) => {
    let current = e.target.getAttribute("data-value");

    if (open.includes(current)) {
      var newOpen = [...open].filter((e) => e !== current);
    } else {
      var newOpen = [...open, current];
    }

    setOpen(newOpen);
  };


  return (
    <>

      {
        data.length > 0 && data.slice(0, 2).map((parent, i) => (
          <ParentUL
            key={i}
            name={parent.name}
            open={open.includes(parent.name) ? true : false}
          >
            <span className="menu-icon">
              <i className="ri-dashboard-fill"></i>
            </span>
            <ParentButton onClick={toggleNavbar} data-value={parent.name}>

              {parent.name}
            </ParentButton>
            <ChildUL>
              {parent && parent.product.map((child, i) => (
                <ChildLI key={i} ><Link href={`/user-auth/products/${child.page_id}`}>{child.name}</Link></ChildLI>
              ))}
            </ChildUL>
          </ParentUL>
        ))
      }
    </>
  )



};

export default TempSideBar;

const ParentUL = styled.ul`
  /* your existing css should go here */

  /* if the parent's name is in 'open' hook, then show its children*/
  & ul li {
    display: ${(props) => (props.open ? "block" : "none")};
  }
  
`;

const ParentButton = styled.button`
  width: 200px;
  background: none;
  border: none;

  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
  transition: color 0.3s;
}
`;

const ChildUL = styled.ul`
  /* your existing css should go here */
`;

const ChildLI = styled.li`
  /* your existing css should go here */
`;





