import { component$, useSignal, $ } from "@builder.io/qwik";
import Filterpanel from "../../components/Filterpanel/filterpanel";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Tabs from "../../components/Tabs/tabs";
import styles from "./detail.module.css";
import { DocumentHead } from "@builder.io/qwik-city";



export default component$(() => {
   const dataPopularCar = [
      {
         name: "Koenigsegg",
         category: "Sport",
         volume: 90,
         numCapacity: 2,
         price: 99.0,
         oldPrice: undefined,
         imageSrc: "/car-a1.png",
         tabImages: [
            "/d1.png",
            "/d2.png",
            "/d3.png",
         ]
      }];

   return (
      <>
         <div class={styles.container}>
            <Header class={styles.header} />
            <Filterpanel class={styles.filter_panel} />
            <div class={styles.content}>
               <div class={styles.detail_container}>
                  <div class={styles.gallery}>
                     <Tabs imagesSrc={dataPopularCar[0].tabImages} />
                  </div>
                  .
                  <div class={styles.detail_info}></div>
               </div>
            </div>
            <Footer class={styles.footer} />
         </div>
      </>
   );
});

export const head: DocumentHead = {
   title: "Details",
   meta: [
      {
         name: "description",
         content: "Qwik site description",
      },
   ],
};

