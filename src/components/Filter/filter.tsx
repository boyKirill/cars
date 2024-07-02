import { component$ } from "@builder.io/qwik";
import styles from "./filter.module.css";

interface props {
   classFilter1?: string;
   classFilter2?: string;
   classBtnRevers?: string;
}

export default component$<props>((props) => {
   return (
      <>
         <div class={styles.filter + " " + props.classFilter1}>
            <label>
               <input type="radio" />
               <span>Pick - Up</span>
            </label>
            <ul class={styles.filter_list}>
               <li>
                  <div class={styles.filter_title}>Locations</div>
                  <button class={styles.filter_subtitle}>
                     <span>Semarang</span>
                     <img src="/arrow-down.svg" alt="" />
                  </button>
               </li>
               <li>
                  <div class={styles.filter_title}>Date</div>
                  <button class={styles.filter_subtitle}>
                     <span>20 July 2022</span>
                     <img src="/arrow-down.svg" alt="" />
                  </button>
               </li>
               <li>
                  <div class={styles.filter_title}>Time</div>
                  <button class={styles.filter_subtitle}>
                     <span>07.00</span>
                     <img src="/arrow-down.svg" alt="" />
                  </button>
               </li>
            </ul>
         </div>
         <button
            class={styles.btn_revers + " " + props.classBtnRevers}
            aria-label="Change filters">
            <img src="/Swap.svg" alt="" />
         </button>
         <div class={styles.filter + " " + props.classFilter2}>
            <label>
               <input type="radio" />
               <span>Drop - Off</span>
            </label>
            <ul class={styles.filter_list}>
               <li>
                  <div class={styles.filter_title}>Locations</div>
                  <button class={styles.filter_subtitle}>
                     <span>Select your city</span>
                     <img src="/arrow-down.svg" alt="" />
                  </button>
               </li>
               <li>
                  <div class={styles.filter_title}>Date</div>
                  <button class={styles.filter_subtitle}>
                     <span>Select your date</span>
                     <img src="/arrow-down.svg" alt="" />
                  </button>
               </li>
               <li>
                  <div class={styles.filter_title}>Time</div>
                  <button class={styles.filter_subtitle}>
                     <span>Select your time</span>
                     <img src="/arrow-down.svg" alt="" />
                  </button>
               </li>
            </ul>
         </div>
      </>
   );
});
