import { component$ } from "@builder.io/qwik";
import ImgLogo from '~/media/Logo.svg?jsx';
import styles from "./footer.module.css";
import { Link } from "@builder.io/qwik-city";

interface ItemProps {
   class?: string;
}

export default component$<ItemProps>((props) => {
   return (
      <footer class={props.class}>
         <div class={styles.top}>
            <div class={styles.information}>
               <h2>
                  <Link class={styles.rental_link} href="/" aria-label="Logo"><ImgLogo /></Link>
               </h2>
               <p class={styles.text}>
                  Our vision is to provide convenience and help increase your
                  sales business.
               </p>
            </div>
            <menu class={styles.nav}>
               <li>
                  <h2 class={styles.title}>About</h2>
                  <ul class={styles.nav_sublist}>
                     <li>
                        <a class={styles.link} href="/">
                           How it works
                        </a>
                     </li>
                     <li>
                        <a class={styles.link} href="/">
                           Featured
                        </a>
                     </li>
                     <li>
                        <a class={styles.link} href="/">
                           Partnership
                        </a>
                     </li>
                     <li>
                        <a class={styles.link} href="/">
                           Bussiness Relation
                        </a>
                     </li>
                  </ul>
               </li>
               <li>
                  <h2 class={styles.title}>Community</h2>
                  <ul class={styles.nav_sublist}>
                     <li>
                        <a class={styles.link} href="/">
                           Events
                        </a>
                     </li>
                     <li>
                        <a class={styles.link} href="/">
                           Blog
                        </a>
                     </li>
                     <li>
                        <a class={styles.link} href="/">
                           Podcast
                        </a>
                     </li>
                     <li>
                        <a class={styles.link} href="/">
                           Invite a friend
                        </a>
                     </li>
                  </ul>
               </li>
               <li>
                  <h2 class={styles.title}>Socials</h2>
                  <ul class={styles.nav_sublist}>
                     <li>
                        <a class={styles.link} href="/">
                           Discord
                        </a>
                     </li>
                     <li>
                        <a class={styles.link} href="/">
                           Instagram
                        </a>
                     </li>
                     <li>
                        <a class={styles.link} href="/">
                           Twitter
                        </a>
                     </li>
                     <li>
                        <a class={styles.link} href="/">
                           Facebook
                        </a>
                     </li>
                  </ul>
               </li>
            </menu>
         </div>
         <div class={styles.bottom}>
            <div class={styles.copyright}>
               © 2022 MORENT. All rights reserved
            </div>
            <div class={styles.policy}>
               <a href="/">Privacy & Policy</a>
               <a href="/">Terms & Condition</a>
            </div>
         </div>
      </footer>
   );
});
