import { component$, useSignal, useStore } from '@builder.io/qwik';
import styles from "./tabs.module.css"


interface ItemProps {
    imagesSrc:string[];
}

export default component$((props: ItemProps) => {
    console.log(props.imagesSrc[0]);
    const selectedImage = useSignal<string>(props.imagesSrc[0]);
    const store = useStore({ currentImage: props.imagesSrc[0] });

  return (
    <div>
      <div id={styles["image-container"]}>
        <img src={selectedImage.value} />
      </div>
      <ul id={styles["thumbnails"]}>
        {props.imagesSrc.map((image) => (
          <img
            key={image}
            src={image}
            alt="Thumbnail"
            class={store.currentImage === image ? styles.selectedThumbnail : ''}
            onClick$={() => {
              selectedImage.value = image;
              store.currentImage = image;
            }}
          />
        ))}
      </ul>
    </div>
  );
});
