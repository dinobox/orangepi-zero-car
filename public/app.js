$(document).ready(function () {
    function stop(){
        $.get("/3/0");
        $.get("/15/0");
        $.get("/16/0");
        $.get("/14/0");
    }
    $("#up").click(function () {
        console.log("up");
        stop();
        $.get("/15/1");
        $.get("/16/1");
    });
    $("#down").click(function () {
        console.log("down");
        stop();
        $.get("/3/1");
        $.get("/14/1");

    });
    $("#left").click(function () {
        console.log("left");
        stop();
        $.get("/15/1");
    });
    $("#right").click(function () {
        console.log("right");
        stop();
        $.get("/16/1");
        
    });
    $("#stop").click(function () {
        console.log("stop");
        stop();
    });
});