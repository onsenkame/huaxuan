import React from "react";
import { connect } from "react-redux";

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
        <div className="homepage ">Hello</div>
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
