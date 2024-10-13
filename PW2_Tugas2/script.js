const root = document.getElementsByClassName("root")[0]

window.onload = () => {
  alert("Selamat datang! Silakan isi form di bawah.")
};

const head = document.createElement("div")
head.setAttribute("class","head")

const judul = document.createElement("h2")
judul.innerText = "Tugas-2 Praktikum Pemrograman Web"
judul.setAttribute("class", "judul")

head.append(judul)
root.append(head)


const main = document.createElement("div")
main.classList.add("main")
root.appendChild(main)

//Form
const form = document.createElement("form")
const divform = document.createElement("div")

//User
const divuser = document.createElement("div")

const userLabel = document.createElement("label")
userLabel.htmlFor = "usernameInput"
userLabel.innerText = "Username"

const userInput = document.createElement("input")
userInput.type = "text"
userInput.id = "usernameInput"
userInput.placeholder = "Timothy Tanawi"
userInput.required = "true"

divuser.append(userLabel, userInput)

//NIM
const divnim = document.createElement("div")

const nimLabel = document.createElement("label")
nimLabel.htmlFor = "nimInput"
nimLabel.innerText = "NIM"

const nimInput = document.createElement("input")
nimInput.type = "text"
nimInput.id = "nimInput"
nimInput.placeholder = "231401079"
nimInput.required = "true"

divnim.append(nimLabel, nimInput)

//Kom
const divkom = document.createElement("div")

const komLabel = document.createElement("label")
komLabel.htmlFor = "komInput"
komLabel.innerText = "KOM"

const komInput = document.createElement("input")
komInput.type = "text"
komInput.id = "komInput"
komInput.placeholder = "A"
komInput.required = "true"

divkom.append(komLabel, komInput)

//Foto
const divfoto = document.createElement("div")

const fotoLabel = document.createElement("label")
fotoLabel.htmlFor = "photoInput"
fotoLabel.innerText = "Upload Photo"

const fotoInput = document.createElement("input")
fotoInput.type = "file"
fotoInput.id = "photoInput"
fotoInput.accept = "image/png, image/jpeg"
fotoInput.required = "true"

divfoto.append(fotoLabel, fotoInput)

const submit = document.createElement("input")
submit.type = "submit"

divform.append(divuser, divnim, divkom, divfoto, submit);
form.append(divform);
main.append(form);

//Card
const tampil = document.createElement("div");
tampil.classList.add("container");
main.append(tampil);

tampil.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const user = userInput.value;
  const nim = nimInput.value;
  const kom = komInput.value;
  const foto = fotoInput.files[0];

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = URL.createObjectURL(foto);
  img.alt = "User Photo";

  const usernameDisplay = document.createElement("p");
  usernameDisplay.innerText = `Username: ${user}`;

  const nimDisplay = document.createElement("p");
  nimDisplay.innerText = `NIM: ${nim}`;

  const komDisplay = document.createElement("p");
  komDisplay.innerText = `KOM: ${kom}`;

  card.append(img, usernameDisplay, nimDisplay, komDisplay);

  tampil.innerHTML = "";
  tampil.append(card);

  tampil.style.display = "block";
  form.style.width = "370px";

  alert("Form berhasil disubmit!");
});

