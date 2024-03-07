import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./footer.module.css?inline";

export default component$(() => {
   useStylesScoped$(styles);
   return (
      <div></div>
   );
});
