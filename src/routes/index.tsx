import ImgLogo from "~/media/Logo.svg?jsx";
import ImgAvatar from "~/media/avatar.svg?jsx";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
   return (
      <div class="container">
         <header>
            <h1 class="logo">
               <a href="/">
                  <ImgLogo alt="LOGO" />
               </a>
            </h1>

            <form class="form">
               <label>
                  <img class="loop" src="/search.svg" alt="" />
                  <input
                     aria-label="Search"
                     class="search"
                     type="search"
                     placeholder="Search something here"
                  />
                  <button class="form-filter">
                     <img src="/filter.svg" alt="" />
                  </button>
               </label>
            </form>
            <div class="profile">
               <ul class="profile-items">
                  <li>
                     <a href="/" aria-label="favorites" class="favorites">
                        <img src="/heart.svg" alt="" />
                     </a>
                  </li>
                  <li>
                     <a
                        href="/"
                        aria-label="notifications"
                        class="notifications">
                        <img src="/notification.svg" alt="" />
                     </a>
                  </li>
                  <li>
                     <a href="/" aria-label="settings" class="settings">
                        <img src="/setting-2.svg" alt="" />
                     </a>
                  </li>
                  <li>
                     <a href="/" aria-label="profile" class="avatar">
                        <ImgAvatar alt="" />
                     </a>
                  </li>
               </ul>
            </div>
         </header>
         <div class="content">
            <form class="banners">
               <article>
                  <h2 class="title-card">The Best Platform for Car Rental</h2>
                  <div class="desc">
                     Ease of doing a car rental safely and reliably. Of course
                     at a low price.
                  </div>
                  <a class="rental-link" href="/">
                     Rental Car
                  </a>
                  <div class="image">
                     <img
                        src="/car-a1.png"
                        alt="Some text describing the picture"
                     />
                  </div>
               </article>
               <article>
                  <h2 class="title-card">The Best Platform for Car Rental</h2>
                  <div class="desc">
                     Ease of doing a car rental safely and reliably. Of course
                     at a low price.
                  </div>
                  <a class="rental-link" href="/">
                     Rental Car
                  </a>
                  <div class="image">
                     <img
                        src="/car-a2.png"
                        alt="Some text describing the picture"
                     />
                  </div>
               </article>
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
               <button class="btn-revers" aria-label="Change filters">
                  <img src="/Swap.svg" alt="" />
               </button>
               <div class="filter">
                  <label>
                     <input type="radio" />
                     <span>Drop - Off</span>
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
            <section class="products">
               <div class="products__category">
                  <h3 class="category-name">Popular Car</h3>
                  <a href="/" class="showAll">
                     View All
                  </a>
               </div>
               <div class="products__container">
                  <article class="product">
                     <form class="product__top">
                        <h3 class="product__name">Koenigsegg</h3>
                        <button
                           aria-label="Add to favorites"
                           class="product__favourites"></button>
                        <span class="product__category">Sport</span>
                     </form>
                     <div class="product__image">
                        <div>
                           <img
                              src="/car-a1.png"
                              alt="Some text describing the picture"
                           />
                        </div>
                     </div>
                     <dl class="product__info">
                        <div>
                           <dt class="info-icon">
                              <img src="/gas-station.svg" aria-label="Volume" />
                           </dt>
                           <dd class="info-title">
                              90<abbr title="liter">L</abbr>
                           </dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/Car-wheel.svg"
                                 aria-label="The type of control is "
                              />
                           </dt>
                           <dd class="info-title">Manual</dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/profile-2user.svg"
                                 aria-label="Capacity for"
                              />
                           </dt>
                           <dd class="info-title">2 People</dd>
                        </div>
                     </dl>
                     <div class="product__bottom">
                        <div class="product__price">
                           <span>
                              <b>$99.00/ </b>
                              <small>day</small>
                           </span>
                           <s class="old-price ">$100.00</s>
                        </div>
                        <a
                           href="/"
                           aria-label="Rent a car {Car name}"
                           class="product__rental">
                           Rent Now
                        </a>
                     </div>
                  </article>
                  <article class="product">
                     <form class="product__top">
                        <h3 class="product__name">Koenigsegg</h3>
                        <button
                           aria-label="Add to favorites"
                           class="product__favourites like"></button>
                        <span class="product__category">Sport</span>
                     </form>
                     <div class="product__image">
                        <div>
                           <img
                              src="/car-a1.png"
                              alt="Some text describing the picture"
                           />
                        </div>
                     </div>
                     <dl class="product__info">
                        <div>
                           <dt class="info-icon">
                              <img src="/gas-station.svg" aria-label="Volume" />
                           </dt>
                           <dd class="info-title">
                              90<abbr title="liter">L</abbr>
                           </dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/Car-wheel.svg"
                                 aria-label="The type of control is "
                              />
                           </dt>
                           <dd class="info-title">Manual</dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/profile-2user.svg"
                                 aria-label="Capacity for"
                              />
                           </dt>
                           <dd class="info-title">2 People</dd>
                        </div>
                     </dl>
                     <div class="product__bottom">
                        <div class="product__price">
                           <span>
                              <b>$99.00/ </b>
                              <small>day</small>
                           </span>
                           <s class="old-price ">$100.00</s>
                        </div>
                        <a
                           href="/"
                           aria-label="Rent a car {Car name}"
                           class="product__rental">
                           Rent Now
                        </a>
                     </div>
                  </article>
                  <article class="product">
                     <form class="product__top">
                        <h3 class="product__name">Koenigsegg</h3>
                        <button
                           aria-label="Add to favorites"
                           class="product__favourites"></button>
                        <span class="product__category">Sport</span>
                     </form>
                     <div class="product__image">
                        <div>
                           <img
                              src="/car-a1.png"
                              alt="Some text describing the picture"
                           />
                        </div>
                     </div>
                     <dl class="product__info">
                        <div>
                           <dt class="info-icon">
                              <img src="/gas-station.svg" aria-label="Volume" />
                           </dt>
                           <dd class="info-title">
                              90<abbr title="liter">L</abbr>
                           </dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/Car-wheel.svg"
                                 aria-label="The type of control is "
                              />
                           </dt>
                           <dd class="info-title">Manual</dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/profile-2user.svg"
                                 aria-label="Capacity for"
                              />
                           </dt>
                           <dd class="info-title">2 People</dd>
                        </div>
                     </dl>
                     <div class="product__bottom">
                        <div class="product__price">
                           <span>
                              <b>$99.00/ </b>
                              <small>day</small>
                           </span>
                           <s class="old-price ">$100.00</s>
                        </div>
                        <a
                           href="/"
                           aria-label="Rent a car {Car name}"
                           class="product__rental">
                           Rent Now
                        </a>
                     </div>
                  </article>
                  <article class="product">
                     <form class="product__top">
                        <h3 class="product__name">Koenigsegg</h3>
                        <button
                           aria-label="Add to favorites"
                           class="product__favourites"></button>
                        <span class="product__category">Sport</span>
                     </form>
                     <div class="product__image">
                        <div>
                           <img
                              src="/car-a1.png"
                              alt="Some text describing the picture"
                           />
                        </div>
                     </div>
                     <dl class="product__info">
                        <div>
                           <dt class="info-icon">
                              <img src="/gas-station.svg" aria-label="Volume" />
                           </dt>
                           <dd class="info-title">
                              90<abbr title="liter">L</abbr>
                           </dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/Car-wheel.svg"
                                 aria-label="The type of control is "
                              />
                           </dt>
                           <dd class="info-title">Manual</dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/profile-2user.svg"
                                 aria-label="Capacity for"
                              />
                           </dt>
                           <dd class="info-title">2 People</dd>
                        </div>
                     </dl>
                     <div class="product__bottom">
                        <div class="product__price">
                           <span>
                              <b>$99.00/ </b>
                              <small>day</small>
                           </span>
                           <s class="old-price ">$100.00</s>
                        </div>
                        <a
                           href="/"
                           aria-label="Rent a car {Car name}"
                           class="product__rental">
                           Rent Now
                        </a>
                     </div>
                  </article>
               </div>
            </section>

            <section class="products">
               <div class="products__category">
                  <h3 class="category-name">Recomendation Car</h3>
                  <a href="/" class="showAll invisible">
                     View All
                  </a>
               </div>
               <div class="products__container">
                  <article class="product">
                     <form class="product__top">
                        <h3 class="product__name">Koenigsegg</h3>
                        <button
                           aria-label="Add to favorites"
                           class="product__favourites like"></button>
                        <span class="product__category">Sport</span>
                     </form>
                     <div class="product__image">
                        <div>
                           <img
                              src="/car-a1.png"
                              alt="Some text describing the picture"
                           />
                        </div>
                     </div>
                     <dl class="product__info">
                        <div>
                           <dt class="info-icon">
                              <img src="/gas-station.svg" aria-label="Volume" />
                           </dt>
                           <dd class="info-title">
                              90<abbr title="liter">L</abbr>
                           </dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/Car-wheel.svg"
                                 aria-label="The type of control is "
                              />
                           </dt>
                           <dd class="info-title">Manual</dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/profile-2user.svg"
                                 aria-label="Capacity for"
                              />
                           </dt>
                           <dd class="info-title">2 People</dd>
                        </div>
                     </dl>
                     <div class="product__bottom">
                        <div class="product__price">
                           <span>
                              <b>$99.00/ </b>
                              <small>day</small>
                           </span>
                           <s class="old-price ">$100.00</s>
                        </div>
                        <a
                           href="/"
                           aria-label="Rent a car {Car name}"
                           class="product__rental">
                           Rent Now
                        </a>
                     </div>
                  </article>
                  <article class="product">
                     <form class="product__top">
                        <h3 class="product__name">Koenigsegg</h3>
                        <button
                           aria-label="Add to favorites"
                           class="product__favourites"></button>
                        <span class="product__category">Sport</span>
                     </form>
                     <div class="product__image">
                        <div>
                           <img
                              src="/car-a1.png"
                              alt="Some text describing the picture"
                           />
                        </div>
                     </div>
                     <dl class="product__info">
                        <div>
                           <dt class="info-icon">
                              <img src="/gas-station.svg" aria-label="Volume" />
                           </dt>
                           <dd class="info-title">
                              90<abbr title="liter">L</abbr>
                           </dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/Car-wheel.svg"
                                 aria-label="The type of control is "
                              />
                           </dt>
                           <dd class="info-title">Manual</dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/profile-2user.svg"
                                 aria-label="Capacity for"
                              />
                           </dt>
                           <dd class="info-title">2 People</dd>
                        </div>
                     </dl>
                     <div class="product__bottom">
                        <div class="product__price">
                           <span>
                              <b>$99.00/ </b>
                              <small>day</small>
                           </span>
                           <s class="old-price ">$100.00</s>
                        </div>
                        <a
                           href="/"
                           aria-label="Rent a car {Car name}"
                           class="product__rental">
                           Rent Now
                        </a>
                     </div>
                  </article>
                  <article class="product">
                     <form class="product__top">
                        <h3 class="product__name">Koenigsegg</h3>
                        <button
                           aria-label="Add to favorites"
                           class="product__favourites"></button>
                        <span class="product__category">Sport</span>
                     </form>
                     <div class="product__image">
                        <div>
                           <img
                              src="/car-a1.png"
                              alt="Some text describing the picture"
                           />
                        </div>
                     </div>
                     <dl class="product__info">
                        <div>
                           <dt class="info-icon">
                              <img src="/gas-station.svg" aria-label="Volume" />
                           </dt>
                           <dd class="info-title">
                              90<abbr title="liter">L</abbr>
                           </dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/Car-wheel.svg"
                                 aria-label="The type of control is "
                              />
                           </dt>
                           <dd class="info-title">Manual</dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/profile-2user.svg"
                                 aria-label="Capacity for"
                              />
                           </dt>
                           <dd class="info-title">2 People</dd>
                        </div>
                     </dl>
                     <div class="product__bottom">
                        <div class="product__price">
                           <span>
                              <b>$99.00/ </b>
                              <small>day</small>
                           </span>
                           <s class="old-price ">$100.00</s>
                        </div>
                        <a
                           href="/"
                           aria-label="Rent a car {Car name}"
                           class="product__rental">
                           Rent Now
                        </a>
                     </div>
                  </article>
                  <article class="product">
                     <form class="product__top">
                        <h3 class="product__name">Koenigsegg</h3>
                        <button
                           aria-label="Add to favorites"
                           class="product__favourites like"></button>
                        <span class="product__category">Sport</span>
                     </form>
                     <div class="product__image">
                        <div>
                           <img
                              src="/car-a1.png"
                              alt="Some text describing the picture"
                           />
                        </div>
                     </div>
                     <dl class="product__info">
                        <div>
                           <dt class="info-icon">
                              <img src="/gas-station.svg" aria-label="Volume" />
                           </dt>
                           <dd class="info-title">
                              90<abbr title="liter">L</abbr>
                           </dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/Car-wheel.svg"
                                 aria-label="The type of control is "
                              />
                           </dt>
                           <dd class="info-title">Manual</dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/profile-2user.svg"
                                 aria-label="Capacity for"
                              />
                           </dt>
                           <dd class="info-title">2 People</dd>
                        </div>
                     </dl>
                     <div class="product__bottom">
                        <div class="product__price">
                           <span>
                              <b>$99.00/ </b>
                              <small>day</small>
                           </span>
                           <s class="old-price ">$100.00</s>
                        </div>
                        <a
                           href="/"
                           aria-label="Rent a car {Car name}"
                           class="product__rental">
                           Rent Now
                        </a>
                     </div>
                  </article>
                  <article class="product">
                     <form class="product__top">
                        <h3 class="product__name">Koenigsegg</h3>
                        <button
                           aria-label="Add to favorites"
                           class="product__favourites"></button>
                        <span class="product__category">Sport</span>
                     </form>
                     <div class="product__image">
                        <div>
                           <img
                              src="/car-a1.png"
                              alt="Some text describing the picture"
                           />
                        </div>
                     </div>
                     <dl class="product__info">
                        <div>
                           <dt class="info-icon">
                              <img src="/gas-station.svg" aria-label="Volume" />
                           </dt>
                           <dd class="info-title">
                              90<abbr title="liter">L</abbr>
                           </dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/Car-wheel.svg"
                                 aria-label="The type of control is "
                              />
                           </dt>
                           <dd class="info-title">Manual</dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/profile-2user.svg"
                                 aria-label="Capacity for"
                              />
                           </dt>
                           <dd class="info-title">2 People</dd>
                        </div>
                     </dl>
                     <div class="product__bottom">
                        <div class="product__price">
                           <span>
                              <b>$99.00/ </b>
                              <small>day</small>
                           </span>
                           <s class="old-price ">$100.00</s>
                        </div>
                        <a
                           href="/"
                           aria-label="Rent a car {Car name}"
                           class="product__rental">
                           Rent Now
                        </a>
                     </div>
                  </article>
                  <article class="product">
                     <form class="product__top">
                        <h3 class="product__name">Koenigsegg</h3>
                        <button
                           aria-label="Add to favorites"
                           class="product__favourites like"></button>
                        <span class="product__category">Sport</span>
                     </form>
                     <div class="product__image">
                        <div>
                           <img
                              src="/car-a1.png"
                              alt="Some text describing the picture"
                           />
                        </div>
                     </div>
                     <dl class="product__info">
                        <div>
                           <dt class="info-icon">
                              <img src="/gas-station.svg" aria-label="Volume" />
                           </dt>
                           <dd class="info-title">
                              90<abbr title="liter">L</abbr>
                           </dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/Car-wheel.svg"
                                 aria-label="The type of control is "
                              />
                           </dt>
                           <dd class="info-title">Manual</dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/profile-2user.svg"
                                 aria-label="Capacity for"
                              />
                           </dt>
                           <dd class="info-title">2 People</dd>
                        </div>
                     </dl>
                     <div class="product__bottom">
                        <div class="product__price">
                           <span>
                              <b>$99.00/ </b>
                              <small>day</small>
                           </span>
                           <s class="old-price ">$100.00</s>
                        </div>
                        <a
                           href="/"
                           aria-label="Rent a car {Car name}"
                           class="product__rental">
                           Rent Now
                        </a>
                     </div>
                  </article>
                  <article class="product">
                     <form class="product__top">
                        <h3 class="product__name">Koenigsegg</h3>
                        <button
                           aria-label="Add to favorites"
                           class="product__favourites"></button>
                        <span class="product__category">Sport</span>
                     </form>
                     <div class="product__image">
                        <div>
                           <img
                              src="/car-a1.png"
                              alt="Some text describing the picture"
                           />
                        </div>
                     </div>
                     <dl class="product__info">
                        <div>
                           <dt class="info-icon">
                              <img src="/gas-station.svg" aria-label="Volume" />
                           </dt>
                           <dd class="info-title">
                              90<abbr title="liter">L</abbr>
                           </dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/Car-wheel.svg"
                                 aria-label="The type of control is "
                              />
                           </dt>
                           <dd class="info-title">Manual</dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/profile-2user.svg"
                                 aria-label="Capacity for"
                              />
                           </dt>
                           <dd class="info-title">2 People</dd>
                        </div>
                     </dl>
                     <div class="product__bottom">
                        <div class="product__price">
                           <span>
                              <b>$99.00/ </b>
                              <small>day</small>
                           </span>
                           <s class="old-price ">$100.00</s>
                        </div>
                        <a
                           href="/"
                           aria-label="Rent a car {Car name}"
                           class="product__rental">
                           Rent Now
                        </a>
                     </div>
                  </article>
                  <article class="product">
                     <form class="product__top">
                        <h3 class="product__name">Koenigsegg</h3>
                        <button
                           aria-label="Add to favorites"
                           class="product__favourites like"></button>
                        <span class="product__category">Sport</span>
                     </form>
                     <div class="product__image">
                        <div>
                           <img
                              src="/car-a1.png"
                              alt="Some text describing the picture"
                           />
                        </div>
                     </div>
                     <dl class="product__info">
                        <div>
                           <dt class="info-icon">
                              <img src="/gas-station.svg" aria-label="Volume" />
                           </dt>
                           <dd class="info-title">
                              90<abbr title="liter">L</abbr>
                           </dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/Car-wheel.svg"
                                 aria-label="The type of control is "
                              />
                           </dt>
                           <dd class="info-title">Manual</dd>
                        </div>
                        <div>
                           <dt class="info-icon">
                              <img
                                 src="/profile-2user.svg"
                                 aria-label="Capacity for"
                              />
                           </dt>
                           <dd class="info-title">2 People</dd>
                        </div>
                     </dl>
                     <div class="product__bottom">
                        <div class="product__price">
                           <span>
                              <b>$99.00/ </b>
                              <small>day</small>
                           </span>
                           <s class="old-price ">$100.00</s>
                        </div>
                        <a
                           href="/"
                           aria-label="Rent a car {Car name}"
                           class="product__rental">
                           Rent Now
                        </a>
                     </div>
                  </article>
               </div>
               <div class="showMore">
                  <a href="/" class="showMore-btn">
                     Show more car
                  </a>
                  <span class="car-count">120 Car</span>
               </div>
            </section>
         </div>
         <footer>
            <section class="top">
               <div class="information">
                  <h2>
                     <a href="/" class="logo">
                        <ImgLogo alt="LOGO" />
                     </a>
                  </h2>
                  <p class="text">
                     Our vision is to provide convenience and help increase your
                     sales business.
                  </p>
               </div>
               <menu class="nav">
                  <li>
                     <h2 class="title">About</h2>
                     <ul class="nav-sublist">
                        <li>
                           <a class="link" href="/">
                              How it works
                           </a>
                        </li>
                        <li>
                           <a class="link" href="/">
                              Featured
                           </a>
                        </li>
                        <li>
                           <a class="link" href="/">
                              Partnership
                           </a>
                        </li>
                        <li>
                           <a class="link" href="/">
                              Bussiness Relation
                           </a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <h2 class="title">Community</h2>
                     <ul>
                        <li>
                           <a class="link" href="/">
                              Events
                           </a>
                        </li>
                        <li>
                           <a class="link" href="/">
                              Blog
                           </a>
                        </li>
                        <li>
                           <a class="link" href="/">
                              Podcast
                           </a>
                        </li>
                        <li>
                           <a class="link" href="/">
                              Invite a friend
                           </a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <h2 class="title">Socials</h2>
                     <ul>
                        <li>
                           <a class="link" href="/">
                              Discord
                           </a>
                        </li>
                        <li>
                           <a class="link" href="/">
                              Instagram
                           </a>
                        </li>
                        <li>
                           <a class="link" href="/">
                              Twitter
                           </a>
                        </li>
                        <li>
                           <a class="link" href="/">
                              Facebook
                           </a>
                        </li>
                     </ul>
                  </li>
               </menu>
            </section>
            <section class="bottom">
               <div class="copyright">© 2022 MORENT. All rights reserved</div>
               <div class="policy">
                  <a href="/">Privacy & Policy</a>
                  <a href="/">Terms & Condition</a>
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
