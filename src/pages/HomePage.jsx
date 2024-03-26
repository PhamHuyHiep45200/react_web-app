import React, { useEffect } from "react";
import { Page, Row, Col, Card } from "framework7-react";
import { useDispatch, useSelector } from "react-redux";
import { setRouter } from "../store/slice/common.slice";

export default function HomePage({ f7router }) {
  const { router } = useSelector((state) => state.common);
  const dispatch = useDispatch();

  const redirect = () => {
    router.navigate("/about/");
  };

  useEffect(() => {
    if (f7router) {
      dispatch(setRouter(f7router));
    }
  }, [f7router]);

  const carts = [
    {
      title: "anh? dep",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjozcJ65Eix-CxjLqTvcI7Ivjb0jTDZZxLjA&s",
    },
    {
      title: "anh? dep",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjozcJ65Eix-CxjLqTvcI7Ivjb0jTDZZxLjA&s",
    },
    {
      title: "anh? dep",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjozcJ65Eix-CxjLqTvcI7Ivjb0jTDZZxLjA&s",
    },
  ];

  return (
    <Page>
      <Row>
        {carts.map((e, i) => (
          <Col width={50} key={i}>
            <div className="card-container" onClick={redirect} >
              <Card>
                <img src={e.img} style={{ width: "100%" }} alt="" />
                <div className="p-5">{e.title}</div>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Page>
  );
}
