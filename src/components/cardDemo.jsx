import React, { Component } from "react";
import "C:/Users/marzieh/Desktop/kd/kd-v1/kd/src/components/cardDemo.css";
import Card from "./card";

class CardDemo extends Component {
  state = {
    c: false,
    url:
      "https://i.pinimg.com/564x/73/07/35/730735b57fad8cebf3fd3f1ccdabf93e.jpg",
  };
  constructor(props) {
    super();
    // this.state = {
    //   showComponent: false,
    // };
    this.openCard = this.openCard.bind(this);
  }

  openCard() {
    this.state.c = true;
    console.log(this);
    // this.setState({
    //   showComponent: true,
    // });
  }

  render() {
    return (
      <div className="demo m-2 d-flex justify-content-center">
        <img
          onClick={this.openCard}
          class="demo "
          src={this.state.url}
          alt=""
        />
        {this.state.c && <Card />}

        {/* {this.state.showComponent ? <Card /> : <p>ajaab</p>} */}
      </div>
    );
  }
}

export default CardDemo;
