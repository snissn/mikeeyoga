import Link from "next/link";

export default (props) => (
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
                <Link href="/">
                    <a className="navbar-item">Home</a>
                </Link>

                <Link href="/schedule">
                    <a className="navbar-item">Schedule</a>
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
        </nav>
    </header>)