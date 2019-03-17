$(document).ready(function () {
    function stop(){
        $.get("/3/0");
        $.get("/15/0");
        $.get("/16/0");
        $.get("/14/0");
    }
    $("#up").click(function () {
        console.log("up");
        $.get("/15/1");
        $.get("/16/1");
        stop();
    });
    $("#down").click(function () {
        console.log("down");
        $.get("/3/1");
        $.get("/14/1");
        stop();

    });
    $("#left").click(function () {
        console.log("left");
        $.get("/15/1");
        stop();
    });
    $("#right").click(function () {
        console.log("right");
        $.get("/16/1");
        stop();
        
    });
    $("#stop").click(function () {
        console.log("stop");
        stop();
    });
});