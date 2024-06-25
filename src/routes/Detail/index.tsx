import { component$, $, useSignal } from "@builder.io/qwik";
import Filter_panel from "../../components/Filter_panel/Filter_panel";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Detail.module.css";

export default component$(() => {
   const count = useSignal(0);
   const increment = $(() => count.value++);

   return (
      <>
         <button onClick$={() => alert("Button clicked!")}>Click me</button>
         <div class={styles.container}>
            <Header class={styles.header} />
            <Filter_panel class={styles.filter_panel} />
            <div class={styles.content}>
               <div class={styles.detail_container}>
                  <div class={styles.gallery}>
                     <div class={styles.gallery_container}>
                        <span class={styles.closebtn}>&times;</span>
                        {/*  <img id={styles.expandedImg} /> */}
                        <div id={styles.imgtext}></div>
                     </div>

                     {/* <ul class={styles.row}>
                        <li onClick$={increment} class={styles.column}>
                           <img src="/d1.png" alt="Nature" />
                        </li>
                        <li class={styles.column}>
                           <img src="/d2.png" alt="Snow" />
                        </li>
                        <li class={styles.column}>
                           <img src="/d3.png" alt="Mountains" />
                        </li>
                     </ul> */}
                     <button onClick$={increment}>Increment</button>
                     <p>Count: {count.value}</p>
                     <button onClick$={() => alert("Button clicked!")}>
                        Click me
                     </button>
                  </div>
                  <div class={styles.detail_info}></div>
               </div>
            </div>
            <Footer class={styles.footer} />
         </div>
      </>
   );
});
