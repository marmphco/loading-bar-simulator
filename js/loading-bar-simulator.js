/* nothing here */

var context = document.getElementById("canvas").getContext("2d");
var bar = new LoadingBar();
bar.current = 0.5;
renderLoadingBar(context, bar, 10, 10, 200, 20);