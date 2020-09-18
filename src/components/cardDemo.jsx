import React, { Component } from "react";
import "D:/work/frontProject/kd/src/components/cardDemo.css";
import Card from "./card";

class CardDemo extends Component {
  
  constructor(props) {
    super(props);
    this.openCard = this.openCard.bind(this);
  }
  
  state = {
    // opened: false,
    tag : this.props.card.tag ,
    url:
      "https://i.pinimg.com/564x/73/07/35/730735b57fad8cebf3fd3f1ccdabf93e.jpg",
  };

  

  // openCard = card => {
    
  //   this.setState({opened : true});
  //   console.log(this);
    
  // }

  render() {
    return (
      
      <div className="demo m-2 d-flex justify-content-center">
        <img
          onClick={() => this.openCard(this.props.card)}
          className="demo d-img "
          src={this.state.url}
          alt=""
        />
        <button className="" onClick={ () =>this.props.onDelete(this.props.card.id)} className="btn btn-danger btn-sm m-2">del</button>
        {/* {this.state.c && <Card />} */}


        {/* {this.state.showComponent ? <Card /> : <p>ajaab</p>} */}
      </div>
    );
  }
}

export default CardDemo;
