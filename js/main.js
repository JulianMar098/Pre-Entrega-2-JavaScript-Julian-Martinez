const videojuegos = [
    { nombre: "Farm Simulator", categoria: "Simulador", año: 2021 },
    { nombre: "The Sims 4", categoria: "Simulador", año: 2014 },
    { nombre: "The Legend of Zelda: Breath of the Wild", categoria: "Mundo Abierto", año: 2017 },
    { nombre: "Grand Theft Auto V", categoria: "Mundo Abierto", año: 2013 },
    { nombre: "FIFA 22", categoria: "Deporte", año: 2021 },
    { nombre: "Madden NFL 23", categoria: "Deporte", año: 2022 },
    { nombre: "Call of Duty: Modern Warfare", categoria: "Accion", año: 2019 },
    { nombre: "Spec Ops The Line", categoria: "Accion", año: 2012 },
];

function filtrarPorCategoria(videojuegos, categoria) {
    return videojuegos.filter(videojuego => videojuego.categoria.toLowerCase() === categoria.toLowerCase());
}

function mostrarResultados(resultados) {
    let mensaje = "";
    if (resultados.length === 0) {
        mensaje = "No se encontraron videojuegos en esa categoría.";
    } else {
        mensaje = "Videojuegos encontrados:\n";
        resultados.forEach(videojuego => {
            mensaje += `${videojuego.nombre} (${videojuego.año}) - ${videojuego.categoria}\n`;
        });
    }
    alert(mensaje);
}

function ejecutarSimulador() {
    let continuar = true;
    while (continuar) {
        let categoriaInput = prompt("Elige una categoría (Accion, Simulador, Deporte, Mundo Abierto): ");
        let categoria = "";
        switch (categoriaInput.toLowerCase()) {
            case "acción":
            case "accion":
                categoria = "Accion";
                break;
            case "simulador":
                categoria = "Simulador";
                break;
            case "deporte":
                categoria = "Deporte";
                break;
            case "mundo abierto":
                categoria = "Mundo Abierto";
                break;
            default:
                alert("Categoría no válida.");
                continue; 
        }
        const resultados = filtrarPorCategoria(videojuegos, categoria);
        mostrarResultados(resultados);
        continuar = confirm("¿Quieres realizar otra búsqueda?");
    }
}

ejecutarSimulador();

