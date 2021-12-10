import "./EventCard.css";

const EventCard = (props) => {
  const eventData = (props) => {
    events = props.events;

    if (events.length > 0) {
      return events.map((event) => {
        let date = new Date(event.date * 1000).toLocaleDateString("en-US");

        return (
          <div class="cardColor card mt-5 ml-5 mr-3 cardWidth ">
            <div class="cardHeader card-header">{event.title}</div>
            <div class="card-body cardBody">
              <h5 class="card-title">Date: {date}</h5>
              <p class="card-text">{event.decription}</p>
            </div>
            <div class="cardFooter card-footer ">{event.domain + " "}</div>
          </div>
        );
      });
    }
  };

  return <div className="cardDisplay">{eventData(props)}</div>;
};

export default EventCard;
