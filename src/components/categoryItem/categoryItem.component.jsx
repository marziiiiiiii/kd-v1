import  React  from "react";
import { withRouter } from "react-router-dom";
import "./categoryItem.styles.scss";

export const Category = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => {
  return (
    <div
      className={`${size} category-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">:D</span>
      </div>
    </div>
  );
};

export default withRouter(Category);
