 function changeColor() {
      // 1. DOM se element uthao
      let heading = document.getElementById("heading");
      console.dir(heading);

      // 2. Uska color change karo
      heading.style.color = "orange";

      // 3. Console me bhi print karo
      console.log("Color changed to orange");

      let firstEl = document.querySelector("#myId");
      console.dir(firstEl);
    }