import "./FAQCard.css";

const FAQCard = (props) => {
  const displayFAQ = (props) => {
    faqs = props.faqs;

    if (faqs.length > 0) {
      return faqs.map((faq) => {
        return (
          <div class="card">
            <div class="card-header" id={"heading" + faq.id}>
              <h5 class="mb-0">
                <button
                  class="btn btnLink btn-link shadow-none"
                  data-toggle="collapse"
                  data-target={"#collapse" + faq.id}
                  aria-expanded="false"
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

    // <div class="container">
    //   <div id="accordion">
    //     <div class="card">
    //       <div class="card-header" id="headingOne">
    //         <h5 class="mb-0">
    //           <button
    //             class="btn btnLink btn-link shadow-none"
    //             data-toggle="collapse"
    //             data-target="#collapseOne"
    //             aria-expanded="true"
    //             aria-controls="collapseOne"
    //           >
    //             <h1>Question 1</h1>
    //           </button>
    //         </h5>
    //       </div>

    //       <div
    //         id="collapseOne"
    //         class="collapse show"
    //         aria-labelledby="headingOne"
    //         data-parent="#accordion"
    //       >
    //         <div class="card-body">
    //           Anim pariatur cliche reprehenderit, enim eiusmod high life
    //           accusamus terry richardson ad squid. 3 wolf moon officia aute, non
    //           cupidatat skateboard dolor brunch.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default FAQCard;
