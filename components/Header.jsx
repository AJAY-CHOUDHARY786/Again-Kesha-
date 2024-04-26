import { useState, useEffect } from 'react';
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust the threshold as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      <div className={isSticky ? 'sticky' : ''}>
      <div className="navbar  ">
        <div id="shopName">
          <Link href="/">
            
            <Image
              src="/Kesha-logo.png"
              width={640}
              height={845}
              alt="Picture of the Logo"
              className="shopName"
            />
          </Link>
        </div>
        <div id="container">
          <div id="search">
            <input
              type="text"
              id="input"
              name="searchBox"
              placeholder="Search for Clothing and Accessories"
            />
            <span className="span">
              <IoIosSearch />
            </span>
          </div>
          <div id="user" className="userIcon">
            <Link href="/cart">
              <FaRegHeart />
              <div id="wishlist"> 0 </div>
            </Link>
            <Link href="/cart">
              <MdOutlineShoppingCart />
              <div id="badge"> 0 </div>
            </Link>
            <Link href="#">
              <FaRegCircleUser />
            </Link>
          </div>
        </div>
      </div>
      </div>
      <div className={`navbaar-link ${isSticky ? 'position-top' : ''}`}>
        <ul className='bg-white'>
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="/aboutus">About Us</Link>
          </li>
          <li>
            <Link href="">Earnings </Link>
          </li>
          <li>
            <Link href="">Rings</Link>
          </li>
          <li>
            <Link href="">Bangles</Link>
          </li>
          <li>
            <Link href="">Necklacs</Link>
          </li>
          <li>
            <Link href="">Bracelets</Link>
          </li>
          <li>
            <Link href="">Male Rings</Link>
          </li>
          <li>
            <Link href="">Pendants</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/custom_product">CustomeProduct</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
