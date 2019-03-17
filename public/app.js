$(document).ready(function () {
    $("#up").click(function () {
        console.log("up");
    });
    $("#down").click(function () {
        console.log("down");
    });
    $("#left").click(function () {
        console.log("left");
    });
    $("#right").click(function () {
        console.log("right");
    });
    $("#stop").click(function () {
        console.log("stop");
        $.get("/3/0");
        $.get("/15/0");
        $.get("/16/0");
        $.get("/14/0");
    });
});