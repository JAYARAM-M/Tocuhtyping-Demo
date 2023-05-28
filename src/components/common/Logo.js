import React from "react";
import KeyboardAltIcon from "@mui/icons-material/KeyboardAlt";

const Logo = ({ isFocusedMode, isMusicMode }) => {
  return (
    <div className="header" style={{visibility: isFocusedMode ? 'hidden' : 'visible' }}>
      <h1>
        Touchtyping Types <KeyboardAltIcon fontSize="large" />
      </h1>
      <span className="sub-header">
        a Beautiful typing experience, just start typing
      </span>
    </div>
  );
};

export default Logo;
