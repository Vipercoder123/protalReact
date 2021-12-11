import { useState, useEffect } from "react";
import axios from "axios";
import FAQCard from "../Components/FAQCard";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    axios
      .get("https://karenpinto1602.github.io/frontend-hiring/faq.json")
      .then((res) => {
        console.log(faqs[0]);
        setFaqs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="faq">
      <FAQCard faqs={faqs} />
    </div>
  );
};

export default FAQ;
