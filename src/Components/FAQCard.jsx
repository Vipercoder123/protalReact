import "./FAQCard.css";

const FAQCard = (props) => {
  const displayFAQ = (props) => {
    faqs = props.faqs;

    if (faqs.length > 0) {
      return faqs.map((faq) => {
        return (
          <div class="card">
            <div class="card-header headerPadding" id={"heading" + faq.id}>
              <h5 class="mb-0">
                <button
                  class="btn btnLink btn-link collapsed shadow-none"
                  data-toggle="collapse"
                  data-target={"#collapse" + faq.id}
                  aria-expanded="true"
                  aria-controls={"collapse" + faq.id}
                >
                  <h3>{faq.question}</h3>
                </button>
              </h5>
            </div>

            <div
              id={"collapse" + faq.id}
              class="collapse"
              aria-labelledby={"heading" + faq.id}
              data-parent="#accordion"
            >
              <div class="card-body">{faq.answer}</div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div class="container">
        <div id="accordion" className="accordian">
          <div>{displayFAQ(props)}</div>
        </div>
      </div>
    </div>
  );
};

export default FAQCard;
