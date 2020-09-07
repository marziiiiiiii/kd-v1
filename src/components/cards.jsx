import React, { Component } from "react";
import CardDemo from "./cardDemo";

class cards extends Component {
  state = {
    cardDemos: [
      { id: 1, val: 0 },
      { id: 2, val: 0 },
      { id: 3, val: 0 },
      { id: 4, val: 0 },
      { id: 3, val: 0 },
      { id: 4, val: 0 },
      { id: 4, val: 0 },
      { id: 3, val: 0 },
      { id: 4, val: 0 },
    ],
  };
  render() {
    return (
      <div class="d-flex flex-wrap justify-content-center">
        {this.state.cardDemos.map((c) => (
          <CardDemo key={cards.id} />
        ))}
      </div>
    );
  }
}

export default cards;
