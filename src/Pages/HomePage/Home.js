import React, { usetState } from "react";

export default function Home() {


  return (  
    <>
<script>
  THREE.ShapeUtils.triangulateShape = (function () {
          var pnlTriangulator = new PNLTRI.Triangulator();
          return function triangulateShape(contour, holes) {
              return pnlTriangulator.triangulate_polygon([contour].concat(holes));
          };
      })();
</script>

<div id="three-container"></div>

<div id="instructions">
  click and drag to control the animation
</div>
  </>
   )
};
