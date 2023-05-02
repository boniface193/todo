import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();


  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Above</li>
        <li ref={ref}>
          <button onClick={() => setDropdown((prev) => !prev)}>Services <span>&#8595</span></button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  )
};

export default NavBar;