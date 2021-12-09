import "./EventCard.css";

const EventCard = () => {
  return (
    <div>
      <div class="cardColor card mt-5 ml-5 mr-3 cardWidth ">
        <div class="cardHeader card-header">Event 1</div>
        <div class="card-body cardBody">
          <h5 class="card-title">Date: 6/5/2021</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="cardFooter card-footer ">Singing , Dancing</div>
      </div>
    </div>
  );
};

export default EventCard;
