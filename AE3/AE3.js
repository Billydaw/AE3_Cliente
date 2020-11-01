function CreaElementos(){                         
    var node = document.createElement('div');        
    node.innerHTML = '<label for="Nombre">'+ "Nombre" +'</label><input type="text" id="Nombre" name="Nombre">';       
    document.getElementById('container').appendChild(node); 

    var node = document.createElement('div');        
    node.innerHTML = '<label for="Apellidos">'+ "Apellidos" +'</label><input type="text" id="Apellidos" name="Apellidos">';       
    document.getElementById('container').appendChild(node);

    var node = document.createElement('div');        
    node.innerHTML = '<label for="Apellidos">'+ "Apellidos" +'</label><input type="text" id="Apellidos" name="Apellidos">';       
    document.getElementById('container').appendChild(node);

    var node = document.createElement('div');        
    node.innerHTML = '<label for="Apellidos">'+ "Apellidos" +'</label><input type="text" id="Apellidos" name="Apellidos">';       
    document.getElementById('container').appendChild(node);              
}

function validar(){
    var pagina=document.getElementById("URL").value;
    var nombre=document.getElementById("nombre").value;
    var Apellidos=document.getElementById("Apellidos").value;
    var Fecha_Nac=document.getElementById("Fecha_Nac").value;
    var Direccion=document.getElementById("Direccion").value;
    var CP=document.getElementById("CP").value;
    var provFormPag2=document.getElementById("provFormPag2").value;
    var municipio=document.getElementById("municipio").value;
    if(nombre=="" || Apellidos=="" || Fecha_Nac=="" || Direccion=="" || CP=="" || provFormPag2=="" || municipio=="" ){
        alert("Debes completar todos los campos");
       
    }else{
       var opcion= confirm ("Has introducido los siguientes datos \n" + nombre +"\n" + Apellidos +"\n" + Fecha_Nac +"\n" + Direccion +"\n" + CP +"\n" + provFormPag2 +"\n" + municipio + "\n" + "¿Los datos que has introducido son correctos?");
       if (opcion == true){
           
           window.location.href=pagina;

       }else{

       }
    }
    
}

let btn = document.getElementById("mensaje")
        btn.addEventListener("keydown", function(event) {
          if(event) {
            document.getElementById("enviar").disabled = false
          }
        })