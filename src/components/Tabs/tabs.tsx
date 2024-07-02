import { component$, useSignal } from '@builder.io/qwik';
import styles from "./tabs.module.css"


interface ItemProps {
    imagesSrc:string[];
}

export default component$((props: ItemProps) => {
    console.log(props.imagesSrc[0]);
    const selectedImage = useSignal<string>(props.imagesSrc[0]);

  return (
    <div>
      <div id={styles["image-container"]}>
        <img src={selectedImage.value} alt="Selected" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div id={styles["thumbnails"]}>
        {props.imagesSrc.map((image) => (
          <img
            key={image}
            src={image}
            alt="Thumbnail"
            style={{ width: '100px', height: 'auto', cursor: 'pointer' }}
            onClick$={() => selectedImage.value = image}
          />
        ))}
      </div>
    </div>
  );
});
