import React from "react";

function Blob() {
  return (
    <div className="fixed inset-0 overflow-hidden ">
      <div 
        className="absolute top-0 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 h-[90vh] w-[120vw] max-w-[1200px] rounded-full bg-orange-400/60 blur-[1000px]"
      />
    </div>
  );
}

export default Blob;
