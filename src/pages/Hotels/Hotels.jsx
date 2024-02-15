import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

import Container from "../../components/common/Container";

import "./Hotels.css";
import SearchItem from "../../components/SearchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
const Hotels = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.dateRange);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.person);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `https://jobs-rvc2.onrender.com/cardDatas?city=${destination}&min=${
      min || 0
    }&max=${max || 999}}`
  );

  const handleReSearch = () => {
    reFetch();
  };

  return (
    <Container>
      <div className="hotels">
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listResult">
              {loading ? (
                <Loading />
              ) : data?.length === 0 ? (
                <h1>data</h1>
              ) : (
                data.map((hotel) => <SearchItem key={hotel.id} hotel={hotel} />)
              )}
            </div>
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Destination</label>
                <input placeholder={destination} type="text" />
              </div>
              <div className="lsItem">
                <label>Check-in Date</label>
                <span onClick={() => setOpenDate(!openDate)}>
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>

                <div className="clearnder_popup">
                  {openDate && (
                    <DateRange
                      onChange={(item) => setDate([item.selection])}
                      minDate={new Date()}
                      ranges={date}
                    />
                  )}
                </div>
              </div>
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      onChange={(e) => setMin(e.target.value)}
                      className="lsOptionInput"
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      onChange={(e) => setMax(e.target.value)}
                      className="lsOptionInput"
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adult</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.adult}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="lsOptionInput"
                      placeholder={options.children}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.room}
                    />
                  </div>
                </div>
              </div>
              <button className="search-button" onClick={handleReSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hotels;
