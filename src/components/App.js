import React, {useState} from 'react';
import '../App.css';
import Button from "./Button";
import UpdateButton from "./UpdateButton";



function App() {
  const [buttonProps, setButtonProps] = useState({
    variant: 'default',
    disabled: false,
    disableShadow: false
  });
  
  return (
    <div className="App">
      <h1 id="page-title">Buttons</h1>
      <main>
        {/* <Button variant='text' startIcon='face' endIcon='local_grocery_store' color='primary' /> */}
        <Button {...buttonProps} />
        <UpdateButton buttonProps={buttonProps} setButtonProps={setButtonProps} />
      </main>
    </div>
  );
}

export default App;
