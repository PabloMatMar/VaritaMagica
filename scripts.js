//Eventos
// Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
let noclick = document.querySelector('body');
noclick.addEventListener('click', preventDefault);
function preventDefault(noclick) {
    noclick.preventDefault();
}


// Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
// 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
let imagenes = document.getElementsByTagName("img");
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", function () {
        imagenes[i].setAttribute('src', 'assets/magic-1.gif')
    });
}
// 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

let texto = document.querySelectorAll("p");
for (let i = 0; i < texto.length; i++) {
    texto[i].addEventListener("click", mouseover)
    function mouseover() {
        texto[i].style.color = 'blue';
        texto[i].style.background = 'grey';
    }
}
// 2.3 Bloques de article o section: Cambia el color de fondo.
let articulo = document.getElementsByTagName("article");
for (let i = 0; i < articulo.length; i++) {
    articulo[i].addEventListener("click",function() {
        articulo[i].style.background = 'blue';
    });
}
// Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.
// 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

let imagenes2 = document.getElementsByTagName("img");
let imagenesAnteriores = [];
for (let i = 0; i < imagenes2.length; i++) {
    imagenesAnteriores.push(imagenes2[i].src);
    imagenes2[i].addEventListener("mouseover", function () {
        imagenes2[i].setAttribute('src', 'assets/abracadabra.gif')
    });
    imagenes2[i].addEventListener("mouseout", function () {
        imagenes2[i].setAttribute('src', imagenesAnteriores[i])
    });

}

// 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

let texto2 = document.querySelectorAll("p");
for (let i = 0; i < texto2.length; i++) {
    texto2[i].addEventListener("mouseover", function() {
        texto2[i].style.color = 'pink';
        texto2[i].style.background = 'orange';
    });

    texto2[i].addEventListener("mouseout", function() {
        texto2[i].style.color = '';
        texto2[i].style.background = '';
    });
}

// 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

let articulo2 = document.querySelectorAll("article");
for (let i = 0; i < articulo2.length; i++) {
    articulo2[i].addEventListener("mouseover", function () { articulo2[i].style.background = 'purple'; });

    articulo2[i].addEventListener("mouseout", function () { articulo2[i].style.background = ''; });
}


// 4. Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.
