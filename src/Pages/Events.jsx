import Dropdown from "../Components/Dropdown";
import EventCard from "../Components/EventCard";
import "./Events.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://karenpinto1602.github.io/frontend-hiring/events.json")
      .then((res) => {
        console.log(events[0]);
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="dropdownDisplay">
        <Dropdown />
        <Dropdown />
      </div>
      <div className="cardDisplay">
        <EventCard events={events} />
      </div>
    </div>
  );
};

export default Events;
