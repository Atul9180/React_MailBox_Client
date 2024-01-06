import { Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="fixed-bottom"
      style={{
        backgroundColor: "#dcdcdc7d",
        boxShadow: "0 -4px 6px -6px #000",
      }}
    >
      <Row className="p-2">
        <h5 className="text-center">Made with &hearts; by Atul</h5>
      </Row>
    </footer>
  );
};

export default Footer;
