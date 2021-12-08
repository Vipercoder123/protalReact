import "./Navbar.css";
// import Ellipse from "./Ellipse";

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
            <li class="item active">
              {/* <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a> */}
            </li>
            <li class="ml-auto nav-item">
              {/* <a class="nav-link" href="#">
                Link
              </a> */}
              <div className="faqBox nav-link">FAQs</div>
            </li>
            <li class="ml-auto nav-item">
              {/* <a class="nav-link disabled" href="#">
                Disabled
              </a> */}
              <div className="eventsBox nav-link">Events</div>
            </li>
          </ul>
          {/* <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
