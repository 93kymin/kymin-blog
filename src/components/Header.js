import React, { useState } from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
  header {
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    width: 100%;
  }

  .search form {
    display: flex;
    margin-top: 3px;
    img {
      padding: 0 5px;
    }
  }

  .searchInput {
    border: 0;
    width: 0;
    transition: width 0.3s ease-in;
  }

  .searchInput.active {
    width: 100px;
    background: none;
    border-bottom: 1px solid #dee3e2;
  }

  .searchIcon {
    cursor: pointer;
  }
`;

const Header = () => {
  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert("search...");
  };

  const openSearch = () => {
    setSearch(true);
  };

  const searchClass = search ? "searchInput active" : "searchInput";
  return (
    <HeaderStyled>
      <header>
        <b>React Developer</b>
        <div className="search">
          <form onSubmit={submitSearch}>
            <input type="text" className={searchClass} placeholder="search" />
            <img
              onClick={openSearch}
              className="searchIcon"
              src={require("../assets/icons/search.png")}
              alt="Search"
            />
          </form>
        </div>
      </header>
    </HeaderStyled>
  );
};

export default Header;
