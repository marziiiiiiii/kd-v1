import React from "react";
import CollectionItem from "../collectionItem/collectionItem.component";
import "./collectionPreview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview ">
    <div className="titlebar">
      <h1 style={{fontSize: "18px"}}>{title.toUpperCase()}</h1>
      <h3 style={{fontSize: "12px", color:"red"}}>مشاهده همه > </h3>
    </div>
    <div className="preview">
      {items
        .filter((item, indx) => indx < 6)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
