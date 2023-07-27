import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

/**
 * COMPONENT
 */
export const Conventions = (props) => {
  const { email } = props;
  const { isLoggedIn } = props;
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalImage, setModalImage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const titleSet = (title) => setModalTitle(title);
  const imageSet = (image) => setModalImage(image);

  document.addEventListener("contextmenu", (event) => event.preventDefault());

  const conPics = [
    {
      id: 1,
      title: "Mini Art Mart SF",
      img: "/img/MiniArtMartSF.jpg",
      alt: "Mini Art Mart San Franciscon"
    },
    {
      id: 2,
      title: "UCSD Anime Fest",
      img: "/img/UCSDAnimeFest.jpg",
      alt: "UCSD Anime Fest"
    },
    {
      id: 3,
      title: "UCSD Triton Gaming Expo",
      img: "/img/UCSDTritonGamingExpo.jpg",
      alt: "UCSD Triton Gaming Expo",
    },
  ];

  return (
    <main>
      <section className="container">
        {isLoggedIn ? (
          <div>
            <h3 className="anchor-container">Welcome, {email}</h3>
          </div>
        ) : (
          <div className="homepage ">
            <section className="banner" id="portfolio">
              <Container>
                <Row className="rowpad">
                  {conPics.map((art) => (
                    <Col xs={12} md={4} xl={4} key={art.id} className="colpad">
                      <div className="portfolio-effect-container caption" style={art.small}>
                        <img
                          src={art.img}
                          className="img-fluid square portfolio-effect"
                          alt={"Responsive image" + art.alt}
                          loading="lazy"
                          onClick={() => {
                            titleSet(art.title);
                            imageSet(art.img);
                            handleShow();
                          }}
                        />
                        <span>{art.title}</span>
                      </div>
                    </Col>
                  ))}
                  <Col xs={12} md={12} xl={12}></Col>
                </Row>
              </Container>
            </section>
            <Modal size="lg" show={show} onHide={handleClose} centered>
              <img src={modalImage} className="img-fluid" id="no-right-click" />
            </Modal>
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

export default connect(mapState)(Conventions);
