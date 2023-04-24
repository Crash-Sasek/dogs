import { Data } from "./data";
import React from "react";

function SearchResults({selectedAttributes, searchTerms}) {

  const filteredData= Data.filter((dog) => {
    return selectedAttributes.reduce((acc, attribute, i) => {
           return acc && dog[attribute].toLowerCase().includes(searchTerms[i].toLowerCase())
    }, true);
})

  return (
      <div className="box-container">
        {filteredData.map((d, i) => {
          return (
            <div className="box" key={i} style={{ backgroundColor: "#4DBA87" }}>
              <b>Breed: </b>
              {d.breed}
              <br />
              <b>Country of Origin: </b>
              {d.country}
              <br />
              <b>Fur Color: </b>
              {d.furcolor}
              <br />
              <b>Height (in): </b>
              {d.height}
              <br />
              <b>Eye Color: </b>
              {d.eyecolor}
              <br />
              <b>longevity: </b>
              {d.longevity}
              <br />
              <b>Character Traits: </b>
              {d.character}
              <br />
              <b>Common Health Problems: </b>
              {d.health}
              <br />
            </div>
          );
        })}
        {filteredData.length === 0 && <span>No results found</span>}
      </div>
  );
}

export default SearchResults;
