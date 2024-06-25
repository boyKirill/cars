import { component$ } from "@builder.io/qwik";
import ImgLogo from "../../media/Logo.svg?jsx";
import ImgAvatar from "../../media/avatar.svg?jsx";
import styles from "./Header.module.css";

interface ItemProps {
   class?: string;
}

export default component$<ItemProps>((props) => {
   return (
      <header class={props.class}>
         <h1 class={styles.logo}>
            <span class={styles.invisible}>The morent logo</span>
            <a href="/">
               <ImgLogo />
            </a>
         </h1>

         <form class={styles.form}>
            <label>
               <img class={styles.loop} src="/search.svg" alt="" />
               <input
                  aria-label="Search"
                  class={styles.search}
                  type="search"
                  placeholder="Search something here"
               />
            </label>
            <button class={styles.form__filter}>
               <img src="/filter.svg" alt="" />
            </button>
         </form>
         <ul class={styles.profile}>
            <li>
               <a href="/" aria-label="favorites" class={styles.favorites}>
                  <img src="/heart.svg" alt="" />
               </a>
            </li>
            <li>
               <a
                  href="/"
                  aria-label="notifications"
                  class={styles.notifications}>
                  <img src="/notification.svg" alt="" />
               </a>
            </li>
            <li>
               <a href="/" aria-label="settings" class={styles.settings}>
                  <img src="/setting-2.svg" alt="" />
               </a>
            </li>
            <li>
               <a href="/" aria-label="profile" class={styles.avatar}>
                  <ImgAvatar />
               </a>
            </li>
         </ul>
      </header>
   );
});
