import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

import styles from "./Category.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Filter from "../../components/Filter/Filter";
import { Card } from "../../components/Card/Card";
import Filter_panel from "../../components/Filter_panel/Filter_panel";

const dataRecomCar = [
   {
      name: "All New Rush",
      category: "SUV",
      volume: 70,
      numCapacity: 6,
      price: 72.0,
      oldPrice: 80,
      imageSrc: "/car-a1.png",
   },
   {
      name: "All New Rush",
      category: "SUV",
      volume: 70,
      numCapacity: 6,
      price: 72.0,
      oldPrice: 80,
      imageSrc: "/car-a2.png",
   },
   {
      name: "CR - V",
      category: "SUV",
      volume: 8,
      numCapacity: 6,
      price: 80.0,
      oldPrice: undefined,
      imageSrc: "/car-a3.png",
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
      <div class={styles.container}>
         <Header class={styles.header} />
         <Filter_panel class={styles.filter_panel} />
         <div class={styles.content}>
            <form class={styles.filter_box}>
               <Filter
                  classFilter1={styles.filter1}
                  classFilter2={styles.filter2}
                  classBtnRevers={styles.btn_revers}
               />
            </form>
            <section class={styles.products}>
               <h2 class={styles.category_name + " " + styles.unvisible}>
                  Selected cars
               </h2>
               <ul class={styles.products__container}>
                  {dataRecomCar.map((car) => (
                     <li>
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
                     </li>
                  ))}
               </ul>
               <div class={styles.showMore}>
                  <Link href="/category" class={styles.showMore_btn}>
                     Show more car
                  </Link>
                  <span class={styles.car_count}>120 Car</span>
               </div>
            </section>
         </div>
         <Footer class={styles.footer} />
      </div>
   );
});

export const head: DocumentHead = {
   title: "Category",
   meta: [
      {
         name: "description",
         content: "Qwik site description",
      },
   ],
};
