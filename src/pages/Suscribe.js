import React from 'react';
import TopNavbar from "../components/profile-nav/navbar"
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../styles/Suscribe.css';

function Sus() {
  const items = [
    { Name: "Artificial intelligence" },
    { Name: "Machine Learning" },
    { Name: "Cloud Computing" },
    { Name: "Data Science" },
    { Name: "Robotics" },
    { Name: "Block Chain" },
    { Name: "IOT" },
    { Name: "Nano Tech" },
  ]
  return (
    <div className="subscribebutton" style={{ backgroundColor: "#131111", width: "100%", height: "100vh" }}>
      <div class="wrapper container">
        <div>
          <TopNavbar />
        </div>
        <Row style={{ marginTop: "100px" }}>
          {
            items.map((item, key) => {
              return (
                <Col id={key} sm="6" style={{ marginTop: "20px" }}>
                  <Card body>
                    <CardTitle>{item.Name}</CardTitle>
                    <button type="button" class="btn sus-btn subscribebutton">Subscribe</button>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </div>
  )
}

export default Sus;