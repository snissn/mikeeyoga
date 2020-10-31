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
            <strong>Mikee</strong> is a Certified Yoga Teacher and Occupational
            Therapist based in Brooklyn, NY.
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
              </span>
              <a
                href="https://www.youtube.com/channel/UC5wC5_0J9Qa6MxXoI8DPUAg"
                style={{ color: "white" }}
              >
                Follow @MikeeYoga on Youtube
              </a>
            </button>
            <br />
            <br />

            <button className="button   is-link ">
                <a className="navbar-item has-text-white">Schedule</a>

            </button>
            <br />
            <br />

            <button className="button   is-link ">
            <span className="icon">
                <i className="fab fa-youtube" />
              </span>
                <a className="navbar-item has-text-white">Youtube Classes</a>

            </button>
            <br />
            <br />

            <button className="button   is-link ">

                <a className="navbar-item has-text-white">Events</a>

            </button>
            <br />
            <br />

            <button className="button   is-link ">

                <a className="navbar-item has-text-white">Bio</a>

            </button>
            <br />
            <br />

            <button className="button   is-link ">

                <a className="navbar-item has-text-white">Contact Mikee</a>

            </button>
          </p>
        </div>
      </footer>
    </body>
  );
}

export default MyApp;
