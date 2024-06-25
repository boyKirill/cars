import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Headerr from "../components/Headerr/header";
import Footerr from "../components/Footerr/footer";
import Filterr from "../components/Filterr/filter";
import Cardd from "../components/Cardd/card";

const dataPopularCar = [
   {
      name: "Koenigsegg",
      category: "Sport",
      volume: 90,
      numCapacity: 2,
      price: 99.0,
      oldPrice: undefined,
      imageSrc: "/car-a1.png",
   },
   {
      name: "Nissan GT - R",
      category: "Sport",
      volume: 80,
      numCapacity: 2,
      price: 80.0,
      oldPrice: 100.0,
      imageSrc: "/car-a2.png",
   },
   {
      name: "Rolls - Royce",
      category: "Sedan",
      volume: 70,
      numCapacity: 4,
      price: 96.0,
      oldPrice: 100.0,
      imageSrc: "/car-a3.png",
   },
   {
      name: "Nissan GT - R",
      category: "Sport",
      volume: 80,
      numCapacity: 2,
      price: 80.0,
      oldPrice: 100.0,
      imageSrc: "/car-a2.png",
   },
];
const dataRecomCar = [
   {
      name: "All New Rush",
      category: "SUV",
      volume: 70,
      numCapacity: 6,
      price: 72.0,
      oldPrice: 80,
      imageSrc: "/r1.png",
   },
   {
      name: "CR - V",
      category: "SUV",
      volume: 8,
      numCapacity: 6,
      price: 80.0,
      oldPrice: undefined,
      imageSrc: "/r2.png",
   },
   {
      name: "All New Terios",
      category: "SUV",
      volume: 90,
      numCapacity: 6,
      price: 74.0,
      oldPrice: undefined,
      imageSrc: "/r1.png",
   },
   {
      name: "CR - V",
      category: "SUV",
      volume: 8,
      numCapacity: 6,
      price: 80.0,
      oldPrice: undefined,
      imageSrc: "/r2.png",
   },
   {
      name: "MG ZX Exclusice",
      category: "Hatchback",
      volume: 70,
      numCapacity: 4,
      price: 76.0,
      oldPrice: 80.0,
      imageSrc: "/r3.png",
   },
   {
      name: "New MG ZS",
      category: "SUV",
      volume: 80,
      numCapacity: 6,
      price: 80.0,
      oldPrice: undefined,
      imageSrc: "/r4.png",
   },
   {
      name: "MG ZX Excite",
      category: "Hatchback",
      volume: 90,
      numCapacity: 4,
      price: 74.0,
      oldPrice: undefined,
      imageSrc: "/r3.png",
   },
   {
      name: "New MG ZS",
      category: "SUV",
      volume: 80,
      numCapacity: 6,
      price: 80.0,
      oldPrice: undefined,
      imageSrc: "/r4.png",
   },
];

export default component$(() => {
   return (
      <div class="container">
         <Headerr />
         <div class="content">
            <form class="banners">
               <div class="banner1">
                  <article>
                     <h2 class="title-card">
                        The Best Platform for Car Rental
                     </h2>
                     <div class="desc">
                        Ease of doing a car rental safely and reliably. Of
                        course at a low price.
                     </div>
                     <a class="rental-link" href="/" aria-label="{Car name}">
                        Rental Car
                     </a>
                     <div class="image">
                        <img
                           src="/car-a1.png"
                           alt="Some text describing the picture"
                        />
                     </div>
                  </article>
               </div>
               <div class="banner2">
                  <article>
                     <h2 class="title-card">
                        Easy way to rent a car at a low price
                     </h2>
                     <div class="desc">
                        Providing cheap car rental services and safe and
                        comfortable facilities.
                     </div>
                     <a class="rental-link" href="/" aria-label="{Car name}">
                        Rental Car
                     </a>
                     <div class="image">
                        <img
                           src="/car-a2.png"
                           alt="Some text describing the picture"
                        />
                     </div>
                  </article>
               </div>
               <Filterr
                  classFilter1="filter1"
                  classFilter2="filter2"
                  classBtnRevers="btn_revers"
               />
            </form>
            <section class="products product1">
               <div class="products__category popular-category">
                  <h2 class="category-name">Popular Car</h2>
                  <a href="/" class="showAll">
                     View All
                  </a>
               </div>
               <ul class="products__container horizontal-media-scroller">
                  {dataPopularCar.map((car) => (
                     <li>
                        <Cardd
                           key={car.name}
                           name={car.name}
                           category={car.category}
                           volume={car.volume}
                           numCapacity={car.numCapacity}
                           price={car.price}
                           oldPrice={car.oldPrice}
                           imageSrc={car.imageSrc}
                        />
                     </li>
                  ))}
               </ul>
            </section>

            <section class="products product2">
               <div class="products__category">
                  <h2 class="category-name">Recomendation Car</h2>
                  <a href="/" class="showAll invisible">
                     View All
                  </a>
               </div>
               <ul class="products__container recom">
                  {dataRecomCar.map((car) => (
                     <li>
                        <Cardd
                           key={car.name}
                           name={car.name}
                           category={car.category}
                           volume={car.volume}
                           numCapacity={car.numCapacity}
                           price={car.price}
                           oldPrice={car.oldPrice}
                           imageSrc={car.imageSrc}
                        />
                     </li>
                  ))}
               </ul>
               <div class="showMore">
                  <a href="/category" class="showMore-btn">
                     Show more car
                  </a>
                  <span class="car-count">120 Car</span>
               </div>
            </section>
         </div>
         <Footerr />
      </div>
   );
});

export const head: DocumentHead = {
   title: "Home",
   meta: [
      {
         name: "description",
         content: "Qwik site description",
      },
   ],
};
