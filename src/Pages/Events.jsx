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
        //console.log(events[0]);
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ascArray = () => {
    const asc = [...events].sort((a, b) => a.date - b.date);
    setEvents(asc);
  };

  const dscArray = () => {
    const asc = [...events].sort((a, b) => a.date - b.date);
    const dsc = asc.reverse();
    setEvents(dsc);
  };

  return (
    <div>
      <div className="dropdownDisplay">
        {/* <Dropdown /> */}
        {/* <Dropdown /> */}
        <button onClick={ascArray}>Ascending</button>
        <button onClick={dscArray}>Descending</button>
        <button>domain</button>
      </div>
      <div className="cardDisplay">
        <EventCard events={events} />
      </div>
    </div>
  );
};

export default Events;
