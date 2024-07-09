import { component$ } from "@builder.io/qwik";
import styles from "./card.module.css";

interface ItemProps {
   name: string;
   category: string;
   imageSrc?: string;
   volume: number;
   numCapacity: number;
   price: number;
   oldPrice?: number;
}

export default component$<ItemProps>((props) => {
   return (
      <article class={styles.product}>
         <form class={styles.product__top}>
            <h3 class={styles.product__name}>{props.name}</h3>
            <button
               aria-label="Add to favorites"
               class={styles.product__favourites}></button>
            <span class={styles.product__category}>{props.category}</span>
         </form>
         <div class={styles.product__image}>
            <div>
               <img
                  src={props.imageSrc}
                  alt="Some text describing the picture"
               />
            </div>
         </div>
         <dl class={styles.product__info}>
            <div>
               <dt class={styles.info__icon}>
                  <img src="/gas-station.svg" aria-label="Volume" />
               </dt>
               <dd class={styles.info__title}>
                  {props.volume}
                  <abbr title="liter">L</abbr>
               </dd>
            </div>
            <div>
               <dt class={styles.info__icon}>
                  <img
                     src="/Car-wheel.svg"
                     aria-label="The type of control is "
                  />
               </dt>
               <dd class={styles.info__title}>Manual</dd>
            </div>
            <div>
               <dt>
                  <img src="/profile-2user.svg" aria-label="Capacity for" />
               </dt>
               <dd class={styles.info__title}>{props.numCapacity} People</dd>
            </div>
         </dl>
         <div class={styles.product__bottom}>
            <div class={styles.product__price}>
               <span>
                  <b>${props.price.toFixed(2)}/ </b>
                  <small>day</small>
               </span>
               {props.oldPrice ? (
                  <s class={styles.old_price}>${props.oldPrice.toFixed(2)}</s>
               ) : null}
            </div>
            <a
               href="/"
               aria-label={"Rent a car" + props.name}
               class={styles.product__rental}>
               Rent Now
            </a>
         </div>
      </article>
   );
});
