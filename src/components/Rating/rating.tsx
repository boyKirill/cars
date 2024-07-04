import { component$ } from "@builder.io/qwik";
import styles from "./rating.module.css";

interface props {
    class?: string;
    mark: number;
}

export default component$<props>((props) => {
    const stars = (mark: number) => {
        const content = [];
        for (let i = 1; i <= 5; i++) {
            i <= mark ? content.push(<div class={[styles.star, styles.full]}></div>) : content.push(<div class={[styles.star, styles.half]}></div>)
        }
        return content;
    }
    return (
        <>
            <div class={styles.rating + " " + props.class}>
                <div class={styles.stars}>
                    {stars(props.mark)}
                </div>
            </div>
        </>)
})