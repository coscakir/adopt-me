import React from "react";
import { ANIMALS } from "@frontendmasters/pet";

import useDropDown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = React.useState("Seattle, WA");
  const [breeds, setBreeds] = React.useState([]);
  const [animal, AnimalDropdown] = useDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropDown("Breed", "", breeds);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
