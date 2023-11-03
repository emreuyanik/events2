// const main = document.querySelector(".bgDiv")
// main.computedStyleMap.backgroundColor = "brown"
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// // Arka plan rengini değiştiren fonksiyon
// function changeBackgroundColor() {
//     const color = getRandomColor();
//     document.body.style.backgroundColor = color;
//     document.getElementById("colorName").textContent = color;
// }
// // Düğmeye tıklanıldığında veya üzerine gelindiğinde arka plan rengini değiştir
// const changeColorButton = document.querySelector('.btn-click');
// changeColorButton.addEventListener('click', changeBackgroundColor);
// changeColorButton.addEventListener('mouseover', changeBackgroundColor);






// const changecolor = () => {
//     const color = [
//       0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"
//     ];
//     let renk = "#";
//     for (let i = 0; i < 6; i++) {
//       renk += color[Math.floor(Math.random() * color.length)];
//     }
//     return renk;
//   };
  
//   const clickButton = document.querySelector(".btn-click");
//   const body = document.body;
  
//   clickButton.addEventListener("click", (e) => (body.style.backgroundColor = changecolor()));
const changecolor = () => {
    const color = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"
    ];
    let renk = "#";
    for (let i = 0; i < 6; i++) {
      renk += color[Math.floor(Math.random() * 16)];
    }
  
    const body = document.body;
    body.style.backgroundColor = renk;
  
    // Display the selected color in the element with id "colorText"
    document.getElementById("colorText").textContent = renk;
  
    return renk;
  };
  
  const clickButton = document.querySelector(".btn-click");
  const mouseoverButton = document.querySelector(".btn-over");
  
  clickButton.addEventListener("click", () => {
    const selectedColor = changecolor();
    document.getElementById("colorText").textContent = selectedColor;
  });
  
  mouseoverButton.addEventListener("mouseover", () => {
    const selectedColor = changecolor();
    document.getElementById("colorText").textContent = selectedColor;
  });
  