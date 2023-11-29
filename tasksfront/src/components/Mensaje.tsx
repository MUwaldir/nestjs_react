import React, { useEffect, useState } from "react";

function Mensaje() {
  const [conatdor, setConatdor] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const contador = () => {
    setConatdor(conatdor + 1);
  };

  useEffect(() => {
    setMensaje("hi wolrd");
  }, []);
  return (
    <div>
      Mensaje inexts Y conatdor
      <p style={{ color: "blue" }}>{mensaje}</p>
      <button onClick={contador} type="button">
        contador
      </button>
      <h1>{conatdor}</h1>
  
    </div>
  );
}

export default Mensaje;
