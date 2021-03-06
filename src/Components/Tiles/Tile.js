import React, { Component } from "react";
import "./TileStyles.css";
import img1 from "../../assets/Picture1.png";
export default class Tile extends Component {
  render() {
    const{img, title,text}=this.props
    return (
      <div className="Tiles">
        <img src={img} alt="" />
        <button>{title}</button>
        <p>{text}</p>
      </div>
    );
  }
}
