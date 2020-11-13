import React from "react";
import "./collectionItem.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <div className="price">
        {price === 0 ? (
          <h8 className="free">رایگان</h8>
        ) : (
          <div className="non-free ">
            <h8>تومان</h8>
            <span>{price}</span>
          </div>
        )}
      </div>
      <span className="name">{name}</span>
    </div>
  </div>
);

export default CollectionItem;
//تومان
