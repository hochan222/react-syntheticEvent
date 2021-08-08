import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.addEventListener("click", (e) => {
      // e.stopPropagation();
      console.log("[document] native dom event triggered");
    });
    const parentDiv = document.getElementById("parent");
    parentDiv.addEventListener("click", (e) => {
      // e.stopPropagation();
      console.log("[parent div] native dom event triggered");
    });
  }, []);
  const onParentClick = (e) => {
    // e.stopPropagation();
    console.log("[parent div] synthetic event triggered");
  };
  const onChildClick = (e) => {
    // e.stopPropagation();
    console.log("[child button] synthetic event triggered");
  };

  return (
    <div id="parent" onClick={onParentClick}>
      <button onClick={onChildClick}>child</button>
    </div>
  );
}
