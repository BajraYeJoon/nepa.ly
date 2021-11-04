import "./Item.css";

import React from "react";
import Buttons from "./Buttons";

import ExpandIcon from "@material-ui/icons/ExpandMore";

const Item = ({
  desc,
  title,
  backgroundImg,
  leftBtnText,
  leftBtnLink,
  rightBtnText,
  rightBtnLink,
  twoButtons,
  first,
}) => {
  return (
    <div
      className="sections"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="item-container">
        <div className="item-content">
          <p>{title}</p>
          <div className="item-content-child">
            <p>{desc}</p>
          </div>
        </div>
        <div className="item__lowerSection">
          <div className="item__buttons">
            <Buttons imp="primary" text={leftBtnText} link={leftBtnLink} />

            {twoButtons && (
              <Buttons
                imp="secondary"
                text={rightBtnText}
                link={rightBtnLink}
              />
            )}
          </div>
          {first && (
            <div className="item__expandicon">
              <ExpandIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
