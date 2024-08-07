import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import Filter from "../components/Filter/filter";
import Card from "../components/Card/card";
import styles from "./index.module.css"

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
      <main class={styles.content}>
         <form class={styles.banners}>
            <div class={styles.banner1}>
               <article>
                  <h2 class={styles.title_card}>
                     The Best Platform for Car Rental
                  </h2>
                  <div class={styles.desc}>
                     Ease of doing a car rental safely and reliably. Of
                     course at a low price.
                  </div>
                  <Link class={styles.rental_link} href="/Detail" aria-label="{Car name}">Show Details</Link>
                  <div class={styles.image}>
                     <img
                        src="/car-a1.png"
                        alt="Some text describing the picture"
                     />
                  </div>
               </article>
            </div>
            <div class={styles.banner2}>
               <article>
                  <h2 class={styles.title_card}>
                     Easy way to rent a car at a low price
                  </h2>
                  <div class={styles.desc}>
                     Providing cheap car rental services and safe and
                     comfortable facilities.
                  </div>
                  <Link class={styles.rental_link} href="/Detail" aria-label="{Car name}">Show Details</Link>
                  <div class={styles.image}>
                     <img
                        src="/car-a2.png"
                        alt="Some text describing the picture"
                     />
                  </div>
               </article>
            </div>
            <Filter
               classFilter1={styles.filter1}
               classFilter2={styles.filter2}
               classBtnRevers={styles.btn_revers}
            />
         </form>
         <section class={[styles.products, styles.product1]}>
            <div class={[styles.products__category, styles.popular_category]}>
               <h2 class={styles.category_name}>Popular Car</h2>
               <a href="/" class={styles.showAll}>
                  View All
               </a>
            </div>
            <div class={[styles.products__container, styles.horizontal_media_scroller]}>
               {dataPopularCar.map((car) => (
                  <Card
                     key={car.name}
                     name={car.name}
                     category={car.category}
                     volume={car.volume}
                     numCapacity={car.numCapacity}
                     price={car.price}
                     oldPrice={car.oldPrice}
                     imageSrc={car.imageSrc}
                  />
               ))}
            </div>
         </section>
         <section class={[styles.products, styles.product2]}>
            <div class={styles.products__category}>
               <h2 class={styles.category_name}>Recomendation Car</h2>
               <a href="/" class={[styles.showAll, styles.invisible]}>
                  View All
               </a>
            </div>
            <div class={[styles.products__container, styles.recom]}>
               {dataRecomCar.map((car) => (

                  <Card
                     key={car.name}
                     name={car.name}
                     category={car.category}
                     volume={car.volume}
                     numCapacity={car.numCapacity}
                     price={car.price}
                     oldPrice={car.oldPrice}
                     imageSrc={car.imageSrc}
                  />

               ))}
            </div>
            <div class={styles.showMore}>
               <Link class={styles.showMore_btn} href="/Category" >Show more car</Link>
               <span class={styles.car_count}>120 Car</span>
            </div>
         </section>
      </main>
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
