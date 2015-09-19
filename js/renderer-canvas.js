function renderLoadingBar(context, loadingBar, x, y, width, height) {
    context.fillStyle = "#000000";
    context.fillRect(x, y, width, height);

    var percentage = loadingBar.current / loadingBar.max;
    context.fillStyle = "#ff0000";
    context.fillRect(x, y, width * percentage, height);
}