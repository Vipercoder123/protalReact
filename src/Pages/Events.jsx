import Dropdown from "../Components/Dropdown";
import EventCard from "../Components/EventCard";
import "./Events.css";

const Events = () => {
  return (
    <div>
      <div className="dropdownDisplay">
        <Dropdown />
        <Dropdown />
      </div>
      <div className="cardDisplay">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
