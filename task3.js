function showLinkInfo() {
    // Obtener todos los enlaces de la página
    const links = document.getElementsByTagName('a');
    
    // Número total de enlaces
    const totalLinks = links.length;
    
    // Primer enlace
    const firstLink = links[0].href;
    
    // Último enlace
    const lastLink = links[totalLinks - 1].href;
    
    // Mostrar la información en una alerta
    alert(
        "Información de enlaces:\n\n" +
        "Número total de enlaces: " + totalLinks + "\n" +
        "Primer enlace: " + firstLink + "\n" +
        "Último enlace: " + lastLink
    );
}