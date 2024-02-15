import { DateRange } from "react-date-range";
import { format } from "date-fns";

import { SlCalender } from "react-icons/sl";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";

import { useState } from "react";
import Container from "../common/Container";

import "./SearchHotel.css";
import { useNavigate } from "react-router-dom";

const SearchHotel = () => {
  // const [room, setRoom] = useState(1);
  // const [children, setChildren] = useState(0);
  // const [adult, setAdult] = useState(1);

  // const handleAdultDecrement = () => {
  //   setAdult(adult + 1);
  // };

  // const handleChildrenDecrement = () => {
  //   setChildren(children + 1);
  // };

  // const handleRoomDecrement = () => {
  //   setRoom(room + 1);
  // };

  // const handleRoomIncrement = () => {
  //   if (room > 1) {
  //     setRoom(room - 1);
  //   }
  // };

  // const handleChildrenIncrement = () => {
  //   if (children > 0) {
  //     setChildren(children - 1);
  //   }
  // };

  // const handleAdultIncrement = () => {
  //   if (adult > 1) {
  //     setAdult(adult - 1);
  //   }
  // };

  const navigate = useNavigate();
  const [location, setLocation] = useState(false);
  const [date, setShowDate] = useState(false);
  const [showPerson, setPersonShow] = useState(false);

  const handleDecrement = (key) => {
    setPerson((prevState) => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
  };

  const handleIncrement = (key) => {
    setPerson((prevState) => ({
      ...prevState,
      [key]: prevState[key] > 0 ? prevState[key] - 1 : prevState[key],
    }));
  };

  const handleRoomDecrement = () => {
    handleDecrement("room");
  };

  const handleRoomIncrement = () => {
    handleIncrement("room");
  };

  const handleChildrenDecrement = () => {
    handleDecrement("children");
  };

  const handleChildrenIncrement = () => {
    handleIncrement("children");
  };

  const handleAdultDecrement = () => {
    handleDecrement("adult");
  };

  const handleAdultIncrement = () => {
    handleIncrement("adult");
  };

  // input value get
  const [destination, setDestination] = useState("");

  const [person, setPerson] = useState({
    room: 1,
    children: 0,
    adult: 1,
  });

  const [dateRange, setShowDateRange] = useState([
    {
      startDate: format(new Date(), "MM/dd/yyyy"),
      endDate: format(new Date(), "MM/dd/yyyy"),
      key: "selection",
    },
  ]);

  const handleDataSend = () => {
    navigate("/hotels", {
      state: { destination: destination.toLowerCase(), dateRange, person },
    });
  };
  return (
    <Container>
      <div className="search__inputs">
        <div className="search__inputs--form">
          <IoBedOutline />
          <input
            onClick={() => setLocation(!location)}
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Why are you going?"
          />
        </div>
        <div
          className="search__inputs--form"
          onClick={() => setShowDate(!date)}
        >
          <SlCalender />
          <span>{`${format(dateRange[0].startDate, "MM/dd/yyyy")}  —  ${format(
            dateRange[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
        </div>
        <div
          className="search__inputs--form"
          onClick={() => setPersonShow(!showPerson)}
        >
          <FiUser />
          <span>
            {person.adult} adults · {person.children} children · {person.room}
            room
          </span>
          <IoIosArrowDown />
        </div>
        <div className="search__inputs--form">
          <button onClick={handleDataSend}>Search</button>
        </div>
      </div>
      {showPerson && (
        <div className="peoples">
          <div className="people__container">
            <div className="people">
              <p>Adults</p>
              <div className="people__buttons">
                <button
                  onClick={handleAdultIncrement}
                  className="people__button incre"
                >
                  -
                </button>
                <span>{person.adult}</span>
                <button
                  onClick={handleAdultDecrement}
                  className="people__button decre"
                >
                  +
                </button>
              </div>
            </div>
            <div className="people">
              <p>Children</p>
              <div className="people__buttons">
                <button
                  onClick={handleChildrenIncrement}
                  className="people__button incre"
                >
                  -
                </button>
                <span>{person.children}</span>
                <button
                  onClick={handleChildrenDecrement}
                  className="people__button decre"
                >
                  +
                </button>
              </div>
            </div>
            <div className="people">
              <p>Rooms</p>
              <div className="people__buttons">
                <button
                  onClick={handleRoomIncrement}
                  className="people__button incre"
                >
                  -
                </button>
                <span>{person.room}</span>
                <button
                  onClick={handleRoomDecrement}
                  className="people__button decre"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => setPersonShow(false)}
            className="people__button--done"
          >
            Done
          </button>
        </div>
      )}
      {date && (
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setShowDateRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
        />
      )}
    </Container>
  );
};

export default SearchHotel;
