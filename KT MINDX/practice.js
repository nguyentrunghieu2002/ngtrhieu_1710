function baitoan(){
     const a = document.getElementById("sothu1").value;
     const b = document.getElementById("sothu2").value;
     console.log(a);
     console.log(b);
     let list = document.getElementById("myList");
     for (let index = a; index < b; index++) {
    let t = checkSquareNumber(index)
     if (t != null) {
        console.log(t);
        let li = document.createElement("li");
        li.innerText = index;
        list.appendChild(li);
          }
     }
     
}


function checkSquareNumber(n) {
     
     if (n <= 1) {
          return undefined;
      }
      for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i == 0) {
              return undefined;
          }
      }
      return n
     
      
     }



