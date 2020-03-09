import React from "react";
import "./button.css";
import btn from "./btn.png";
import btn2 from "./btn2.png";
import btn3 from "./btn3.png";
import { Button } from "@material-ui/core";
import Table from "../table/table";
class StarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeBtn: false, clickedBtn: false };
  }
  toggleBtn = now => this.setState({ clickedBtn: !now });
  render() {
    return (
      <div className="button col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <Button
          className="btnShadow"
          onMouseEnter={() => this.setState({ activeBtn: true })}
          onMouseLeave={() =>
            this.state.clickedBtn ? null : this.setState({ activeBtn: false })
          }
          onClick={() => this.toggleBtn(this.state.clickedBtn)}
        >
          {this.state.activeBtn ? (
            this.state.clickedBtn ? (
              <img
                className="img"
                src={btn3}
                style={{ marginTop: 20 }}
                alt=""
              ></img>
            ) : (
              <img
                className="img"
                src={btn2}
                style={{ marginTop: 10 }}
                alt=""
              ></img>
            )
          ) : (
            <img className="img" src={btn} alt=""></img>
          )}
        </Button>

        {this.state.clickedBtn ? <Table /> : null}
      </div>
    );
  }
}

export default StarButton;
