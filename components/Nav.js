import Link from "next/link";
import React, { Component, Fragment, useState } from "react";

export default (props) => {
    const [active, setActive] = useState(false);
    function toggle() {
        setActive(!active)
        console.log("toggle")
    }
    let toggleclass = ""
    if (active) {
        toggleclass = "is-active"
    } else {
        toggleclass = ""
    }
    return (
        <header>
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item">
                            <img
                                src="/logo.png"
                                style={{ height: "120px !important", maxHeight: "120px" }}
                            />
                        </a>
                    </Link>

                    <a role="button" className={"navbar-burger " + toggleclass} aria-label="menu" aria-expanded="false" onClick={toggle}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className={"navbar-menu " + toggleclass} >
                    <div className="navbar-start">

                        <Link href="/schedule">
                            <a className="   navbar-item">Schedule</a>
                        </Link>
                        <Link href="/youtube">
                            <a className="navbar-item">Youtube Classes</a>
                        </Link>
                        <Link href="/events">
                            <a className="navbar-item">Events</a>
                        </Link>
                        <Link href="/bio">
                            <a className="navbar-item">Bio</a>
                        </Link>
                        <Link href="/contact">
                            <a className="navbar-item">Contact Mikee</a>
                        </Link>

                    </div>
                </div>
            </nav>
        </header >)
}