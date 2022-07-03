import Link from "next/link";
import React from "react";
// import Image from "next/image";
// import Logo from "../assets/logo.png"

const Navbar:React.FC = ({}) => {

    return (
        <nav className="navbar">
            {/* <a href="#"> */}
                {/* <Image src={Logo} width="3rem" height="3rem" /> */}
            {/* </a> */}
            <ul className="nav">
                <li className="navbar__nav-item">
                        <Link href={"/"}>
                            <a className={"navbar__nav-link"}>
                                Home
                            </a>
                        </Link>
                </li>

                <li className="navbar__nav-item">
                        <Link href={"/"}>
                            <a className={"navbar__nav-link"}>
                                About
                            </a>
                        </Link>
                </li>

                <li className="navbar__nav-item">
                    {/* <a className={"navbar__nav-link"}> */}
                        <Link href={"/view/lands"}>
                            View Lands
                        </Link>
                    {/* </a> */}
                </li>

                <li className="navbar__nav-item">
                    {/* <a className={"navbar__nav-link"}> */}
                        <Link href={"/view/houses"}>View Houses</Link>
                    {/* </a> */}
                </li>

                <li className="navbar__nav-item">
                    {/* <a className={"navbar__nav-link"}> */}
                        <Link href={"/sell/properties"}>Sell Properties</Link>
                    {/* </a> */}
                </li>

                <li className="navbar__nav-item">
                    {/* <a className={"navbar__nav-link"}> */}
                        <Link href={"/login"}>Log In</Link>
                    {/* </a> */}
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;