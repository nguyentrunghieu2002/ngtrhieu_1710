function getTwoNumber() {
     const a = document.getElementById("soThuNhat").value;
     const b = document.getElementById("soThuHai").value;
     // localStorage.setItem("input1", a)
     // a.value = localStorage.getItem("input1");
     console.log(a);
     console.log(b);
     let list = document.getElementById("myList");
     for (let index = a; index < b; index++) {
         const t = checkSquareNumber(index)
         if (t != null) {
             console.log(t);
             let li = document.createElement("li");
             li.innerText = index;
             list.appendChild(li);
         }
     }
 
 }
 function randomColor() {
     var randomColor = Math.floor(Math.random() * 16777215).toString(16);
     console.log(randomColor);
     const rgbColor = document.getElementById("randomColorRgb");
     rgbColor.value = componentToHex(randomColor)
     const bodyComponent = document.getElementById("body");
     bodyComponent.style.backgroundColor = `#${randomColor}`;
 }
 function checkSquareNumber(n) {
     const i = Math.sqrt(n);
     if (Math.ceil(i) === i) {
         return n;
     }
 }
 
 function componentToHex(c) {
     var hex = c.toString(16);
     return hex.length == 1 ? "0" + hex : hex;
 }
 
 function rgbToHex(r, g, b) {
     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
 }
 
 function copyColor() {
     // Get the text field
     var copyText = document.getElementById("randomColorRgb");
   
     // Select the text field
     copyText.select();
     copyText.setSelectionRange(0, 99999); // For mobile devices
   
     // Copy the text inside the text field
     navigator.clipboard.writeText(copyText.value);
     
     // Alert the copied text
     alert("Copied the text: " + copyText.value);
   }