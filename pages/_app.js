import Nav from "../components/Nav.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../styles/styles.sass";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
    return (
        <body>
            <div id="wrapper">

                <Nav></Nav>
                <Component {...pageProps} />
            </div>
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Mikee</strong> is a Certified Yoga Teacher and Occupational Therapist based in Brooklyn, NY.
                                  </p>
                    <p>
                        <button className="button   is-link ">
                            <span className="icon">
                                <i className="fab fa-instagram" />
                            </span>{" "}
                            <a
                                href="https://instagram.com/MikeeYoga"
                                style={{ color: "white" }}
                            >
                                Follow @MikeeYoga on Instagram
              </a>
                        </button>
                        <br />
                        <br />
                        <button className="button   is-link ">
                            <span className="icon">
                                <i className="fab fa-youtube" />
                            </span>{" "}
                            <a
                                href="https://www.youtube.com/channel/UC5wC5_0J9Qa6MxXoI8DPUAg" style={{ color: "white" }}
                            >
                                Follow @MikeeYoga on Youtube
              </a>
                        </button>
                    </p>

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
            </footer>
        </body>
    );
}

export default MyApp;
