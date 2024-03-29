import React from "react";
import { Link } from "gatsby";
import "../../common/styles/custom.tachyons.css";
import "tachyons";

export default props => (
  <React.Fragment>
    <div className="h-auto bg-near-white mw9 w-100 flex flex-column items-center justify-center pv5 ph2 center">
      <span className="fw1 display dark-gray db tc w-100 mw7 f3 f2-ns">
        {props.title}
      </span>
      <p className="serif mw6 tc f5 dn dib-l mb4 db">{props.description}</p>
      <Link
        style={{ backgroundColor: "#9f94e5" }}
        className="db pv3 ph5 tracked ttu b bg-washed-red dark-gray sans-serif no-underline hover-gray"
        to={props.to}
      >
        了解详情
      </Link>
    </div>
  </React.Fragment>
);
