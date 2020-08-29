import Head from 'next/head'
import Link from 'next/link'
import '../styles/styles.sass'

export default ({ children }) => {
  /*
   * Added this to toggle the is-active class. See:
   * 
   * https://bulma.io/documentation/components/navbar/#navbar-menu
   * https://github.com/jgthms/bulma/issues/856
   */
  const toggleStyles = (event) => {
    document.querySelector('#burger').classList.toggle('is-active')
    document.querySelector('#navbarmenu').classList.toggle('is-active')
  }

  return (
    <div>
      <Head>
        <title>Mikee Yoga</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <header>
        <nav className="navbar " role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
              Mikee Yoga
            </a>
       
       
          </div>
          <div id="navbarmenu" className="navbar-menu">
            <div className="navbar-start">
              <Link prefetch href="/">
                <a className="navbar-item">Home</a>
              </Link>
              <Link prefetch href="/about">
                <a className="navbar-item">About</a>
              </Link>
            </div>
    
          </div>
        </nav>
      </header>
      {children}
      <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Mikee</strong> is a Yoga teacher based in Brooklyn, NY.</p>
    <p>
      <a href="https://instagram.com/MikeeYoga">Instagram</a>
    </p>
  </div>
</footer>

    </div>
  )
}
