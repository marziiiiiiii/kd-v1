import React, { Component } from "react";
import "./card.styles.scss";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      type: "birthday",
      name: "تولد 1",
      title: "",
      fBirthURL:
        "https://i.pinimg.com/564x/97/a8/2f/97a82fe9c226b1346175707fe2db57d9.jpg",
      bBirthURL:
        "https://www.ohpaper.co.uk/environment/cache/images/0_0_productGfx_04f74b8cbf5cb75779a349944d9ac9bd.jpg",

      imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
    };
  }

  render() {
    return (
      <div className="card">
        <div>
          <h3 className="title">"کارت "{this.state.name}</h3>
        </div>
        <div className="content">
          <div className="card-prev">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${(this.state.fBirthURL)})` }}
            />
          </div>
          <div className="fill-form">djfhdfjkhfdjkhkjdjkddjk</div>
        </div>
      </div>
    );
  }
}

export default Card;
