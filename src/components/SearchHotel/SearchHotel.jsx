import { DateRange } from "react-date-range";
import { format } from "date-fns";

import { SlCalender } from "react-icons/sl";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";

import { useState } from "react";
import Container from "../common/Container";

import "./SearchHotel.css";

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

  const [location, setLocation] = useState(false);
  const [date, setDate] = useState(false);
  const [man, setMan] = useState(false);

  const [state, setState] = useState({
    room: 1,
    children: 0,
    adult: 1,
  });

  const handleDecrement = (key) => {
    setState((prevState) => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
  };

  const handleIncrement = (key) => {
    setState((prevState) => ({
      ...prevState,
      [key]: prevState[key] > 0 ? prevState[key] - 1 : prevState[key],
    }));
  };

  // Usage examples
  const handleRoomDecrement = () => {
    handleDecrement("room");
  };

  const handleChildrenDecrement = () => {
    handleDecrement("children");
  };

  const handleAdultDecrement = () => {
    handleDecrement("adult");
  };

  const handleRoomIncrement = () => {
    handleIncrement("room");
  };

  const handleChildrenIncrement = () => {
    handleIncrement("children");
  };

  const handleAdultIncrement = () => {
    handleIncrement("adult");
  };

  const [dateRange, setDateRange] = useState([
    {
      startDate: format(new Date(), "MM/dd/yyyy"),
      endDate: format(new Date(), "MM/dd/yyyy"),
      key: "selection",
    },
  ]);
  return (
    <Container>
      <div className="search__inputs">
        <div className="search__inputs--form">
          <IoBedOutline />
          <input
            onClick={() => setLocation(!location)}
            type="text"
            placeholder="Why are you going?"
          />
        </div>
        <div className="search__inputs--form" onClick={() => setDate(!date)}>
          <SlCalender />
          <span>{`${format(dateRange[0].startDate, "MM/dd/yyyy")}  —  ${format(
            dateRange[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
        </div>
        <div className="search__inputs--form" onClick={() => setMan(!man)}>
          <FiUser />
          <span>
            {state.adult} adults · {state.children} children · {state.room}
            room
          </span>
          <IoIosArrowDown />
        </div>
        <div className="search__inputs--form">
          <button>Search</button>
        </div>
      </div>
      {man && (
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
                <span>{state.adult}</span>
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
                <span>{state.children}</span>
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
                <span>{state.room}</span>
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
            onClick={() => setMan(false)}
            className="people__button--done"
          >
            Done
          </button>
        </div>
      )}
      {date && (
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDateRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
        />
      )}
    </Container>
  );
};

export default SearchHotel;
