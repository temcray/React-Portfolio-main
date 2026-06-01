import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const formRef = useRef();
    const[message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.
            sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
            () => {
                setMessage("Message sent successfully!");
                console.log("Email sent!");
                
            },
            (error) => {
                setMessage("Failed to send message. Please try again. ", error);
                console.log("Error: ", error);
                
            }
        );
    };

    return (
        <section className="pages contact-page">
            <h2><strong>Contact Me</strong></h2>
            
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button> 
            </form>

            {message && <p className="form-status">{message}</p>}
        </section>
           
    );
}

export default Contact;