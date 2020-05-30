var modelos_tesla = ["Model 3", "Model S", " Model X"]
var modelos_Ford = ["Mustang", "Explorer", "F-150"]
var modelos_dodge = ["Charger", "Challenger", "Durango"]
var anos = [2020, 2019, 2018, 2017, 2016]
baseDatos = [];



function autos_registro(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;    
}




function capturar(){
    var cantidad_registros = document.getElementById("myText").value;
    console.log(cantidad_registros);


    for (var i = 0; i <= cantidad_registros; ++i) {
        this["nuevo_registro"+i] = new autos_registro("Tesla", modelos_tesla[Math.floor(Math.random() * 3)], anos[Math.floor(Math.random() * 4)]);
        baseDatos.push(this["nuevo_registro"+i]);
        document.getElementById("tabla").innerHTML += "<td>" + this["nuevo_registro"+i].marca + "</td>"+"<td>" + this["nuevo_registro"+i].modelo + "</td>"+"<td>" + this["nuevo_registro"+i].ano + "</td>";
        i++;
        this["nuevo_registro"+i] = new autos_registro("Ford", modelos_Ford[Math.floor(Math.random() * 3)], anos[Math.floor(Math.random() * 4)]);
        document.getElementById("tabla").innerHTML += "<td>" + this["nuevo_registro"+i].marca + "</td>"+"<td>" + this["nuevo_registro"+i].modelo + "</td>"+"<td>" + this["nuevo_registro"+i].ano + "</td>";
        baseDatos.push(this["nuevo_registro"+i]);
        i++
        this["nuevo_registro"+i] = new autos_registro("Dodge", modelos_Ford[Math.floor(Math.random() * 3)], anos[Math.floor(Math.random() * 4)]);
        document.getElementById("tabla").innerHTML += "<td>" + this["nuevo_registro"+i].marca + "</td>"+"<td>" + this["nuevo_registro"+i].modelo + "</td>"+"<td>" + this["nuevo_registro"+i].ano + "</td>";
        baseDatos.push(this["nuevo_registro"+i]);
        i++
    }

}
