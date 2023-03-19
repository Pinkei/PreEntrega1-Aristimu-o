let medidas = prompt("Pasenos las medidas de su pile ej: 6x3")
let material = prompt("¿Su pileta es de fibra o de cemento?")
let arco = prompt("¿Tiene arco romano? conteste si o no")

do{
if ((medidas != "") && (material != "") && (arco != "")){
let piletas = "\n" + "1) " + medidas + " " + 
"\n" + "2) " + material + " " + 
"\n" + "3) " + arco + " " 
alert("sus respuestas fueron: " + piletas)
} else{
    alert("Error debe contestar las preguntas para que podamos armarle su presupuesto")
}
}while(confirm("¿quiere que le hagamos otro presupuesto?")){

alert("Gracias por comucicarte con KT atermicos en breve estaremos pasandole su presupuesto, pulsa ESC para salir")     
}
