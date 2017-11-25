function check(nombre, correo)
{
    if(nombre.value=="")
    {
        alert("El campo nombre esta vacio");
        return false;
    }
    
    else if (!(/^(\w)+@{1}(\w{2,})\.([a-z]{2,3})$/.test(correo.value)))
    {
        alert ("El campo e-mail esta vacio o esta incompleto");
        return false;
    }
    
    return true;
}

