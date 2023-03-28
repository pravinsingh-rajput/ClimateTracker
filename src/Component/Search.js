import React from "react";
import "./Search.css";
import Searchicon from "@mui/icons-material/SearchOutlined";

const Search = () => {
  return (
    <form>
      <Searchicon />
      <input type="text" placeholder="Search City..." />
    </form>
  );
};

export default Search;
