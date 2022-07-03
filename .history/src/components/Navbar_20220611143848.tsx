import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../src/assets/logo.png"

const Navbar:React.FC = ({}) => {

    return (
        <nav className="navbar">
            <Link href="#">
                <Image className="navbar_brand" src={Logo} width="3rem" height="3rem" />
            </Link>
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
                    <Link href={"/view/lands"}>
                        <a className={"navbar__nav-link"}>
                            View Lands
                        </a>
                    </Link>
                </li>

                <li className="navbar__nav-item">
                    <Link href={"/view/houses"}>
                        <a className={"navbar__nav-link"}>
                            View Houses
                        </a>
                    </Link>
                </li>

                <li className="navbar__nav-item">
                    <Link href={"/sell/properties"}>
                        <a className={"navbar__nav-link"}>    
                            Sell Properties
                        </a>    
                    </Link>
                </li>

                <li className="navbar__nav-item">
                    <Link href={"/login"}>
                        <a className={"navbar__nav-link"}>
                            Log In
                        </a>                          
                    </Link>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;