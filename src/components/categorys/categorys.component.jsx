import React, { Component } from "react";
import Category from "../categoryItem/categoryItem.component";
import "./categorys.styles.scss";
class Categorys extends Component {
  constructor() {
    super();
    this.state = {
      cardCats: [
        {
          title: "تولد",
          imageUrl:
            "https://i.pinimg.com/236x/81/fb/3b/81fb3b406d9609b04f0cdb0fdc70998f.jpg",
          id: 1,
          linkUrl: "birthday",
        },
        {
          title: "ازدواج",
          imageUrl:
            "https://i.pinimg.com/564x/73/07/35/730735b57fad8cebf3fd3f1ccdabf93e.jpg",
          id: 2,
          linkUrl: "",
        },
        {
          title: "دورهمی",
          imageUrl:
            "https://i.pinimg.com/564x/4e/df/e1/4edfe1d2ecda3166ce70f0a0a12eb0c5.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "مناسبتی",
          imageUrl: "https://i.pinimg.com/564x/61/90/46/6190468fce672f8417f02e6f42c63d5e.jpg",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "سالگرد ازدواج",
          size: "large",
          imageUrl:
          //"https://i.pinimg.com/564x/1c/9e/bb/1c9ebb24e48993d6f5322673e27bc159.jpg",
           "https://i.pinimg.com/564x/9b/28/9b/9b289bd3f283fc85c538c50a343d72bd.jpg",
          // "https://i.pinimg.com/564x/65/17/74/6517745c87d241e913b7acba5924ad3a.jpg",
            // "https://i.pinimg.com/236x/3e/8a/5f/3e8a5f3e4fc70b14a9142f5a13588b4a.jpg",
          id: 5,
          linkUrl: "",
        },
      ],
      searchField: "",
    };
  }
  state = {};
  render() {
    return (
      <div className="categorys">
        {this.state.cardCats.map(({ id, ...otherFields }) => (
          <Category key={id} {...otherFields} />
        ))}
      </div>
    );
  }
}

export default Categorys;
