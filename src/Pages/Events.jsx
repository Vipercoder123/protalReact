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

  let domains = [];
  if (domains.length == 0) {
    events.map((event) => {
      event.domain.map((domain) => {
        domains.indexOf(domain) === -1 ? domains.push(domain) : null;
      });
      console.log(domains);
    });
  }

  let array3 = [];

  const domainSort = (val) => {
    if (events.length > 0) {
      events.map((event) => {
        event.domain.map((domain) => {
          domain === val ? array3.push(event) : console.log(false);
        });
      });
    }
    console.log(array3);

    setEvents(array3);
  };

  let array1 = ["Sort By Date", "Ascending", "Descending"];
  let array2 = ["Sort By Category", ...domains];

  return (
    <div>
      <div className="dropdownDisplay">
        <Dropdown
          selectFunction={true}
          ascArray={ascArray}
          dscArray={dscArray}
          array={array1}
        />
        <Dropdown
          selectFunction={false}
          array={array2}
          domainSort={domainSort}
        />
      </div>
      <div className="cardDisplay">
        <EventCard events={events} />
      </div>
    </div>
  );
};

export default Events;
