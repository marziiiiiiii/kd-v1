import React, { Component } from "react";
import CardDemo from "./cardDemo";

// export enum Sizes{ //https://stackoverflow.com/questions/49746638/how-to-use-enum-as-props-in-react-typescript
//   Small,
//   Large
// }                    // todo


class cards extends Component {

  // constructor(props){
  //   super(props);
    
  //   this.renderCardDemos= this.renderCardDemos.bind(this);

  // }


  state = {
    cardDemos: [
      { id: 1, tag: "birth" },
      { id: 2, tag: "wed" },
      { id: 3, tag: "birth" },
      { id: 4, tag: "birth" },
      { id: 5, tag: "wed" },
      { id: 6, tag: "wed" },
      { id: 7, tag: "wed" },
      { id: 8, tag: "wed" },
      { id: 9, tag: "birth" },
    ],
  };

  handleDelete = (cardId) =>{

    const cardDemos = this.state.cardDemos.filter(c => c.id !==cardId)
    this.setState({ cardDemos})
  } 


  renderCardDemos(){
    if (this.state.cardDemos.length===0) return( <p>there is no card!</p> );
    return (
    <div className="d-flex flex-wrap justify-content-center">
              {this.state.cardDemos.map((c) => (
                <CardDemo key={c.id} card={c} onDelete={this.handleDelete}/>
              ))}
            </div>) ;
  }

  render() {
    return (
      <div>
      {this.renderCardDemos()}
      </div>
    );
  }
}

export default cards;
