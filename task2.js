function getFormvalue() {
    event.preventDefault();
    const form = document.getElementById('form1');
    const firstName = form.fname.value;
    const lastName = form.lname.value;
    
    //Se muestra el nombre en la consola
    console.log("Nombre: " + firstName);
    console.log("Apellido: " + lastName);
    console.log("Nombre completo: " + firstName + " " + lastName);
}