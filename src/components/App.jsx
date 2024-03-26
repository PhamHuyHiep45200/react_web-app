import React from "react";
import {
  App,
  Panel,
  View,
  Statusbar,
  Popup,
  Page,
  Navbar,
  NavRight,
  Link,
  Block,
  Toolbar,
} from "framework7-react";

import routes from "../routes";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/slice/couter.slice";

export default function (props) {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // Framework7 parameters here
  const f7params = {
    id: "io.framework7.testapp",
    name: "Framework7",
    theme: "auto",
    routes,
  };
  const plusCounter = () => {
    dispatch(increment());
  };
  const minusCounter = () => {
    dispatch(decrement());
  };

  return (
    <App params={f7params}>
      <View id="main-view" url="/" main className="ios-edges" />
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "44px",
          zIndex: 10000,
        }}
      >
        <Toolbar>
          <Link onClick={minusCounter}>minus</Link>
          {value ? value : "0"}
          <Link onClick={plusCounter}>add</Link>
        </Toolbar>
      </div>
    </App>
  );
}
