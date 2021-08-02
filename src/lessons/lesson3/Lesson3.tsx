import React, { useState } from "react";
import API from "./API";
import "./lesson_3";

const Lesson3 = () => {
  const [searchName, setSearchName] = useState("");
  const [serachResult, setSearchResult] = useState("");
  const [searchNameByType, setSearchNameByType] = useState("");
  const [serachResultByType, setSerachResultByType] = useState("");
  const searchFilm = async () => {
    try {
      let response = await API.searchFilmsByTitle(searchName);
      const { Search, Response, Error } = response;
      if (Response === "True") {
        setSearchResult(
          JSON.stringify(Search.map((search: any) => search.Title))
        );
      } else {
        setSearchResult(JSON.stringify(Error));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const searchByType = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const type: string = e.currentTarget.dataset.t
        ? e.currentTarget.dataset.t
        : "";
      let response = await API.searchFilmsByType(searchNameByType, type);
      const { Search, Response, Error } = response;
      if (Response === "True") {
        setSerachResultByType(JSON.stringify(Search));
      } else {
        setSerachResultByType(JSON.stringify(Error));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Promises</h1>
      <div>
        <h3>
          <p>Search by name:</p>
        </h3>
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.currentTarget.value)}
        />
        <button onClick={searchFilm}>Search</button>
        <div>{serachResult}</div>
      </div>

      <div>
        <h3>
          <p>Search by type:</p>
        </h3>
        <input
          type="text"
          value={searchNameByType}
          onChange={(e) => setSearchNameByType(e.currentTarget.value)}
        />
        <button onClick={searchByType} data-t="movie">
          Movie
        </button>
        <button onClick={searchByType} data-t="series">
          Series
        </button>
        <div>{serachResultByType}</div>
      </div>
    </div>
  );
};
export default Lesson3;