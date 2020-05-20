import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import * as Mat from 'materialize-css/dist/js/materialize.min';
import './HomePage.css';
import headerImgSm from '../../images/farmproduce-header-img-640.webp';
import headerImgLg from '../../images/farmproduce-header-img-1073.webp';

function toggleMobileNav(ev) {
  ev.preventDefault();
  const mobileNav = document.querySelector('.mobile-nav');
  mobileNav.classList.toggle('closed');
}

export default function HomePage() {
  return (
    <div>
      <nav className="transparent flex-row-md">
        <ul className="flex-row mr-auto">
          <a href="#" class="brand-name ml-1 font-size-2 green-text text-darken-3 text-bolder">
            Farmhub
          </a>
          <button
            className="navmenu-toggle hide-on-med-and-up"
            onClick={(ev) => {
              toggleMobileNav(ev);
            }}
            aria-label="navigation menu icon"
            alt="nav menu icon"
          ></button>
        </ul>
        <ul className="hide-on-small-only flex-row align-center mr-1">
          <li className="no-float pagelinks flex-row align-center">
            <ul className="flex-row align-center">
              <li className="no-float">
                <a href="" className="green-text text-darken-3 text-bold font-size-1">
                  Link One
                </a>
              </li>
              <li className="no-float">
                <a href="" className="green-text text-darken-3 text-bold font-size-1">
                  Link Two
                </a>
              </li>
              <li className="no-float">
                <a href="" className="green-text text-darken-3 text-bold font-size-1">
                  Link Three
                </a>
              </li>
            </ul>
          </li>
          <li className="no-float authlinks flex-row align-center ml-1">
            <button className="btn-flat primary waves-effect green-text text-darken-3 mr-1">Sign in</button>
            <button className="btn waves-effect white-text green darken-3">Sign up</button>
          </li>
        </ul>
        <ul className="white flow-text mobile-nav closed z-depth-1">
          <li className="no-float">
            <a href="" className="green-text text-darken-3 text-bold  flow-text  font-size-1">
              Link One
            </a>
          </li>
          <div className="divider"></div>
          <li className="no-float">
            <a href="" className="green-text text-darken-3 text-bold  font-size-1">
              Link Two
            </a>
          </li>
          <div className="divider"></div>
          <li className="no-float">
            <a href="" className="green-text text-darken-3 text-bold  font-size-1">
              Link Three
            </a>
          </li>
          <div className="divider"></div>
          <li className="no-float flex-x ">
            <button className="btn-flat flex-x primary waves-effect green-text text-darken-3">Sign in</button>
          </li>
          <li className="no-float flex-x ">
            <button className="btn flex-x waves-effect white-text green darken-3">Sign up</button>
          </li>
        </ul>
        {/* <ul>
          <li>
            <button
              className="navmenu-toggle"
              onClick={(ev) => {
                toggleSidenav(ev);
              }}
              aria-label="navigation menu icon"
              alt="nav menu icon"
            ></button>
          </li>
          <li>
            <a href="">Farmhub</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Link One</a>
          </li>
          <li>
            <a href="">Link Two</a>
          </li>
          <li>
            <a href="">Market</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Sign in</a>
          </li>
          <li>
            <a href="">Sign up</a>
          </li>
        </ul> */}
      </nav>
      <header>
        <section role="img" aria-label="header image">
          <h1>The No. 1 connect for farmers and buyers</h1>
        </section>
      </header>
      <main>
        <article id="article_farmers">
          <h3>For Farmers</h3>
          <section>
            <img src="https://picsum.photos/seed/picsum/300.webp" alt="an image of happy farmers on the farm" />
            <section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eaque dolores tenetur dolorem esse quia
              explicabo!
            </section>
          </section>
        </article>
        <article id="article_buyers">
          <h3>For Buyers</h3>
          <section>
            <img src="https://picsum.photos/seed/picsum/300.webp" alt="an image of happy buyers in the market" />
            <section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aspernatur culpa minus, repellat
              molestiae?
            </section>
          </section>
        </article>
      </main>
      <footer>
        <h4>Footer Heading</h4>
        <p className="flow-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quidem eius sapiente distinctio modi saepe
          libero.
        </p>
        <small> #BuildForSDG TEAM 010. Facebook with Andela. &copy;{new Date().getFullYear()}</small>
      </footer>
    </div>
  );
}
