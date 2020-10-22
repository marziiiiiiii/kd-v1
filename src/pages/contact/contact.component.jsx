import React from "react";
import ReactDOM from "react-dom";
import { setRTLTextPlugin } from "mapbox-gl";
import ReactMapboxGl from "react-mapbox-gl";
import "./contact.styles.scss";

setRTLTextPlugin(
  "https://www.parsimap.com/scripts/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.0/mapbox-gl-rtl-text.js"
);

const Map = ReactMapboxGl({ accessToken: "parsimap.accessToken" });

const Contact = () => (
  <div className="contact">
    <a className="a" href="http://kartdavat.com">
      تماس با ما
    </a>
    <div className="address">
      <Map
        style="https://www.parsimap.com/styles/street.json"
        containerStyle={{ height: "40vh", width: "40vw", borderRadius: "10px" }}
        center={[51.4469, 35.7419] }
        zoom={[15]}
      />
      <div className="adress-with-text">
        <h1>دفتر مرکزی</h1>
        <h4>خیابان فلان کوچه بیسار پلاک 0</h4>
      </div>
    </div>
  </div>
);
export default Contact;


//[51.4469, 35.7419]    sed khandan
//[51.41, 35.7575]     vanak