import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import "jest-styled-components";

import App, { Button } from ".";
const wrapper = mount(<App />);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("<Button> component", () => {
  it("should have background-color blue", () => {
    const color = "blue";
    expect(wrapper.find(Button)).toHaveStyleRule("background-color", color);
  });
  it("should have background-color green onClick", () => {
    const color = "green";
    wrapper.find(Button).simulate("click");
    expect(wrapper.find(Button)).toHaveStyleRule("background-color", color);
  });
});
