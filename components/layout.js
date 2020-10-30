import Head from "next/head";
import Link from "next/link";
export default ({ children }) => {
  /*
   * Added this to toggle the is-active class. See:
   *
   * https://bulma.io/documentation/components/navbar/#navbar-menu
   * https://github.com/jgthms/bulma/issues/856
   */
  const toggleStyles = (event) => {
    document.querySelector("#burger").classList.toggle("is-active");
    document.querySelector("#navbarmenu").classList.toggle("is-active");
  };

  return (
    <div >
      <Head>
        <title>Mikee Yoga</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        />
      </Head>

      {children}
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Mikee</strong> is a Yoga teacher based in Brooklyn, NY.
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
        </div>
      </footer>
    </div>
  );
};
