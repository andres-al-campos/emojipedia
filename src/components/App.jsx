import React from "react";
import Card from "./Card";
import { emojipedia } from "../emojipedia";
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((props, idx) => {
          return <Card key={idx} id={idx} {...props} />;
        })}
      </dl>
    </div>
  );
}

export default App;
