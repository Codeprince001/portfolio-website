import { Col } from "react-bootstrap";
import { Button } from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";
import { FiCode } from "react-icons/fi";
import { Link } from "@chakra-ui/react";

export const ProjectCard = ({ title, imgUrl, description, url, code }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="my project" />
        <div className="proj-txtx">
          <h4 className="project-title">{title}</h4>
          <div className="buttons">
            <Link href={url} isExternal>
              <Button rightIcon={<AiOutlineEye />} >Live Demo</Button>
            </Link>
            <Link href={code} isExternal>
              <Button rightIcon={<FiCode />} >Code</Button>
            </Link>
          </div>
        </div>
        <div style={{ padding: "10px" }}>{description}</div>
      </div>
    </Col>
  );
};