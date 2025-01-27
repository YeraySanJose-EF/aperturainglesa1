window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  //let player = GetPlayer();

//let num1 = player.GetVar("Var_Errores_posibles");
//let num2 = player.GetVar("Var_Total_Errores");

//Let porcentaje = Math.round(100-((num2 * 100)/num1));

//player.SetVar("Var_Porcentaje_aciertos", porcentaje);

//

var a = player.GetVar("Var_Errores_posibles");
var b = player.GetVar("Var_Total_Errores");

// Realizar la operación 100 - (a * b)
var resultado = Math.round((100 - ((b * 100) / a )));

// Asignar el resultado a la variable 'c'
player.SetVar("Var_Porcentaje_aciertos", resultado);
}

};
