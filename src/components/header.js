import React from "react";

const Header = () => (
  <header className="masthead d-flex">
    <div className="container text-center my-auto">
      <h1 className="mb-1">Earth Alliance</h1>
      <h3 className="mb-5">
        <em>An International Collective of Environmentalists!</em>
      </h3>
      <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">
        Find Out More
      </a>
    </div>
    <div className="overlay" />
  </header>
);
export default Header;
