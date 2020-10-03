import React, { Component } from "react";
import "./cardDemoList.css";
import Card from "../card/card";

import CardDemo from "../cardDemo/cardDemo";

// export enum Sizes{ //https://stackoverflow.com/questions/49746638/how-to-use-enum-as-props-in-react-typescript
//   Small,
//   Large
// }                    // todo


class cardDemoList extends Component {

  constructor(props){
    super();
    
    // this.renderCardDemos= this.renderCardDemos.bind(this);

  }

  openCard = card => {
    console.log("omadam")
    return  (<div>
      <Card key={card.id}/>
    </div>) ;
    
  }

  render() {
    // const elem= this.renderCardDemos();
    return (
      <div className="card-demo-list">
        {this.props.cDemos.map((c) => (
        <CardDemo key={c.id} card={c} onDelete={this.handleDelete} onOpen={this.openCard}/>
        ))}
      </div>
    );
  }
}



export default cardDemoList;




  // renderCardDemos(){
  //   console.log(this.props.cardDemos);
  //   if (this.props.cDemos===0) return( <p>there is no card!</p> );
  //   return (
  //   <div className="d-flex flex-wrap justify-content-center m-8">
  //              {this.props.cardDemos.map((c) => (
  //                <CardDemo key={c.id} card={c} onDelete={this.handleDelete} onOpen={this.openCard}/>
  //             ))}
  //           </div>
  //   );
  // }