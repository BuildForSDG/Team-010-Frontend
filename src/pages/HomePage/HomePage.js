import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import * as Mat from 'materialize-css/dist/js/materialize.min';
import './HomePage.css';
import headerImg from '../../images/happy-farmer.webp';
import womanFarmer from '../../images/woman-watering-garden.webp';

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
          <a href="#" className="brand-name ml-1 font-size-2 green-text text-darken-3 text-bolder">
            Farmhub
          </a>
          <button
            className="navmenu-toggle"
            onClick={(ev) => {
              toggleMobileNav(ev);
            }}
            aria-label="navigation menu icon"
            alt="nav menu icon"
          ></button>
        </ul>

        <ul className="flex-row align-center mr-1 desktop-nav">
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
            <button className="btn-flat primary waves-effect green-text text-darken-3 mr-1 font-size-1">Sign in</button>
            <button className="btn waves-effect white-text green darken-3 font-size-1">Sign up</button>
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
            <a href="" className="green-text text-darken-3 text-bold font-size-1">
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
      </nav>

      <header className="flex-row ">
        <section className="header_sect-left section valign-wrapper">
          <h1 className="white-text text-bold text-center px-4-lg">
            The online platform that connects farmers with buyers
          </h1>
        </section>
        <section className="header_sect-right mx-auto">
          <img className="img-responsive" src={headerImg} alt="happy farmer" />
        </section>
      </header>

      <main className="section">
        <section className="content-main-section align-center mx-1">
          <section className="top-section-left section mx-1 px-4-lg">
            <header className="text-bolder green-text darken-3 font-size-2">AS A FARMER</header>
            <ol>
              <li className="flow-text">Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
              <li className="flow-text">Lorem ipsum dolor sit amet consectetur elit</li>
              <li className="flow-text">Lorem dolor sit amet consectetur adipisicing elit</li>
            </ol>
            <button className="btn-flat btn-lg  primary waves-effect green-text darken-3 font-size-1">
              Get started as a farmer
            </button>
          </section>
          <section className="section mx-1 p-4-lg">
            <header className="text-bold green-text darken-3 font-size-2">AS A BUYER</header>
            <ol className="font-size-1">
              <li className="flow-text">Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
              <li className="flow-text">Lorem ipsum dolor sit amet consectetur elit</li>
              <li className="flow-text">Lorem dolor sit amet consectetur adipisicing elit</li>
            </ol>
            <button className="btn-flat btn-lg waves-effect primary green-text darken-3  font-size-1">
              Get started as a buyer
            </button>
          </section>
        </section>
        <section className="content-main-section section ">
          <section className="valign-wrapper">
            <img className="img-responsive" src={womanFarmer} alt="woman preparing cassava flour" />
          </section>
          <section className=" green darken-3 p-4-lg p-2 flex-col justify-center ">
            <header className="white-text font-size-2 text-bold ">Lorem Ipsum</header>
            <p className="white-text font-size-1pt1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate autem atque modi inventore aperiam eum
              placeat, sint accusamus corporis at fuga praesentium similique illo in non? Excepturi officiis distinctio
              voluptatibus.
            </p>
          </section>
        </section>
      </main>
      <footer className="green darken-3 p-4-lg p-1 flex-col justify-center align-center ">
        <header className="white-text darken-3 text-bold font-size-1 ">Footer Heading</header>
        <p className="white-text font-size-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quidem eius sapiente distinctio modi saepe
          libero.
        </p>
        <p className="white-text text-center">
          #BuildForSDG TEAM 010. Facebook with Andela. &copy;{new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
