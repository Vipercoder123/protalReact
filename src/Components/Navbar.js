import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="bgColor navbar navbar-expand-lg navbar-light">
        <a class="brandName navbar-brand" href="#">
          PROTAL
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="item active"></li>
            <li class="ml-auto nav-item">
              <div className="faqBox nav-link">
                <a href="/FAQs">FAQs</a>
              </div>
            </li>
            <li class="ml-auto nav-item">
              <div className="eventsBox nav-link">
                <a href="/Events">Events</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
