import { component$, useSignal, $ } from "@builder.io/qwik";
import Filterpanel from "../../components/Filterpanel/filterpanel";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Tabs from "../../components/Tabs/tabs";
import styles from "./detail.module.css";
import { DocumentHead } from "@builder.io/qwik-city";
import Rating from "~/components/Rating/rating";
import Card from "~/components/Card/card";



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
         volume: 80,
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

   ];
   const dataReviews = [
      {
         userImage: "/avatar.svg",
         userName: "Alex Stanton",
         userPosition: "CEO at Bukalapak",
         userReview: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
         reviewsDate: "21 July 2022",
         userMark: 4,

      },
      {
         userImage: "/avatar.svg",
         userName: "Skylar Dias",
         userPosition: "CEO at Amazon",
         userReview: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
         reviewsDate: "20 July 2022",
         userMark: 3,

      },
   ]

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

                  <div class={styles.detail}>
                     <form class={styles.detail_top}>
                        <div>
                           <h2 class={styles.car_name}>Nissan GT - R</h2>
                           <div class={styles.reviewer_box}>
                              <Rating />
                              <span class={styles.reviewer}>440+ Reviewer</span>
                           </div>

                        </div>
                        <button
                           aria-label="Add to favourites"
                           class={styles.favourites}>
                        </button>

                     </form>
                     <p class={styles.detail_desc}>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                     <div class={styles.detail_characteristics}>
                        <div>
                           <dt class={styles.characteristic}>Type Car</dt>
                           <dd class={styles.characteristic_info}>Sport</dd>
                        </div>
                        <div>
                           <dt class={styles.characteristic}>Steering</dt>
                           <dd class={styles.characteristic_info}>Manual</dd>
                        </div>
                        <div>
                           <dt class={styles.characteristic}>Capacity</dt>
                           <dd class={styles.characteristic_info}>2 Person</dd>
                        </div>
                        <div>
                           <dt class={styles.characteristic}>Gasoline</dt>
                           <dd class={styles.characteristic_info}>70L</dd>
                        </div>
                     </div>
                     <div class={styles.detail_bottom}>
                        <div class={styles.product__price}>
                           <span>
                              <b>$80.00/ </b>
                              <small>day</small>
                           </span><s class={styles.old_price}>$100.00</s>

                        </div>
                        <a
                           href="/"
                           aria-label="Rent a car {props.name}"
                           class={styles.product__rental}>
                           Rent Now
                        </a>
                     </div>

                  </div>
               </div>

               <section class={styles.reviews}>
                  <h3>Reviews<span>13</span></h3>
                  <ul class={styles.reviews_list}>
                     {dataReviews.map((user) => (
                        <li class={styles.reviews_item}>
                           <div class={styles.review_avatar}><img src={user.userImage} alt="" /></div>
                           <div>
                              <div class={styles.review_header}>
                                 <div>
                                    <div class={styles.user_name}>{user.userName}</div>
                                    <div class={styles.position}>{user.userPosition}</div>
                                 </div>
                                 <div>
                                    <div class={styles.date}>{user.reviewsDate}</div>
                                    <Rating class={styles.reviews_marks} mark={user.userMark}/>
                                 </div>
                              </div>
                              <p class={styles.reviews_content}>{user.userReview}</p>
                           </div>
                        </li>
                     ))}
                  </ul>
               </section>
               <section class={[styles.products, styles.product1]}>
                  <div class={[styles.products_category, styles.popular_category]}>
                     <h2 class={styles.category_name}>Popular Car</h2>
                     <a href="/" class={styles.showAll}>
                        View All
                     </a>
                  </div>
                  <div class={[styles.products_container, styles.horizontal_media_scroller]}>
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
                  <div class={[styles.products_category, styles.popular_category]}>
                     <h2 class={styles.category_name}>Recomendation Car</h2>
                     <a href="/" class={styles.showAll}>
                        View All
                     </a>
                  </div>
                  <div class={[styles.products_container, styles.horizontal_media_scroller]}>
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
               </section>


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

