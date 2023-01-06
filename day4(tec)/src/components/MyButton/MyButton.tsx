import React from "react";


const MyButton = ({ disabled = false, onClick }) => {
  return (
    <div>
      <button disabled={disabled} onClick={onClick}>
        Button
      </button>
    </div>
  );
};

MyButton.propTypes = {
  disabled: propTypes.bool,
  onClick: ProtoType.func,
};

export default MyButton;
