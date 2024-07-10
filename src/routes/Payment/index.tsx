import { component$ } from "@builder.io/qwik";
import styles from "./payment.module.css"
import { DocumentHead } from "@builder.io/qwik-city";
import Rating from "~/components/Rating/rating";

export default component$(() => {
    const dataCities = ["Moscow", "Tula", "Cheboksary"];
    const dataSelectedCar =
    {
        name: "Nissan GT - R",
        category: "Sport",
        volume: 80,
        numCapacity: 2,
        price: 80.0,
        oldPrice: 100.0,
        imageSrc: "/car-a2.png",
        imageSrcMini: "/d1.png",
        tabImages: [
            "/d1.png",
            "/d2.png",
            "/d3.png",
        ],
        averageMark: 4,
    };

    return (
        <>
            <form action="" class={styles.content}>
                <ul class={styles.form_steps}>
                    <li class={[styles.form_step, styles.form_step_biling]}>
                        <div class={styles.step_header}>
                            <div class={styles.step_name}>Billing Info</div>
                            <div class={styles.step_info}>Please enter your billing info</div>
                            <div class={styles.step_number}>Step 1 of 4</div>
                        </div>
                        <div class={[styles.from_inputs, styles.def_inputs]}>
                            <label>
                                <span class={styles.input_title}>Name</span>
                                <input placeholder="Your name" type="text" />
                            </label>
                            <label>
                                <span class={styles.input_title}>Phone Number</span>
                                <input placeholder="Phone number" type="text" />
                            </label>
                            <label>
                                <span class={styles.input_title}>Address</span>
                                <input placeholder="Address" type="text" />
                            </label>
                            <label>
                                <span class={styles.input_title}>Town / City</span>
                                <input placeholder="Town or city" type="text" />
                            </label>
                        </div>
                    </li>
                    <li class={[styles.form_step]}>
                        <div class={styles.step_header}>
                            <div class={styles.step_name}>Rental Info</div>
                            <div class={styles.step_info}>Please select your rental date</div>
                            <div class={styles.step_number}>Step 2 of 4</div>
                        </div>
                        <div class={[styles.meeting_places, styles.drop_off]}>
                            <label>
                                <input type="radio" />
                                <span>Pick - Up</span>
                            </label>
                            <div class={[styles.from_inputs, styles.def_inputs]}>
                                <label>
                                    <span class={styles.input_title}>Locations</span>
                                    <select name="Locations">
                                        <option value="" disabled selected hidden>Select your city</option>
                                        {dataCities.map((city) => (
                                            <option value={city}>{city}</option>
                                        ))}
                                    </select>
                                </label>
                                <label>
                                    <span class={styles.input_title}>Date</span>
                                    <input type="date" />
                                </label>
                                <label>
                                    <span class={styles.input_title}>Time</span>
                                    <input type="time" value="09:41" />
                                </label>
                            </div>
                        </div>
                        <div class={styles.meeting_places}>
                            <label>
                                <input type="radio" />
                                <span>Drop - Off</span>
                            </label>
                            <div class={[styles.from_inputs, styles.def_inputs]}>
                                <label>
                                    <span class={styles.input_title}>Locations</span>
                                    <select name="Locations">
                                        <option value="" disabled selected hidden>Select your city</option>
                                        {dataCities.map((city) => (
                                            <option value={city}>{city}</option>
                                        ))}
                                    </select>
                                </label>
                                <label>
                                    <span class={styles.input_title}>Date</span>
                                    <input type="date" />
                                </label>
                                <label>
                                    <span class={styles.input_title}>Time</span>
                                    <input type="time" value="09:41" />
                                </label>
                            </div>
                        </div>


                    </li>
                    <li class={[styles.form_step, styles.payment_method]}>
                        <div class={styles.step_header}>
                            <div class={styles.step_name}>Payment Method</div>
                            <div class={styles.step_info}>Please enter your payment method</div>
                            <div class={styles.step_number}>Step 3 of 4</div>
                        </div>
                        <div class={styles.methods_collapsible}>
                            <div class={styles.collapsible_container}>

                                <label for="collapsible1" class={styles.collapsible_label}>
                                    Credit Card
                                </label>
                                <input id="collapsible1" type="radio" name="Credit Card" checked class={styles.collapsible_input} />
                                <img src="/Visa.svg" alt="" class={styles.method_image} />
                                <div class={styles.collapsible_content}>
                                    <div class={[styles.from_inputs, styles.def_inputs, styles.methods_inputs]}>
                                        <label>
                                            <span class={styles.input_title}>Card Number</span>
                                            <input placeholder="Card Number" type="text" />
                                        </label>
                                        <label>
                                            <span class={styles.input_title}>Expration Date</span>
                                            <input placeholder="DD / MM / YY" type="text" />
                                        </label>
                                        <label>
                                            <span class={styles.input_title}>Card Holder</span>
                                            <input placeholder="Card holder" type="text" />
                                        </label>
                                        <label>
                                            <span class={styles.input_title}>CVC</span>
                                            <input placeholder="CVC" type="text" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class={styles.collapsible_container}>
                                <label for="collapsible2" class={styles.collapsible_label}>PayPal</label>
                                <input id="collapsible2" type="radio" name="Credit Card" class={styles.collapsible_input} />
                                <img src="/PayPal.svg" alt="" class={styles.method_image} />
                                <div class={styles.collapsible_content}>
                                    <div class={[styles.from_inputs, styles.def_inputs, styles.methods_inputs]}>
                                        <label>
                                            <span class={styles.input_title}>Email</span>
                                            <input placeholder="Email" type="email" />
                                        </label>
                                        <label>
                                            <span class={styles.input_title}>Password</span>
                                            <input placeholder="Password" type="password" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class={styles.collapsible_container}>
                                <label for="collapsible3" class={styles.collapsible_label}>Bitcoin</label>
                                <input id="collapsible3" type="radio" name="Credit Card" class={styles.collapsible_input} />
                                <img src="/Bitcoin.svg" alt="" class={styles.method_image} />
                                <div class={styles.collapsible_content}>
                                    <p>Тут какой то qr-код для оплаты.</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class={[styles.form_step, styles.form_step_confirmation]}>
                        <div class={styles.step_header}>
                            <div class={styles.step_name}>Confirmation</div>
                            <div class={styles.step_info}>We are getting to the end. Just few clicks and your rental is ready!</div>
                            <div class={styles.step_number}>Step 4 of 4</div>
                        </div>
                        <div class={[styles.confirmation_inputs]}>
                            <label>
                                <input type="checkbox" />
                                <span class={styles.input_title}>I agree with sending an Marketing and newsletter emails. No spam, promissed!</span>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span class={styles.input_title}>I agree with our terms and conditions and privacy policy.</span>
                            </label>
                        </div>
                        <button class={styles.form_submit_btn} type="submit">Rent Now</button>
                        <div class={styles.security_container}>
                            <img src="/security-safety.svg" alt="security icon" />
                            <div class={styles.security_title}>All your data are safe</div>
                            <div class={styles.security_info}>We are using the most advanced security to provide you the best experience ever.</div>
                        </div>
                    </li>
                </ul>
                <div class={styles.selected_product}>
                    <div class={styles.rental_summary}>Rental Summary</div>
                    <p class={styles.rental_info}>Prices may change depending on the length of the rental and the price of your rental car.</p>
                    <div class={styles.selected_car}>
                        <img src={dataSelectedCar.imageSrcMini} alt={dataSelectedCar.name} />
                        <div>
                            <h2 class={styles.selected_car_name}>{dataSelectedCar.name}</h2>
                            <Rating class={styles.selected_car_rating} mark={dataSelectedCar.averageMark} />
                            <span class={styles.reviewer}>440+ Reviewer</span>
                        </div>
                    </div>
                    <div class={styles.subtotal}>
                        <dt>Subtotal</dt>
                        <dd>${dataSelectedCar.price.toFixed(2)}</dd>
                    </div>
                    <div class={styles.tax}>
                        <dt>Tax</dt>
                        <dd>$0</dd>
                    </div>
                    <div class={styles.promo}>
                        <label><span class={styles.unvisible}>Enter promo code</span><input type="text" placeholder="Apply promo code" /></label>
                        <button type="submit">Apply now</button>
                    </div>
                    <div class={styles.price_box}>
                        <div class={styles.total_price}>Total Rental Price</div>
                        <div class={styles.total_price_info}>Overall price and includes rental discount</div>
                        <div class={styles.bill}>${dataSelectedCar.price.toFixed(2)}</div>
                    </div>
                </div>
            </form>
        </>
    )
})

export const head: DocumentHead = {
    title: "Payment",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
