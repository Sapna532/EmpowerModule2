import React from "react";

function HeavyComponent() {
  console.log("HeavyComponent rendered");

  return (
    <div>
      <h3>Heavy UI Section</h3>
      <p>This component is expensive to render.</p>
    </div>
  );
}

export default React.memo(HeavyComponent);
