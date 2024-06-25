import { component$, useSignal, $ } from "@builder.io/qwik";
import Filterpanel from "../../components/Filterpanel/filterpanel";
import Headerr from "../../components/Headerr/header";
import Footerr from "../../components/Footerr/footer";
import styles from "./detail.module.css";

export default component$(() => {
   const count = useSignal(0);
   const increment = $(() => count.value++);

   return (
      <>
         <button onClick$={() => alert("Button clicked!")}>Click me</button>
         <div class={styles.container}>
            <Headerr class={styles.header} />
            <Filterpanel class={styles.filter_panel} />
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
            <Footerr class={styles.footer} />
         </div>
      </>
   );
});
