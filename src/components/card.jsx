import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "D:/work/frontProject/kd/src/components/card.css";
import ch from "D:/work/frontProject/kd/src/components/card.html";
import bImg from "D:/work/frontProject/kd/src/images/birthday/b3.jpg";
// import Palette from "react-palette";

class Card extends Component {

  constructor(props){
    super(props);
    
    this.setTitle= this.setTitle.bind(this);

  }


  state = {
    type: "birthday",
    name: "no name",
    title: "",
    fBirthURL:
      "https://i.pinimg.com/564x/97/a8/2f/97a82fe9c226b1346175707fe2db57d9.jpg",
    bBirthURL:
      "https://www.ohpaper.co.uk/environment/cache/images/0_0_productGfx_04f74b8cbf5cb75779a349944d9ac9bd.jpg",
  };

//   var __html = require('./card.html');
// var template = { __html: __html };

  //   var ___html = "card.html";
  // var template = { __html: __html };

  render() {
    return (
      <React.Fragment>

        <div className="bgstyle img-responsive"></div>
        <div className=" text-center content m-4">
          <div>
            <h3 class="m-4">{this.state.type} card </h3>
          </div>

          <div className="row">
            <div className="col">
              <p>fill the items</p>
              <form>
                <div>
                  <div class="m-2">
                    <input
                      id="theTitle"
                      type="text"
                      value={this.state.title}
                      onChange={this.setTitle}
                      class="form-control"
                      placeholder="Title"
                    />
                    
                  </div>
                  <div class="m-2">
                    <input
                      id="theName"
                      type="text"
                      class="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div class=" m-2">
                  <label for="exampleFormControlFile1">
                    upload image (optional)
                  </label>
                  <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>
              </form>
            </div>
            <div className="col">
              <p>front</p>
              <div className="d-block">
                <img className="rounded img-responsive" src={this.state.fBirthURL} alt="front" />
                <div className="" >{this.state.title} jfjkedfh</div>
                
              </div>
              
            </div>
          </div>
        </div>
        
















        <div className="text-center content m-4">
          <div className="row">
            <div className="col">
              <p>fill the items</p>
              <form>
                <div>
                  <div class="m-2">
                    <input
                      id="theThank"
                      type="text"
                      value={this.state.title}
                      class="form-control"
                      placeholder="thank you for attention"
                    />
                    <h7>{this.setTitle}</h7>
                  </div>
                  <div class="m-2">
                    <input
                      id="theFrom"
                      type="text"
                      class="form-control"
                      placeholder="from felani"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col">
              <p>back</p>
              <img className="rounded " src={this.state.bBirthURL} alt="back" />
            </div>
          </div>
        </div>



        



        {/* <div className="co">
                <img className="rounded " src={this.state.fBirthURL} alt="front" />
                <div className="bottom-left">Bottom Left</div>
                <div className="top-left">Top Left</div>
                <div className="top-right">Top Right</div>
                <div className="bottom-right">Bottom Right</div>
                <div className="centered">Centered</div>
              </div> */}


      </React.Fragment>
    );
  }

  marziAlarm() {
    const n = document.getElementById("theName");
    return n === "marzi" ? "warning " : " your name n ";
  }

  setTitle(event) {
    
    this.setState({title: event.target.value})

  }
}
export default Card;

// <div className="row">
//                 <h7 className="col">enter title : </h7>
//                 <input className="col" id="theTitle" type="text" />
//               </div>
//               <div className="row">
//                 <h7 className="col">enter name : </h7>
//                 <input className="col" id="theName" type="text" />
//               </div>
//               <span>{this.marziAlarm}</span>

/* <div dangerouslySetInnerHTML={template} /> */
/* <Palette image={this.state.burl}>
          {(palette) => ( 
            <div style={{ color: palette.vibrant }}>
              Text with vibrant color
            </div>
          )}
        </Palette> */
