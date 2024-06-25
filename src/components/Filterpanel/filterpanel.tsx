import { component$, useSignal } from "@builder.io/qwik";
import styles from "./filterpanel.module.css";

interface ItemProps {
   class?: string;
}

export default component$<ItemProps>((props) => {
   const outputInput = useSignal(50);
   /* const sum  = useSignal(0); */

   return (
      <>
         <form class={styles.filter_panel + " " + props.class}>
            <h2 class={styles.unvisible}>Фильтры</h2>
            <div class={styles.filter_category + " " + styles.type}>
               <h3 class={styles.category_title}>TYPE</h3>
               <ul class={styles.category_list}>
                  <li class={styles.category_item}>
                     <label>
                        <input type="checkbox" />
                        <span>Sport</span>
                     </label>
                  </li>
                  <li class={styles.category_item}>
                     <label>
                        <input type="checkbox" />
                        <span>SUV</span>
                     </label>
                  </li>
                  <li class={styles.category_item}>
                     <label>
                        <input type="checkbox" />
                        <span>MPV</span>
                     </label>
                  </li>
                  <li class={styles.category_item}>
                     <label>
                        <input type="checkbox" />
                        <span>Sedan</span>
                     </label>
                  </li>
                  <li class={styles.category_item}>
                     <label>
                        <input type="checkbox" />
                        <span>Coupe</span>
                     </label>
                  </li>
                  <li class={styles.category_item}>
                     <label>
                        <input type="checkbox" />
                        <span>Hatchback</span>
                     </label>
                  </li>
               </ul>
            </div>
            <div class={styles.filter_category + " " + styles.capacity}>
               <h3 class={styles.category_title}>CAPACITY</h3>
               <ul class={styles.category_list}>
                  <li class={styles.category_item}>
                     <label>
                        <input type="checkbox" />
                        <span>2 Person</span>
                     </label>
                  </li>
                  <li class={styles.category_item}>
                     <label>
                        <input type="checkbox" />
                        <span>4 Person</span>
                     </label>
                  </li>
                  <li class={styles.category_item}>
                     <label>
                        <input type="checkbox" />
                        <span>6 Person</span>
                     </label>
                  </li>
                  <li class={styles.category_item}>
                     <label>
                        <input type="checkbox" />
                        <span>8 or More</span>
                     </label>
                  </li>
               </ul>
            </div>
            <div class={styles.filter_category + " " + styles.range}>
               <h3 class={styles.category_title}>PRICE</h3>
               <div class={styles.range_box}>
                  <input
                     type="range"
                     min="0"
                     max="100"
                     onInput$={(event) =>
                        (outputInput.value = event.target.value)
                     }
                  />

                  <span>Max. ${outputInput}</span>
               </div>
            </div>
         </form>
      </>
   );
});
