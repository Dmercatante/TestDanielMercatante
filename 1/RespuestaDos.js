var rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};

var wb = {
    white: "#FFFFFF",
    black: "#000000"
};

var colors = Object.assign({}, rgb, wb);

//Tras la primera ejecucion vamos a obtener los siguientes valores:
//colors = { red: "#FF0000", green: "#00FF00", blue: "#0000FF", white: "#FFFFFF", black: "#000000" }
//rgb = { red: "#FF0000", green: "#00FF00", blue: "#0000FF" }
//wb = { white: "#FFFFFF", black: "#000000" }