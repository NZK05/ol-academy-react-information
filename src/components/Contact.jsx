import React, { useState } from "react";
import { Form, FormGroup, Input, Row, Col, Button } from "reactstrap";
import country from "country-list-js";
export default function Contact() {
  var country_names = country.names();

  const [street, setStreet] = useState("");
  const [information, setInformation] = useState("");
  const [zip, setZip] = useState("");
  const [code, setCode] = useState("");
  const [number, setNumber] = useState("");
  const [countries, setCountries] = useState("");
  const [email, setEmail] = useState("");

  const streetChange = (e) => {
    setStreet(e.target.value);
  };
  const informationChange = (e) => {
    setInformation(e.target.value);
  };
  const zipChange = (e) => {
    setZip(e.target.value);
  };
  const codeChange = (e) => {
    setCode(e.target.value);
  };
  const numberChange = (e) => {
    setNumber(e.target.value);
  };
  const countryChange = (e) => {
    setCountries(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h3>Contact Details</h3>
      <Form>
        <Row>
          <FormGroup>
            <Input
              id="street"
              name="street"
              placeholder="Street + Nr"
              onChange={streetChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="AdditionalInformation"
              name="AdditionalInformation"
              placeholder="Additional Information"
              onChange={informationChange}
            />
          </FormGroup>
          <Col md={6}>
            <FormGroup>
              <Input
                id="zip"
                name="zip"
                placeholder="Zip"
                type="Text"
                onChange={zipChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                id="country"
                name="country"
                type="select"
                onChange={countryChange}
              >
                <option hidden>Country</option>
                {country_names.map((country_names) => (
                  <option>{country_names}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                id="code"
                name="code"
                placeholder="code+"
                type="Text"
                onChange={codeChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                id="number"
                name="number"
                placeholder="Number"
                type="Text"
                onChange={numberChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Input
            id="email"
            name="email"
            placeholder="Your Email"
            onChange={emailChange}
          />
        </FormGroup>
      </Form>
      <ul>
        <li>Street:{street}</li>
        <li>Additional Information:{information}</li>
        <li>Zip:{zip}</li>
        <li>Country:{countries}</li>
        <li>
          Number:{code} {number}
        </li>
        <li>Email:{email}</li>
      </ul>
      <Form>
        <FormGroup>
          <Button color="primary">Register</Button>
        </FormGroup>
      </Form>
    </div>
  );
}
