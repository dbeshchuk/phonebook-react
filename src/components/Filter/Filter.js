import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../app/selectors";

const Filter = () => {
  const { filter } = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name:
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => {
          dispatch({ type: "SET_FILTER", payload: e.target.value });
        }}
        className="filter-input"
      />
    </label>
  );
};

export default Filter;
