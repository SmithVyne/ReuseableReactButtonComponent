import React, {useState} from 'react';
import '../App.css';
import Button from "./Button";
import UpdateButton from "./UpdateButton";

const defaultStyle = {
  width: '81px',
  height: '36px',
  fontFamily: 'cursive',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '14px',
  lineHeight: '20px',
  borderRadius: '4px',
  border: 'none'
}

const outlineStyle = {
  border: '1px solid #3D5AFE',
  color: '#3D5AFE'
}

const textOnlyStyle = {
  border: "none",
  backgroundColor: "white"
}

function App() {
  const [buttonText, updateButtonText] =  useState("Default");
  // const [buttonProps, setButtonProps] = useState({});
  const [buttonStyle, setButtonStyle] = useState(defaultStyle);

  const handleButtonStyle = ({target: { value }}) => {
    // console.log(value)
    if (value === "Default") {
      setButtonStyle(defaultStyle);
    } else if(value === "Outline") {
      setButtonStyle(state => ({...state, ...outlineStyle}))
    } else if(value === "Text") {
      setButtonStyle(state => ({...state, ...textOnlyStyle}))
    }
  }

  return (
    <div className="App">
      <h1 id="page-title">Buttons</h1>
      <main>
        <Button buttonStyle={buttonStyle} buttonText={buttonText} />
        <UpdateButton onChange={handleButtonStyle}  />
      </main>
    </div>
  );
}

export default App;
