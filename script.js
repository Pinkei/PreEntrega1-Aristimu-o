// 1ro preguntas para armar el Presupuesto 
do{
let medidas = prompt("Pasenos las medidas de su pileta ej: 6x3")
let material = prompt("¿Su pileta es de fibra o de cemento?")
let arco = prompt("¿Tiene arco romano? conteste si o no")

if ((medidas != "") && (material != "") && (arco != "")){
let piletas = "\n" + "1) " + medidas + " " + 
"\n" + "2) " + material + " " + 
"\n" + "3) " + arco + " " 
alert("Sus respuestas fueron: " + piletas)
} else{
    alert("Error debe contestar las preguntas para que podamos armarle su presupuesto")
}
}while(confirm("¿Quiere que le hagamos otro presupuesto?")){

alert("Gracias por comucicarte con KT atermicos en breve estaremos pasandole su presupuesto")     
}
