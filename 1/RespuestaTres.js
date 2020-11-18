var rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};

var wb = {
    white: "#FFFFFF",
    black: "#000000"
};

//Object.assing no es soportado por internet explorer.
//var colors = Object.assign(rgb, wb);

var colors;

//Por lo tanto una de las soluciones al problema puede ser:

if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) ||
	navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
{
	var objs = [rgb, wb],
	    colors =  objs.reduce(function (r, o) {
	        Object.keys(o).forEach(function (k) {
	            r[k] = o[k];
	        });
	        return r;
	    }, {});
}
else
{
	colors = Object.assign(rgb, wb);
}

//Tras la primera ejecucion vamos a obtener los siguientes valores:
//colors = { red: "#FF0000", green: "#00FF00", blue: "#0000FF", white: "#FFFFFF", black: "#000000" }
//rgb = { red: "#FF0000", green: "#00FF00", blue: "#0000FF"}
//wb = { white: "#FFFFFF", black: "#000000" }