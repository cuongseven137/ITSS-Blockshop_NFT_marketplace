import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  Link from 'next/link'


export default function HomePage() {
  return (
    <body>
    <header>
      <nav class="mobie-nav">
        <div class="">
          <button type="button" class="mobile-menu-btn">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
        <div class="mobile-logo">
          <a href="/"
            ><img src="image/logo.png"
          /></a>
        </div>
        <div class="mobile-cart-btn">
          <a href="#" class=""
            ><i class="fa fa-shopping-cart" aria-hidden="true"></i
          ></a>
        </div>
      </nav>

  
        <div class="header-logo">
          <a href="/"
            ><img src="image/logo.png"
          /></a>
           </div>


      <section class="navbar">
        <ul class="site-nav">
          <li class="active dropdown-menu">
            < Link href='Market'>Market</Link>  </li>
          
          <li class="dropdown-menu">
            < Link href="Features">Features</Link> </li>
          
          <li class="dropdown-menu">
            <a href="#"
              >Community <i class="fa fa-caret-down" aria-hidden="true"></i
            ></a> </li>
        
         
          <li class="menu-btn main-nav"><a href="#">Search</a></li>
          <li class="menu-btn main-nav"><Link href="RegisterPage">Sign In</Link></li>
        </ul>
      </section>

      <section class="thumbnail">
        <img
          src="image/logo1.png"
        />
      </section>
    </header>

    <main class="main-content">

      <section class="home-policy">
        <div class="wrapper">
          <div class="policy-grid">
            <div class="policy-item">
              <div class="policy-icon">
                <img
                  src="//theme.hstatic.net/1000281383/1000535724/14/policy_icon_1.png?v=242"
                  alt="GIAO HÀNG TOÀN QUỐC"
                />
              </div>
              <div class="policy-title">Nationwide Delivery</div>
            </div>

            <div class="policy-item">
              <div class="policy-icon">
                <img
                  src="//theme.hstatic.net/1000281383/1000535724/14/policy_icon_2.png?v=242"
                  alt="CHẤT LƯỢNG ĐẢM BẢO"
                />
              </div>
              <div class="policy-title">Prestigious quality</div>
            </div>

            <div class="policy-item">
              <div class="policy-icon">
                <img
                  src="//theme.hstatic.net/1000281383/1000535724/14/policy_icon_3.png?v=242"
                  alt="THANH TOÁN LINH HOẠT"
                />
              </div>
              <div class="policy-title">Flexible payment</div>
            </div>
          </div>
        </div>
      </section>

      <section class="home-banner">
        <div class="wrapper">
          <div class="banner-grid">
            <div class="banner-item">
              <a target="_blank" href="/collections/all">
                <img
                  src="image/logo3.png"
                />
              </a>
            </div>
            <div class="banner-item">
              <a target="_blank" href="/collections/all">
                <img
                  src="image/logo2.png"
                />
              </a>
            </div>
            <div class="banner-item">
              <a target="_blank" href="/collections/all">
                <img
                  src="image/logo4.png"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="foot-content">
        <div class="ft-bg-overlay"></div>
        <div class="wrapper">
          <div class="footer-grid">
            <div class="footer-grid-item">
              <ul>
                <h3>SuperRare</h3>

                <li>
                  <a href="">© 2021 SuperRare</a>
                </li>

              </ul>
            </div>
            <div class="footer-grid-item">
              <ul class="footer-contact no-bullets">
                <h3>FOR ARTISTS</h3>
                <li>
                  <a href="">Submit artist profile</a>
                </li>
              </ul>
            </div>
            <div class="footer-grid-item">
              <div class="footer-subscribe">
                <h3>      Subscribe</h3>
          
                <form
                  accept-charset="UTF-8"
                  action=""
                  class="contact-form"
                  method="post"
                >
                  <div class="input-group subscribe-form">
                    <input type="email" placeholder="Email address" />
                    <button type="submit">
                      <i class="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="footer-grid-item">
              <ul class="footer-social">
                <h3>COMMUNITY</h3>
                <div class="ft-social-network">
                  <a href="https://www.facebook.com/superrare.co"><i class="fab fa-facebook-f"></i></a>

                  <a href="https://www.instagram.com/superrare.co/"><i class="fab fa-instagram"></i></a>

                  <a href="https://www.youtube.com/channel/UCp9loE7UzFpFxtQHNK8TbKg" ><i class="fab fa-youtube"></i></a>
                </div>
              </ul>
            </div>
            <div class="footer-grid-item">
              <ul class="footer-certification no-bullets">
                <h3>LEGAL</h3>

                <li>
                  <a href="">Community Guidelines</a>
                </li>
                <li>
                  <a href="">Terms of Service</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="wrapper">
          <p>
            Copyrights © by
            <a target="_blank" href="https://superrare.com/">SuperRare
            </a>
          </p>
        </div>
      </div>
    </footer>
  </body>
)
}

