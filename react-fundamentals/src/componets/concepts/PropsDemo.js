import { useState } from "react";
import PropTypes from "prop-types";

const PropsDemo = () => {
  const [color, setColor] = useState("white");
  const [backgroundColor, setBackgroundColor] = useState("purple");
  const [borderRadius, setBorderRadius] = useState("5px");
  const [borderStyle, setBorderStyle] = useState("dashed");
  const [display, setDisplay] = useState("inline-block");
  const [width, setWidth] = useState("350px");
  const [textAlign, setTextAlign] = useState("center");

  let styles = {
    color: color,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
    display: display,
    width: width,
    textAlign: textAlign,
  };

  const toggleColor = () => {
    color === "white" ? setColor("pink") : setColor("white");
  };
  const toggleBgColor = () => {
    backgroundColor === "purple"
      ? setBackgroundColor("green")
      : setBackgroundColor("purple");
  };
  const toggleBorderRadius = () => {
    borderRadius === "5px" ? setBorderRadius("50px") : setBorderRadius("5px");
  };
  const toggleBorderStyle = () => {
    borderStyle === "dashed"
      ? setBorderStyle("solid")
      : setBorderStyle("dashed");
  };

  return (
    <div className="main">
      <div className="mainDiv">
        <div style={styles}>
          <FunctionalComponent
            string="will this display?"
            function={toggleColor}
            selectedStyle={color}
          />
          <FunctionalComponent
            string="Here is my 2nd string"
            function={toggleBgColor}
            selectedStyle={backgroundColor}
          />
          <FunctionalComponent
            string="will this one work also?"
            function={toggleBorderRadius}
            selectedStyle={borderRadius}
          />
          <FunctionalComponent
            string="Haha, this is working"
            function={toggleBorderStyle}
            selectedStyle={borderStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
    return (
        <div>
      <p>{props.string}</p>
      <button onClick={props.function}>Press Me!!</button>
      <TinyComponent selectedStyle={props.selectedStyle} />
    </div>
  );
};
const TinyComponent = (props) => {
  return (
    <div>
      <p>The current style is : {props.selectedStyle} </p>
    </div>
  );
};

FunctionalComponent.defaultProps = {
  string: 'this is cool',
  function: () => console.log('this part was not clear...'),
  selectedStyle: 'What style?',
};

FunctionalComponent.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired,
  };