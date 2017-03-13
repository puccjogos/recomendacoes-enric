/*global $, console*/
$("#mitologia-2017-1s").click(function () {
    "use strict";
    $("#todas-disciplinas").toggleClass("atual", false);
    $("#mitologia-2017-1s").toggleClass("atual", true);
    $("#proj2-2017-1s").toggleClass("atual", false);
    $("#balanceamento-2017-1s").toggleClass("atual", false);
    $("#proj4-2017-1s").toggleClass("atual", false);

    $("div.mitologia-2017-1s").show();
    $("div.proj2-2017-1s").hide();
    $("div.balanceamento-2017-1s").hide();
    $("div.proj4-2017-1s").hide();
});

$("#proj2-2017-1s").click(function () {
    "use strict";
    $("#todas-disciplinas").toggleClass("atual", false);
    $("#mitologia-2017-1s").toggleClass("atual", false);
    $("#proj2-2017-1s").toggleClass("atual", true);
    $("#balanceamento-2017-1s").toggleClass("atual", false);
    $("#proj4-2017-1s").toggleClass("atual", false);

    $("div.mitologia-2017-1s").hide();
    $("div.proj2-2017-1s").show();
    $("div.balanceamento-2017-1s").hide();
    $("div.proj4-2017-1s").hide();
});

$("#balanceamento-2017-1s").click(function () {
    "use strict";
    $("#todas-disciplinas").toggleClass("atual", false);
    $("#mitologia-2017-1s").toggleClass("atual", false);
    $("#proj2-2017-1s").toggleClass("atual", false);
    $("#balanceamento-2017-1s").toggleClass("atual", true);
    $("#proj4-2017-1s").toggleClass("atual", false);

    $("div.mitologia-2017-1s").hide();
    $("div.proj2-2017-1s").hide();
    $("div.balanceamento-2017-1s").show();
    $("div.proj4-2017-1s").hide();
});

$("#proj4-2017-1s").click(function () {
    "use strict";
    $("#todas-disciplinas").toggleClass("atual", false);
    $("#mitologia-2017-1s").toggleClass("atual", false);
    $("#proj2-2017-1s").toggleClass("atual", false);
    $("#balanceamento-2017-1s").toggleClass("atual", false);
    $("#proj4-2017-1s").toggleClass("atual", true);

    $("div.mitologia-2017-1s").hide();
    $("div.proj2-2017-1s").hide();
    $("div.balanceamento-2017-1s").hide();
    $("div.proj4-2017-1s").show();
});

$("#todas-disciplinas").click(function () {
    "use strict";
    $("#todas-disciplinas").toggleClass("atual", true);
    $("#mitologia-2017-1s").toggleClass("atual", false);
    $("#proj2-2017-1s").toggleClass("atual", false);
    $("#balanceamento-2017-1s").toggleClass("atual", false);
    $("#proj4-2017-1s").toggleClass("atual", false);

    $("div.mitologia-2017-1s").show();
    $("div.proj2-2017-1s").show();
    $("div.balanceamento-2017-1s");
    $("div.proj4-2017-1s").show();
});
