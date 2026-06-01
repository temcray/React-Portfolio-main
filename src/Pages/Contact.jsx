import { useRef, useState } from "react";



function Contact() {
    const form = useRef();
    const[message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.
            sendForm(
                "service_p9zws8t",
                "template_1v0m5s9",
                form.current,
            {
                publicKey: "Zt9n2s8Xo5mLh3a7"
            }
        )
        .then(
            () => {
                setMessage("Message sent successfully!");
            }
        );
    };
    return (
        <section className="pages contact-page">
            <h2><strong>Contact Me</strong></h2>
            
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input type="text" name="user_name" placeholder="Your Name" required />
                <input type="email" name="user_email" placeholder="Your Email" required />
                <textarea name="user_message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button> 
            </form>

            {message && <p className="form-status">{message}</p>}
        </section>
           
    );
}

export default Contact;