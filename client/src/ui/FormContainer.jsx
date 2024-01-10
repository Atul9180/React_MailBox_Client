/*to wrap our forms in a container that is centered on the
 page and is only 6 columns wide on larger screens.*/

import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center my-5 ">
        <Col xs={12} md={6} className="card p-5 shadow">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormContainer;
