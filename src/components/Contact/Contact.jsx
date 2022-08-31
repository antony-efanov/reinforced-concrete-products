import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/input";

const Contact = ({ orderText }) => {
  const [value, setValue] = useState();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zyvpvcj",
        "template_grqrsvt",
        form.current,
        "8td_joFNw9rib0qWW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setTimeout(() => {
      e.target.reset();
      setValue("");
    }, 2000);
  };

  return (
    <footer id="contact" className="contact">
      <form className="contact__form" ref={form} onSubmit={sendEmail}>
        <h2 className="contact__form--title">Зв'язок</h2>
        <div className="contact__form--name-phone">
          <input
            className="contact__form--nameField contactField"
            type="text"
            name="user_name"
            placeholder="Ім'я"
            required
          />

          <PhoneInput
            className="contact__form--phoneField contactField"
            name="user_phone"
            country="UA"
            value={value}
            onChange={setValue}
            placeholder="Номер телефону"
            required
          />
        </div>

        <textarea
          className="contact__form--messageField contactField"
          name="message"
          placeholder="Повідомлення"
          required
          defaultValue={orderText}
        />

        <button
          className="contact__form--sendButton genericButton"
          type="submit"
        >
          Відправити
        </button>
      </form>
      <div className="contact__abo"></div>
      <div className="contact__numbers">
        <div className="contact__numbers--number1">+38(097)-27-12-987</div>
        <div className="contact__numbers--number2">+38(066)-42-15-727</div>
        <div className="contact__numbers--email">gsigroup.jbi@gmail.com</div>
      </div>
    </footer>
  );
};

export default Contact;
