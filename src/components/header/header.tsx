import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.module.css?inline";

export default component$(() => {
   useStylesScoped$(styles);
   return (
      <div></div>
   );
});
