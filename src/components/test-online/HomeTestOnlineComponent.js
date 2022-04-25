import React, { useEffect } from "react";
import FooterComponent from "../footer/FooterComponent";
import { Link } from "react-router-dom";
import { main1, main2 } from "../../common/js/main";
import TestOnlineComponent from "./TestOnlineComponent";
import HelloTestComponent from "./HelloTestComponent";
import { useSelector, useDispatch } from "react-redux";
import NavbarPublic from "../navbar/NavbarPublic";


function HomeTestOnlineComponent(props) {
  const start = useSelector((state) => state.testOnline.start);
  useEffect(() => {
    main1();
    main2();
  }, []);
  return (
    <>
      <NavbarPublic/>
      <HelloTestComponent />
      {start && <TestOnlineComponent />}
      <FooterComponent />
    </>
  );
}

export default HomeTestOnlineComponent;
