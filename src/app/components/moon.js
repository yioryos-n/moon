import React, { useState, useEffect } from "react";

export function Moon() {
  /*
    The moon is drawn by one "dynamic" curve-that is controlled by the user scroll-, one "static" curve-that only changes on Full Moon and New Moon-
    and one straight line that goes through the middle of the moon from top to bottom that was implemented in order to cover a line that was created
    by the other two curves. All curves and lines are implemented using svg paths.

    The fill color of the "dynamic" curve changes from dark to light and light to dark on the first and last quarter respectivelly.

    The stroke color of the central line also changes from dark to light according to the position of the dynamic curve.

    The phaseLabel tracks the different moon phases.
  */
  const dark = "#08091F";
  const light = "#EEF0F2";
  
  const [virtualScroll, setVirtualScroll] = useState(0);  //scroll controls the moon phase by controlling the "dynamic" curve.
  const [halfPointDynamic, setHalfPointDynamic] = useState(0); //controls the orientation of the path.
  const [halfPointStatic, setHalfPointStatic] = useState(0); //controls the orientation of the path.
  const [fillDynamic, setFillDynamic] = useState(dark); //controls the fill of the "dynamic" path.
  const [strokeHalf, setStrokeHalf] = useState(dark); //controls the stroke color of the "central" path.
  const [phaseLabel, setPhaseLabel] = useState("New Moon") //controls the text of the moon phase label.
  let index = 0; //index points to a position in the "v" array.

  let value; //values contains the value of the current position in the "v" array.

  // v contains the values that control the way the "dynamic" curve is drawn.
  const v = [60, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76.5, 78, 79.5, 81, 82.5, 84, 85.5, 87, 88.5, 90,
    92, 94, 96, 98, 100, 100.05, 100.1, 100.2, 100.3, 100.5, 101, 101.5, 102, 102.5, 103, 103.7, 104.4, 105.2, 106, 107, 108, 109, 110,
    111.5, 113.2, 115, 117, 119, 121, 123, 125, 127, 130, 133, 137, 142, 148, 155, 163, 172, 182, 197, 220, 250, 275, 300, 350,
    400, 500, 1000, 10000];

  /*
  the reversed array is used to simulate the waxing gibbous and waning crescent phases. The "dynamic" curve
  grows" from the middle of the moon shape towards the edge of the shape.
  */
  const vreversed = v.toReversed(); 

  //listener for user wheel event and touch event.
  useEffect(() => {
    const handleWheel = (e) => {
      setVirtualScroll((prev) => Math.max(prev, prev + e.deltaY));
    };
  
    let touchStartY = 0;

  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const touchY = e.touches[0].clientY;
    const deltaY = touchStartY - touchY;

    // Αν χρειάζεται κάνε scale, π.χ. deltaY * 1.5
    setVirtualScroll((prev) => Math.max(0, prev + deltaY));
    touchStartY = touchY; // για συνεχή ροή
  };

  window.addEventListener('wheel', handleWheel);
  window.addEventListener('touchstart', handleTouchStart);
  window.addEventListener('touchmove', handleTouchMove);

  return () => {
    window.removeEventListener('wheel', handleWheel);
    window.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchmove', handleTouchMove);
  };
}, []);

  index = Math.floor(virtualScroll/108); //maps the wheel movement to an array index.

  if (index >= 0 && index < v.length - 1 && halfPointDynamic == 0 && halfPointStatic == 0) {
    //new moon => waxing crescent
    value = v[index];
    if (index > 1 && phaseLabel=="New Moon") {
      setPhaseLabel("Waxing Crescent");
    }
  } else if (index == v.length - 1 && halfPointDynamic == 0 && halfPointStatic == 0) {
    //waxing crescent => first quarter
    value = v[index];
    setVirtualScroll(0);
    setHalfPointDynamic(1);
    setFillDynamic(light);
    setStrokeHalf(light);
    setPhaseLabel("First Quarter");
  } else if (index >= 0 && index < v.length - 1 && halfPointDynamic == 1 && halfPointStatic == 0) {
    // first quarter => wawing gibbous
    value = vreversed[index];
    if (index > 1 && phaseLabel=="First Quarter") {
      setPhaseLabel("Waxing Gibbous");
    }
  } else if (index == v.length - 1 && halfPointDynamic == 1 && halfPointStatic == 0) {
    //waxing gibbous => full moon
    value = vreversed[index];
    setVirtualScroll(0);
    setHalfPointDynamic(0);
    setHalfPointStatic(1);
    setPhaseLabel("Full Moon");
  } else if (index >= 0 && index < v.length-1 && halfPointDynamic == 0 && halfPointStatic == 1) {
    //full moon => waning gibbous
    value = v[index];
    if (index > 1 && phaseLabel=="Full Moon") {
      setPhaseLabel("Waning Gibbous");
    }
  } else if (index == v.length - 1 && halfPointDynamic == 0 && halfPointStatic == 1) {
    //waning gibbous => last quarter
    value = v[index];
    setVirtualScroll(0);
    setHalfPointDynamic(1);
    setFillDynamic(dark);
    setStrokeHalf(dark);
    setPhaseLabel("Last Quarter");
  } else if (index >= 0 && index < v.length-1 && halfPointDynamic == 1 && halfPointStatic == 1){
    //last quarter => waning crescent
    value = vreversed[index];
    if (index > 1 && phaseLabel=="Last Quarter") {
      setPhaseLabel("Waning Crescent");
    }
  } else if (index == v.length - 1 && halfPointDynamic == 1 && halfPointStatic == 1) {
    //waning crescent => new moon
    value = vreversed[index];
    setVirtualScroll(0);
    setHalfPointDynamic(0);
    setHalfPointStatic(0);
    setPhaseLabel("New Moon");
  }

  return (
    //the svg paths were drawn following this tutorial: https://svg-tutorial.com/svg/arc/
    <div className="flex flex-col">
      <svg height="220" width="220" viewBox="0 0 220 220" className="rotate-y-180">
        <path
          d={"M 110 10 A 60 60 0 0 "+halfPointStatic+" 110 210"}
          fill={light}
          stroke={dark}
          strokeWidth="1"
        />
        <path
          d={"M 110 10 A 60 "+value+" 0 0 "+halfPointDynamic+" 110 210"}
          fill={fillDynamic}
          stroke={dark}
          strokeWidth="1"
        />
        <path
          d={"M 110 11 A 60 10000 0 0 0 110 209"}
          fill={dark}
          stroke={strokeHalf}
          strokeWidth="0.8"
        /> 
      </svg>
      <h2 className="text-center text-shadow-small opacity-80">{phaseLabel}</h2>
    </div>
  )
}