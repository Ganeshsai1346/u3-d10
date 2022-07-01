/** @format */
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);

  const searchQuery = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=079045f2fbbdb941bef49889f122240f`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setResults(data);
        console.log(results);
      } else {
        console.log("ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="weather-poster">
        <div className="box">
          <h2>Search By City</h2>
          <input
            type="text"
            placeholder="Type City Name Here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input
            type="button"
            id="searchBtn"
            value=" Search"
            className="mt-3"
            onClick={searchQuery}
          />
        </div>
      </div>

      <div className="text-dark">
        {results.main && (
          <div className="cityinfo">
            <div className="weather-section">
              <Container>
                <Row className="justify-content-center">
                  <h1 className="mb-3">{results.name}</h1>
                  <Col className="d-flex justify-content-center">
                    <div className="details mr-5">
                      <h4 className="subtitle">
                        <span>Temp</span>
                      </h4>
                      <span className="weathericons">
                        <img
                          src="https://img.icons8.com/external-wanicon-two-tone-wanicon/42/000000/external-temperature-nature-wanicon-two-tone-wanicon.png"
                          alt=""
                        />
                      </span>

                      <span className="weathercontent">
                        {(results.main.temp - 273.15).toFixed(2)} ºC
                      </span>
                    </div>
                    <div className="details mr-5">
                      <span>
                        <h4 className="subtitle">Feels like </h4>
                      </span>
                      <span className="weathericons">
                        <img
                          src="https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/42/000000/external-temperature-metabolism-inipagistudio-lineal-color-inipagistudio.png"
                          alt=""
                        />
                      </span>
                      <span className="weathercontent">
                        {(results.main.feels_like - 273.15).toFixed(2)} ºC
                      </span>
                    </div>
                    <div className="details  mr-5">
                      <span>
                        <h4 className="subtitle"> Description</h4>
                      </span>
                      <span className="weathericons">
                        <img
                          src="https://img.icons8.com/dusk/48/000000/clouds.png"
                          alt=""
                        />
                      </span>
                      {"   "}
                      <span className="weathercontent">
                        {results.weather[0].description}
                      </span>
                    </div>

                    <div className="details mr-5">
                      <span>
                        <h4 className="subtitle">Humidity </h4>
                      </span>
                      <span className="weathericons">
                        <img
                          src="https://img.icons8.com/external-justicon-flat-justicon/48/000000/external-humidity-weather-justicon-flat-justicon.png"
                          alt=""
                        />
                      </span>
                      <span className="weathercontent">
                        {results.main.humidity}%
                      </span>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
