import "./style.css";

const MainRoot = document.getElementById("app");
MainRoot.className = "bg-green-200 h-[100vh] flex flex-col justify-center items-center";

const form = document.createElement("form");
form.className = "bg-orange-300 w-[60vw] p-[1vw] space-y-[1vw]";
const titulo = document.createElement("h2");
titulo.innerText = "FORMULARIO";

const divPreguntas = document.createElement("div");

const divName = document.createElement("div");
const labelName = document.createElement("label");
labelName.innerText = "INGRESE SU NOMBRE:";
const inputName = document.createElement("input");
inputName.className = "bg-red-500 text-white w-full h-[3vw]";

const divDescription = document.createElement("div");
const labelDescription = document.createElement("label");
labelDescription.innerText = "INGRESE DESCRIPCION:";
const inputDescription = document.createElement("input");
inputDescription.className = "bg-red-500 text-white w-full h-[3vw]";

inputDescription;
const divPrice = document.createElement("div");
const labelPrice = document.createElement("label");
const inputPrice = document.createElement("input");
inputPrice.className = "bg-red-500 text-white w-full h-[3vw]";
labelPrice.innerText = "INGRESE EL PRECIO:";

const inputImg = document.createElement("input");
inputImg.name = "productImage";
inputImg.type = "file";
inputImg.accept = "image/*";

const buttonForm = document.createElement("button");

MainRoot.appendChild(form);
form.appendChild(titulo);
form.appendChild(divPreguntas);

divPreguntas.appendChild(divName);
divName.appendChild(labelName);
divName.appendChild(inputName);
inputName.type = "text";
inputName.name = "name";

divPreguntas.appendChild(divDescription);
divDescription.appendChild(labelDescription);
divDescription.appendChild(inputDescription);
inputDescription.type = "text";
inputDescription.name = "description";

divPreguntas.appendChild(divPrice);
divPrice.appendChild(labelPrice);
divPrice.appendChild(inputPrice);
inputPrice.type = "number";
inputPrice.name = "price";

const divBotones = document.createElement("div");

inputImg.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const render = new FileReader();

  render.onload = (readerEvent) => {
    let imgUwu = document.querySelector("img");

    if (!imgUwu) {
      imgUwu = document.createElement("img");
    }
    imgUwu.src = readerEvent.target.result;
    imgUwu.className = "w-full h-[15vw]";
    form.appendChild(imgUwu);
  };

  render.readAsDataURL(file);
});
form.appendChild(divBotones);
divBotones.className = "grid grid-cols-2 grid-rows-1 gap-4";
divBotones.appendChild(inputImg);
divBotones.appendChild(buttonForm);

inputImg.className = "bg-blue-500 text-opacity-0 hover:bg-blue-700 text-white font-bold py-[1vw] pl-[3vw] rounded";

buttonForm.innerText = "Post Product";
buttonForm.className = "bg-blue-500 hover:bg-blue-700 text-white font-bold text-[2vw] rounded";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  fetch("http://localhost:4000", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
