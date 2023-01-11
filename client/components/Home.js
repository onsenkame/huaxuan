import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { email } = props;
  const { isLoggedIn } = props;
  console.log(props.auth);

  const fanart = [
    {
      id: 1,
      title: 'Exusiai',
      img: '/img/huaxuanimg/v2/Fanarts/Arknights Exusiai 11x17 (print).jpg'
    },
    {
      id: 2,
      title: 'Power',
      img: '/img/huaxuanimg/v2/Fanarts/CSM Power 11.9.22.jpg'
    },
    {
      id: 3,
      title: 'Reze',
      img: '/img/huaxuanimg/v2/Fanarts/CSM Reze 11.17.22.jpg'
    },
    {
      id: 4,
      title: 'Enkidu',
      img: '/img/huaxuanimg/v2/Fanarts/Enkidu (print).jpg'
    },
    {
      id: 5,
      title: 'Faputa',
      img: '/img/huaxuanimg/v2/Fanarts/Made in Abyss Faputa 10.26.22.jpg'
    },
    {
      id: 6,
      title: 'Nanachi',
      img: '/img/huaxuanimg/v2/Fanarts/Made in Abyss Nanachi.jpg'
    },
    {
      id: 7,
      title: 'Merlins',
      img: '/img/huaxuanimg/v2/Fanarts/Merlins 11x17.jpg'
    },
    {
      id: 8,
      title: 'Scarlet',
      img: '/img/huaxuanimg/v2/Fanarts/Scarlet 130k.jpg'
    },
    {
      id: 9,
      title: 'Exusiai',
      img: '/img/huaxuanimg/v2/Fanarts/Arknights Exusiai 11x17 (print).jpg'
    },
  ]

  return (
    <main>
      <section className="container">
      {isLoggedIn ? (
        <div>
          <h3 className="anchor-container">Welcome, {email}</h3>
        </div>
      ) : (
        <div className="homepage ">
        <section className="banner" id="home">
        <Container>
          <Row>
            <Col className="fanart-banner">
            <h1 className="center">Fanarts</h1>
            <p className="center">A collection of fanarts</p>
            </Col>
          </Row>
          <Row id="fanarts" className="aligh-items-center">
            {fanart.map((art) => (
            <Col xs={12} md={6} xl={4} key={art.id}>
              <img src={art.img} className="img-fluid square" alt="Responsive image"/>
            </Col>))}
          </Row>
        </Container>
      </section>
      </div>
      )}
    </section>
    </main>
  );
};

/**
 * CONTAINER
 */

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    email: state.auth.email,
    auth: state.auth,
  };
};

export default connect(mapState)(Home);
