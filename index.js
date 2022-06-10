let indiceActual = 1

document.getElementById("next").addEventListener('click', () => {

    if (indiceActual < 5) {
        document.getElementById("part-" + indiceActual).classList = "part part-rotate"
        indiceActual++
    }

});

document.getElementById("previous").addEventListener('click', () => {

    if (indiceActual > 1) {
        indiceActual--
        document.getElementById("part-" + indiceActual).classList = "part part-rotate-origin"
    }

});