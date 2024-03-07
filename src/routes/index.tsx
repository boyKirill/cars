import ImgLogo from "~/media/Logo.svg?jsx";
import ImgAvatar from "~/media/avatar.svg?jsx";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
   return (
      <div class="container">
         <header>
            <a href="" class="logo">
               <ImgLogo alt="" />
            </a>
            <from class="form">
               <div class="form-container">
                  <a class="loop" href="">
                     <img src="/search.svg" alt="" />
                  </a>
                  <label for="">
                     <input
                        class="search"
                        type="search"
                        placeholder="Search something here"
                     />
                  </label>
                  <a class="form-filter" href="">
                     <img src="/filter.svg" alt="" />
                  </a>
               </div>
            </from>
            <div class="profile">
               <div class="profile-items">
                  <a href="" class="favorites">
                     <img src="/heart.svg" alt="" />
                  </a>
                  <a href="" class="notifications">
                     <img src="/notification.svg" alt="" />
                  </a>
                  <a href="" class="settings">
                     <img src="/setting-2.svg" alt="" />
                  </a>
               </div>
               <a href="" class="avatar">
                  <ImgAvatar alt="" />
               </a>
            </div>
         </header>
         <div class="content">
            <section class="advertisement">
               <article>
                  <h2 class="title-card">The Best Platform for Car Rental</h2>
                  <div class="desc">
                     Ease of doing a car rental safely and reliably. Of course
                     at a low price.
                  </div>
                  <div class="gaper">
                     <a class="rental-link" href="">
                        Rental Car
                     </a>
                     <div class="image">
                        <img src="/car-a1.png" alt="" />
                     </div>
                  </div>
               </article>
               <article>
                  <h2 class="title-card">
                     Easy way to rent a car at a low price
                  </h2>
                  <div class="desc">
                     Providing cheap car rental services and safe and
                     comfortable facilities.
                  </div>
                  <div class="gaper">
                     <a class="rental-link" href="">
                        Rental Car
                     </a>
                     <div class="image">
                        <img src="/car-a2.png" alt="" />
                     </div>
                  </div>
               </article>
            </section>
            <section class="filters">
               <form action="" class="filter-container filter-form">
                  <div class="filter">
                     <label>
                        <input type="radio" />
                        <span>Pick - Up</span>
                     </label>
                     <ul class="filter-list">
                        <li>
                           <div class="filter-title">Locations</div>
                           <button class="filter-subtitle">
                              <span>Select your city</span>
                              <img src="/arrow-down.svg" alt="" />
                           </button>
                        </li>
                        <li>
                           <div class="filter-title">Date</div>
                           <button class="filter-subtitle">
                              <span>Select your date</span>
                              <img src="/arrow-down.svg" alt="" />
                           </button>
                        </li>
                        <li>
                           <div class="filter-title">Time</div>
                           <button class="filter-subtitle">
                              <span>Select your time</span>
                              <img src="/arrow-down.svg" alt="" />
                           </button>
                        </li>
                     </ul>
                  </div>
                  <button class="btn-revers">
                     <img src="/Swap.svg" alt="" />
                  </button>
                  <div class="filter">
                     <label>
                        <input type="radio" />
                        <span>Pick - Up</span>
                     </label>
                     <ul class="filter-list">
                        <li>
                           <div class="filter-title">Locations</div>
                           <button class="filter-subtitle">
                              <span>Select your city</span>
                              <img src="/arrow-down.svg" alt="" />
                           </button>
                        </li>
                        <li>
                           <div class="filter-title">Date</div>
                           <button class="filter-subtitle">
                              <span>Select your date</span>
                              <img src="/arrow-down.svg" alt="" />
                           </button>
                        </li>
                        <li>
                           <div class="filter-title">Time</div>
                           <button class="filter-subtitle">
                              <span>Select your time</span>
                              <img src="/arrow-down.svg" alt="" />
                           </button>
                        </li>
                     </ul>
                  </div>
               </form>
            </section>
            <section class="category">
               <h4 class="category-name">Popular Car</h4>
               <a href="" class="showAll">
                  View All
               </a>
            </section>
            <section class="products">
               <article class="product">
                  <div class="product__top">
                     <h2 class="product__name">Koenigsegg</h2>
                     <a href="" class="product__favourites">
                        <img src="/heart-red.svg" alt="" />
                     </a>
                     <h3 class="product__category">Sport</h3>
                  </div>
                  <div class="product__image">
                     <div>
                        <img src="/car-a1.png" alt="" />
                     </div>
                  </div>
                  <ul class="product__info">
                     <li>
                        <span class="info-icon">
                           <img src="/gas-station.svg" alt="" />
                        </span>
                        <span class="info-title">90L</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/Car-wheel.svg" alt="" />
                        </span>
                        <span class="info-title">Manual</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/profile-2user.svg" alt="" />
                        </span>
                        <span class="info-title">2 People</span>
                     </li>
                  </ul>
                  <div class="product__bottom">
                     <div class="product__price">
                        <span>
                           <b>$99.00/ </b>
                           <small>day</small>
                        </span>
                        <span class="old-price ">$100.00</span>
                     </div>
                     <a href="" class="product__rental">
                        Rent Now
                     </a>
                  </div>
               </article>
               <article class="product">
                  <div class="product__top">
                     <h2 class="product__name">Koenigsegg</h2>
                     <a href="" class="product__favourites">
                        <img src="/heart-red.svg" alt="" />
                     </a>
                     <h3 class="product__category">Sport</h3>
                  </div>
                  <div class="product__image">
                     <div>
                        <img src="/car-a2.png" alt="" />
                     </div>
                  </div>
                  <ul class="product__info">
                     <li>
                        <span class="info-icon">
                           <img src="/gas-station.svg" alt="" />
                        </span>
                        <span class="info-title">90L</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/Car-wheel.svg" alt="" />
                        </span>
                        <span class="info-title">Manual</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/profile-2user.svg" alt="" />
                        </span>
                        <span class="info-title">2 People</span>
                     </li>
                  </ul>
                  <div class="product__bottom">
                     <div class="product__price">
                        <span>
                           <b>$99.00/ </b>
                           <small>day</small>
                        </span>
                        <span class="old-price ">$100.00</span>
                     </div>
                     <a href="" class="product__rental">
                        Rent Now
                     </a>
                  </div>
               </article>
               <article class="product">
                  <div class="product__top">
                     <h2 class="product__name">Koenigsegg</h2>
                     <a href="" class="product__favourites">
                        <img src="/heart-red.svg" alt="" />
                     </a>
                     <h3 class="product__category">Sport</h3>
                  </div>
                  <div class="product__image">
                     <div>
                        <img src="/car3.png" alt="" />
                     </div>
                  </div>
                  <ul class="product__info">
                     <li>
                        <span class="info-icon">
                           <img src="/gas-station.svg" alt="" />
                        </span>
                        <span class="info-title">90L</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/Car-wheel.svg" alt="" />
                        </span>
                        <span class="info-title">Manual</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/profile-2user.svg" alt="" />
                        </span>
                        <span class="info-title">2 People</span>
                     </li>
                  </ul>
                  <div class="product__bottom">
                     <div class="product__price">
                        <span>
                           <b>$99.00/ </b>
                           <small>day</small>
                        </span>
                        <span class="old-price ">$100.00</span>
                     </div>
                     <a href="" class="product__rental">
                        Rent Now
                     </a>
                  </div>
               </article>
               <article class="product">
                  <div class="product__top">
                     <h2 class="product__name">Koenigsegg</h2>
                     <a href="" class="product__favourites">
                        <img src="/heart-red.svg" alt="" />
                     </a>
                     <h3 class="product__category">Sport</h3>
                  </div>
                  <div class="product__image">
                     <div>
                        <img src="/car-a2.png" alt="" />
                     </div>
                  </div>
                  <ul class="product__info">
                     <li>
                        <span class="info-icon">
                           <img src="/gas-station.svg" alt="" />
                        </span>
                        <span class="info-title">90L</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/Car-wheel.svg" alt="" />
                        </span>
                        <span class="info-title">Manual</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/profile-2user.svg" alt="" />
                        </span>
                        <span class="info-title">2 People</span>
                     </li>
                  </ul>
                  <div class="product__bottom">
                     <div class="product__price">
                        <span>
                           <b>$99.00/ </b>
                           <small>day</small>
                        </span>
                        <span class="old-price ">$100.00</span>
                     </div>
                     <a href="" class="product__rental">
                        Rent Now
                     </a>
                  </div>
               </article>
            </section>
            <section class="category">
               <h4 class="category-name">Recomendation Car</h4>
               <a href="" class="showAll invisible">
                  View All
               </a>
            </section>
            <section class="products">
               <article class="product">
                  <div class="product__top">
                     <h2 class="product__name">Koenigsegg</h2>
                     <a href="" class="product__favourites">
                        <img src="/heart-red.svg" alt="" />
                     </a>
                     <h3 class="product__category">Sport</h3>
                  </div>
                  <div class="product__image">
                     <div>
                        <img src="/car4.png" alt="" />
                     </div>
                  </div>
                  <ul class="product__info">
                     <li>
                        <span class="info-icon">
                           <img src="/gas-station.svg" alt="" />
                        </span>
                        <span class="info-title">90L</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/Car-wheel.svg" alt="" />
                        </span>
                        <span class="info-title">Manual</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/profile-2user.svg" alt="" />
                        </span>
                        <span class="info-title">2 People</span>
                     </li>
                  </ul>
                  <div class="product__bottom">
                     <div class="product__price">
                        <span>
                           <b>$99.00/ </b>
                           <small>day</small>
                        </span>
                        <span class="old-price ">$100.00</span>
                     </div>
                     <a href="" class="product__rental">
                        Rent Now
                     </a>
                  </div>
               </article>
               <article class="product">
                  <div class="product__top">
                     <h2 class="product__name">Koenigsegg</h2>
                     <a href="" class="product__favourites">
                        <img src="/heart-red.svg" alt="" />
                     </a>
                     <h3 class="product__category">Sport</h3>
                  </div>
                  <div class="product__image">
                     <div>
                        <img src="/car5.png" alt="" />
                     </div>
                  </div>
                  <ul class="product__info">
                     <li>
                        <span class="info-icon">
                           <img src="/gas-station.svg" alt="" />
                        </span>
                        <span class="info-title">90L</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/Car-wheel.svg" alt="" />
                        </span>
                        <span class="info-title">Manual</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/profile-2user.svg" alt="" />
                        </span>
                        <span class="info-title">2 People</span>
                     </li>
                  </ul>
                  <div class="product__bottom">
                     <div class="product__price">
                        <span>
                           <b>$99.00/ </b>
                           <small>day</small>
                        </span>
                        <span class="old-price ">$100.00</span>
                     </div>
                     <a href="" class="product__rental">
                        Rent Now
                     </a>
                  </div>
               </article>
               <article class="product">
                  <div class="product__top">
                     <h2 class="product__name">Koenigsegg</h2>
                     <a href="" class="product__favourites">
                        <img src="/heart-red.svg" alt="" />
                     </a>
                     <h3 class="product__category">Sport</h3>
                  </div>
                  <div class="product__image">
                     <div>
                        <img src="/car3.png" alt="" />
                     </div>
                  </div>
                  <ul class="product__info">
                     <li>
                        <span class="info-icon">
                           <img src="/gas-station.svg" alt="" />
                        </span>
                        <span class="info-title">90L</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/Car-wheel.svg" alt="" />
                        </span>
                        <span class="info-title">Manual</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/profile-2user.svg" alt="" />
                        </span>
                        <span class="info-title">2 People</span>
                     </li>
                  </ul>
                  <div class="product__bottom">
                     <div class="product__price">
                        <span>
                           <b>$99.00/ </b>
                           <small>day</small>
                        </span>
                        <span class="old-price ">$100.00</span>
                     </div>
                     <a href="" class="product__rental">
                        Rent Now
                     </a>
                  </div>
               </article>
               <article class="product">
                  <div class="product__top">
                     <h2 class="product__name">Koenigsegg</h2>
                     <a href="" class="product__favourites">
                        <img src="/heart-red.svg" alt="" />
                     </a>
                     <h3 class="product__category">Sport</h3>
                  </div>
                  <div class="product__image">
                     <div>
                        <img src="/car-a2.png" alt="" />
                     </div>
                  </div>
                  <ul class="product__info">
                     <li>
                        <span class="info-icon">
                           <img src="/gas-station.svg" alt="" />
                        </span>
                        <span class="info-title">90L</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/Car-wheel.svg" alt="" />
                        </span>
                        <span class="info-title">Manual</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/profile-2user.svg" alt="" />
                        </span>
                        <span class="info-title">2 People</span>
                     </li>
                  </ul>
                  <div class="product__bottom">
                     <div class="product__price">
                        <span>
                           <b>$99.00/ </b>
                           <small>day</small>
                        </span>
                        <span class="old-price ">$100.00</span>
                     </div>
                     <a href="" class="product__rental">
                        Rent Now
                     </a>
                  </div>
               </article>
               <article class="product">
                  <div class="product__top">
                     <h2 class="product__name">Koenigsegg</h2>
                     <a href="" class="product__favourites">
                        <img src="/heart-red.svg" alt="" />
                     </a>
                     <h3 class="product__category">Sport</h3>
                  </div>
                  <div class="product__image">
                     <div>
                        <img src="/car-a1.png" alt="" />
                     </div>
                  </div>
                  <ul class="product__info">
                     <li>
                        <span class="info-icon">
                           <img src="/gas-station.svg" alt="" />
                        </span>
                        <span class="info-title">90L</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/Car-wheel.svg" alt="" />
                        </span>
                        <span class="info-title">Manual</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/profile-2user.svg" alt="" />
                        </span>
                        <span class="info-title">2 People</span>
                     </li>
                  </ul>
                  <div class="product__bottom">
                     <div class="product__price">
                        <span>
                           <b>$99.00/ </b>
                           <small>day</small>
                        </span>
                        <span class="old-price ">$100.00</span>
                     </div>
                     <a href="" class="product__rental">
                        Rent Now
                     </a>
                  </div>
               </article>
               <article class="product">
                  <div class="product__top">
                     <h2 class="product__name">Koenigsegg</h2>
                     <a href="" class="product__favourites">
                        <img src="/heart-red.svg" alt="" />
                     </a>
                     <h3 class="product__category">Sport</h3>
                  </div>
                  <div class="product__image">
                     <div>
                        <img src="/car-a2.png" alt="" />
                     </div>
                  </div>
                  <ul class="product__info">
                     <li>
                        <span class="info-icon">
                           <img src="/gas-station.svg" alt="" />
                        </span>
                        <span class="info-title">90L</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/Car-wheel.svg" alt="" />
                        </span>
                        <span class="info-title">Manual</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/profile-2user.svg" alt="" />
                        </span>
                        <span class="info-title">2 People</span>
                     </li>
                  </ul>
                  <div class="product__bottom">
                     <div class="product__price">
                        <span>
                           <b>$99.00/ </b>
                           <small>day</small>
                        </span>
                        <span class="old-price ">$100.00</span>
                     </div>
                     <a href="" class="product__rental">
                        Rent Now
                     </a>
                  </div>
               </article>
               <article class="product">
                  <div class="product__top">
                     <h2 class="product__name">Koenigsegg</h2>
                     <a href="" class="product__favourites">
                        <img src="/heart-red.svg" alt="" />
                     </a>
                     <h3 class="product__category">Sport</h3>
                  </div>
                  <div class="product__image">
                     <div>
                        <img src="/car-a1.png" alt="" />
                     </div>
                  </div>
                  <ul class="product__info">
                     <li>
                        <span class="info-icon">
                           <img src="/gas-station.svg" alt="" />
                        </span>
                        <span class="info-title">90L</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/Car-wheel.svg" alt="" />
                        </span>
                        <span class="info-title">Manual</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/profile-2user.svg" alt="" />
                        </span>
                        <span class="info-title">2 People</span>
                     </li>
                  </ul>
                  <div class="product__bottom">
                     <div class="product__price">
                        <span>
                           <b>$99.00/ </b>
                           <small>day</small>
                        </span>
                        <span class="old-price ">$100.00</span>
                     </div>
                     <a href="" class="product__rental">
                        Rent Now
                     </a>
                  </div>
               </article>
               <article class="product">
                  <div class="product__top">
                     <h2 class="product__name">Koenigsegg</h2>
                     <a href="" class="product__favourites">
                        <img src="/heart-red.svg" alt="" />
                     </a>
                     <h3 class="product__category">Sport</h3>
                  </div>
                  <div class="product__image">
                     <div>
                        <img src="/car-a1.png" alt="" />
                     </div>
                  </div>
                  <ul class="product__info">
                     <li>
                        <span class="info-icon">
                           <img src="/gas-station.svg" alt="" />
                        </span>
                        <span class="info-title">90L</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/Car-wheel.svg" alt="" />
                        </span>
                        <span class="info-title">Manual</span>
                     </li>
                     <li>
                        <span class="info-icon">
                           <img src="/profile-2user.svg" alt="" />
                        </span>
                        <span class="info-title">2 People</span>
                     </li>
                  </ul>
                  <div class="product__bottom">
                     <div class="product__price">
                        <span>
                           <b>$99.00/ </b>
                           <small>day</small>
                        </span>
                        <span class="old-price ">$100.00</span>
                     </div>
                     <a href="" class="product__rental">
                        Rent Now
                     </a>
                  </div>
               </article>
            </section>
            <section class="showMore">
               <a href="" class="showMore-btn">
                  Show more car
               </a>
               <span class="car-count">120 Car</span>
            </section>
         </div>
         <footer>
            <section class="top">
               <div class="information">
                  <a href="" class="logo">
                     <ImgLogo alt="" />
                  </a>
                  <h3 class="text">
                     Our vision is to provide convenience and help increase your
                     sales business.
                  </h3>
               </div>
               <nav class="nav">
                  <section>
                     <h2 class="title">About</h2>
                     <a class="link" href="">
                        How it works
                     </a>
                     <a class="link" href="">
                        Featured
                     </a>
                     <a class="link" href="">
                        Partnership
                     </a>
                     <a class="link" href="">
                        Bussiness Relation
                     </a>
                  </section>
                  <section>
                     <h2 class="title">Community</h2>
                     <a class="link" href="">
                        Events
                     </a>
                     <a class="link" href="">
                        Blog
                     </a>
                     <a class="link" href="">
                        Podcast
                     </a>
                     <a class="link" href="">
                        Invite a friend
                     </a>
                  </section>
                  <section>
                     <h2 class="title">Socials</h2>
                     <a class="link" href="">
                        Discord
                     </a>
                     <a class="link" href="">
                        Instagram
                     </a>
                     <a class="link" href="">
                        Twitter
                     </a>
                     <a class="link" href="">
                        Facebook
                     </a>
                  </section>
               </nav>
            </section>
            <section class="bottom">
               <div class="copyright">©2022 MORENT. All rights reserved</div>
               <div class="policy">
                  <span>Privacy & Policy</span>
                  <span>Terms & Condition</span>
               </div>
            </section>
         </footer>
      </div>
   );
});

export const head: DocumentHead = {
   title: "Привет, мир",
   meta: [
      {
         name: "description",
         content: "Qwik site description",
      },
   ],
};
