const h1Nombre = (data) => {
    const user = data.results[0];
    const nombre = user.name.first;
    const apellido = user.name.last;
    const h2 = document.getElementById("h2");
    h2.innerHTML = `${nombre} ${apellido}`.toUpperCase();
}

const imgPerfil = (data) => {
    const user = data.results[0];
    const foto = user.picture.large;
    const img = document.getElementById("img");
    img.setAttribute("src",foto);
}

const info = (data) => {
    const user = data.results[0];
    const ciudad = user.location.city;
    const estado = user.location.state;
    const pais = user.location.country;
    const email = user.email;
    const telefono = user.phone;
    
    const ubicacion = document.getElementById("ubicacion");
    ubicacion.innerHTML = `${ciudad}, ${estado}, ${pais}`.toUpperCase();

    const mail = document.getElementById("mail");
    mail.innerHTML = email;
    mail.setAttribute("href", `mailto:${email}`);

    const tel = document.getElementById("tel");
    tel.innerHTML = telefono;
}

fetch("https://randomuser.me/api/")
    .then((resp) => resp.json())
    .then((data) => {
        h1Nombre(data);
        imgPerfil(data);
        info(data); 
    })

const btnEstudios = document.getElementById("link-estudios");
const btnHabilidades = document.getElementById("link-habilidades");
const btnContacto = document.getElementById("link-contacto");
const btnCursos = document.getElementById("link-cursos");
const btnPresentacion = document.getElementById("link-presentacion");

btnEstudios.addEventListener("click", (e) => {
    const divEstudios = document.getElementById("estudios");
    if(divEstudios.className === "black") {
        divEstudios.setAttribute("class", "white");
    } else {
        divEstudios.setAttribute("class", "black");
    }
})

btnHabilidades.addEventListener("click", (e) => {
    const divHabilidades = document.getElementById("habilidades");
    if(divHabilidades.className === "black") {
        divHabilidades.setAttribute("class", "white");
    } else {
        divHabilidades.setAttribute("class", "black");
    }
})

btnContacto.addEventListener("click", (e) => {
    const divContacto = document.getElementById("info-personal");
    if(divContacto.className === "black") {
        divContacto.setAttribute("class", "white");
    } else {
        divContacto.setAttribute("class", "black");
    }
})

btnCursos.addEventListener("click", (e) => {
    const divCursos = document.getElementById("cursos");
    if(divCursos.className === "black") {
        divCursos.setAttribute("class", "white");
    } else {
        divCursos.setAttribute("class", "black");
    }  
})

btnPresentacion.addEventListener("click", (e) => {
    const divPresentacion = document.getElementById("presentacion");
    if(divPresentacion.className === "black") {
        divPresentacion.setAttribute("class", "white");
    } else {
        divPresentacion.setAttribute("class", "black");
    }
})

