import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../app/selectors";

import { Input } from "@mui/material";

const Filter = () => {
  const { filter } = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name:
      <Input
        label="Search"
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => {
          dispatch({ type: "SET_FILTER", payload: e.target.value });
        }}
        className="filter-input"
        variant="Outlined"
      />
    </label>
  );
};

export default Filter;
