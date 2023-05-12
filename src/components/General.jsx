import React, { useState } from "react";
import { Form, FormGroup, Input, Row, Col } from "reactstrap";
import "./FormComponent.css";
export default function General() {
  const position = [
    "Software application developer",
    "Web developer",
    "Computer systems engineer",
    "Database administrator",
    "Software quality assurance (QA) engineer",
  ];
  const employee = [1, 2, 3, 4, 5];

  const [title, setTitle] = useState("");
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [Position, setPosition] = useState("");
  const [Company, setCompany] = useState("");
  const [Business, setBusiness] = useState("");
  const [Employee, setEmployee] = useState("");

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const FNameChange = (e) => {
    setFName(e.target.value);
  };
  const LNameChange = (e) => {
    setLName(e.target.value);
  };
  const PositionChange = (e) => {
    setPosition(e.target.value);
  };
  const companyChange = (e) => {
    setCompany(e.target.value);
  };
  const BusinessChange = (e) => {
    setBusiness(e.target.value);
  };
  const EmployeeChange = (e) => {
    setEmployee(e.target.value);
  };

  return (
    <div>
      <h3>General Information</h3>
      <Form>
        <Row>
          <FormGroup>
            <Input
              id="Title"
              name="Title"
              placeholder="Title"
              onChange={titleChange}
            />
          </FormGroup>
          <Col md={6}>
            <FormGroup>
              <Input
                id="FName"
                name="FName"
                placeholder="First Name"
                type="Text"
                onChange={FNameChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                id="LName"
                name="LName"
                placeholder="Last Name"
                type="LName"
                onChange={LNameChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Input
            id="Country"
            name="Country"
            type="select"
            onChange={PositionChange}
          >
            <option hidden>Position</option>
            {position.map((position) => (
              <option>{position}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Input
            id="Company"
            name="Company"
            placeholder="Company"
            onChange={companyChange}
          />
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Input
                id="BusinessArena"
                name="BusinessArena"
                placeholder="Business Arena"
                onChange={BusinessChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                id="employee"
                name="employee"
                type="select"
                onChange={EmployeeChange}
              >
                <option hidden>Employee</option>
                {employee.map((employee) => (
                  <option>{employee}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <div className="generalResult">
        <ul>
          <li>Title:{title}</li>
          <li>
            Name:{FName} {LName}
          </li>
          <li>Position:{Position}</li>
          <li>Company:{Company}</li>
          <li>Business Arena:{Business}</li>
          <li>Employee:{Employee}</li>
        </ul>
      </div>
    </div>
  );
}
