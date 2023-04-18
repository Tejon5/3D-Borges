//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const writter = document.querySelector(".writter img");
const contact = document.querySelector(".contact");
const description = document.querySelector(".info h3");
const button_container = document.querySelector(".button-container");


//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) /25;
  let yAxis = (window.innerHeight / 2 - e.pageY)/25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

const changeImage = (num) =>{
  let img = document.getElementById('image');

  if(num===1){
    img.src = './elotro.png'
  }else if(num===2){
    img.src = './jborges2.png'
  }else{
    img.src = './pierremenard.png'
  }
}

const changeText = (num) =>{
  let quote = document.getElementById('quote');
  let btn1 = document.getElementById('btn1');
  let btn2 = document.getElementById('btn2');
  let btn3 = document.getElementById('btn3')

  if(num===1){
    quote.innerHTML = 'El tiempo se bifurca permetuamente hacia innumerables futuros. En uno de ellos soy su enemigo.'
    quote.style.color= 'black';
    btn1.style.backgroundColor = 'gold';
    btn1.style.color = 'black';
  }else if(num===2){
    quote.innerHTML = 'Facilmente aceptamos la realidad, acaso porque intuimos que nada es real.';
    quote.style.color= 'black'
    btn2.style.backgroundColor = 'gold';
    btn2.style.color = 'black';
  }else{
    quote.innerHTML = 'Todo hombre debe ser capaz de todas las ideas y entiendo que en el porvenir lo sera.';
    quote.style.color= 'black'
    btn3.style.backgroundColor = 'gold';
    btn3.style.color = 'black';
  }
}

//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  writter.style.transform = "translateZ(200px) rotateZ(25deg)";
  description.style.transform = "translateZ(125px)";
  button_container.style.transform = "translateZ(100px)";
  contact.style.transform = "translateZ(75px)";
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  writter.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  button_container.style.transform = "translateZ(0px)";
  contact.style.transform = "translateZ(0px)";
});