import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Card from "../../components/Card/card";
import Filterpanel from "../../components/Filterpanel/filterpanel";
import Filter from "../../components/Filter/filter";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import styles from "./category.module.css";

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
     
         
         
         <main class={styles.content}>
            <Filterpanel class={styles.filter_panel} />
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
               <div class={styles.products__container}>
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
                  <a href="/category" class={styles.showMore_btn}>
                     Show more car
                  </a>
                  <span class={styles.car_count}>120 Car</span>
               </div>
            </section>
         </main>
         
      
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
