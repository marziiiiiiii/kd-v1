import React from "react";
import "./collectionItem.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <div className="price">
        <h8 style={{ fontSize: "11px" , marginTop: "2px" }}>تومان</h8>
        <span>{price}</span>
      </div>
      <span className="name">{name}</span>
    </div>
  </div>
);

export default CollectionItem;
