<!DOCTYPE html
var productoSeleccionado;
var codigoCompraGenerado;

function mostrarInformacion(producto) {
    productoSeleccionado = producto;

    // Obtener información específica del producto
    var title = "";
    var imgSrc = "";
    var price = "";
    var info = "";

    switch (producto) {
        case 'server-special':
            title = "Servidor Especial";
            imgSrc = "server_special.png";
            price = "$4.99";
            info = "Un servidor especial para una experiencia única en el juego. ¡Celebremos juntos el aniversario de DBZ!";
            break;
        case 'transformation':
            title = "Transformación Especial";
            imgSrc = "transformation.png";
            price = "$3.99";
            info = "Desbloquea una transformación única para tu personaje. ¡Sorprende a tus oponentes con nuevos poderes!";
            break;
        case 'custom-sword':
            title = "Espada Personalizada";
            imgSrc = "custom_sword.png";
            price = "$5.99";
            info = "Obtén una espada única con efectos especiales. ¡Actualizada con las últimas mejoras del juego!";
            break;
        case 'special-attack':
            title = "Ataque Especial";
            imgSrc = "special_attack.png";
            price = "$6.99";
            info = "Desbloquea un ataque especial devastador. ¡Perfecto para dominar las batallas!";
            break;
        case 'energy-booster':
            title = "Potenciador de Energía";
            imgSrc = "energy_booster.png";
            price = "$7.80";
            info = "Duplica tu energía y mejora tu rendimiento en el campo de batalla. ¡No te quedes sin energía!";
            break;
    }

    document.getElementById('detalle-title').textContent = title;
    document.getElementById('detalle-img').src = imgSrc;
    document.getElementById('detalle-price').textContent = "Precio: " + price;
    document.getElementById('detalle-info').textContent = info;

    // Mostrar el contenedor de detalles
    document.getElementById('detalle-container').classList.remove('hidden');
}

function ocultarInformacion() {
    document.getElementById('detalle-container').classList.add('hidden');
}

function obtenerCodigoCompraDetallada() {
    var codigoEspecial = document.getElementById('detalle-codigo').value;

    // Validar el código especial según el producto seleccionado
    var codigoProducto = document.getElementById(productoSeleccionado).dataset.codigo;

    if (codigoEspecial === codigoProducto) {
        // Código especial válido, continuar con la obtención del código de compra
        // Enviar el código especial al servidor para verificar y obtener el código de compra
        // Simulación de solicitud al servidor
        // Reemplaza esto con la lógica de tu servidor para generar el código de compra
        // ...

        // Ejemplo de generación de código de compra
        codigoCompraGenerado = generarCodigoCompra();

        // Muestra el código de compra generado
        alert('Código de compra generado: ' + codigoCompraGenerado);

        // Generar el ticket virtual
        generarTicketVirtual();
    } else {
        alert('Código especial incorrecto. Inténtalo nuevamente.');
    }
}

function generarCodigoCompra() {
    // Puedes generar el código de compra según la lógica específica de tu aplicación
    // Aquí se muestra un ejemplo simple
    return Math.random().toString(36).substring(2, 10).toUpperCase();
}

function generarTicketVirtual() {
    // Simulación de impresión de ticket virtual
    var ticket = "--------- TICKET DE COMPRA ---------\n" +
                 "Objeto: " + document.getElementById('detalle-title').textContent + "\n" +
                 "Precio: " + document.getElementById('detalle-price').textContent + "\n" +
                 "------------------------------------";
    alert(ticket);
}
// Resto del código permanece igual