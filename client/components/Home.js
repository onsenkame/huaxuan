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
            <h1>Welcome to PokeMart!</h1>
            <p>The best place to buy Pokemon cards online!</p>
            </Col>
          </Row>
          <Row id="fanarts" className="aligh-items-center">
            <Col xs={12} md={6} xl={4}>
            <p>1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Col>
            <Col>
            <p>2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Col>
            <Col>
            <p>2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Col>
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
