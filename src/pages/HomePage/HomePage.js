import React from 'react';
import './HomePage.css';
import headerImgSm from '../../images/farmproduce-header-img-640.webp';
import headerImgLg from '../../images/farmproduce-header-img-1073.webp';

function scrollIntoView(id) {
  const yCoord = document.getElementById(id).getBoundingClientRect().y;
  window.scrollTo({
    top: yCoord,
    behavior: 'smooth'
  });
}

export default function HomePage() {
  return (
    <div>
      <nav className="flex-col">
        <ul className="flex-row flex-space-between ">
          <li className=" flex-row">
            <button className="navmenu-toggle" aria-label="navigation menu icon" alt="nav mmenu icon"></button>
          </li>
          <li className="flex-row navmenu-brandname_container">
            <a href="" className="flex-row flex-center navmenu-brandname">
              Farmhub
            </a>
          </li>
        </ul>
        <ul className="flex-col sitepages-links">
          <li className="flex-row flex-center">
            <a href="">Link One</a>
          </li>
          <li className="flex-row flex-center">
            <a href="">Link Two</a>
          </li>
          <li className="flex-row flex-center">
            <a href="">Market</a>
          </li>
          <li className="flex-row flex-center">
            <a href="">Contact</a>
          </li>
        </ul>
        <ul className="flex-col authpages-links">
          <li className="flex-row flex-center">
            <a className="btn-primary-outline" href="">
              Sign in
            </a>
          </li>
          <li className="flex-row flex-center">
            <a className="btn-primary" href="">
              Sign up
            </a>
          </li>
        </ul>
      </nav>
      <header>
        <section class="masthead" role="img" aria-label="Image Description">
          <h1>The No. 1 connect for farmers and buyers</h1>
        </section>
      </header>
      <main className="flex-col">
        <article id="article_farmers" className="flex-col self-align-center">
          <h3>For Farmers</h3>
          <section className="flex-col self-align-center">
            <img src="https://picsum.photos/seed/picsum/300.webp" alt="an image of happy farmers on the farm" />
            <section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eaque dolores tenetur dolorem esse quia
              explicabo!
            </section>
          </section>
        </article>
        <article id="article_buyers" className="flex-col self-align-center">
          <h3>For Buyers</h3>
          <section className="flex-col self-align-center">
            <img src="https://picsum.photos/seed/picsum/300.webp" alt="an image of happy buyers in the market" />
            <section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aspernatur culpa minus, repellat
              molestiae?
            </section>
          </section>
        </article>
      </main>
      <footer className="flex-col self-align-center">
        <h4>Footer Heading</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quidem eius sapiente distinctio modi saepe
          libero.
        </p>
        <small> #BuildForSDG TEAM 010. Facebook with Andela. &copy;{new Date().getFullYear()}</small>
      </footer>
    </div>
  );
}
