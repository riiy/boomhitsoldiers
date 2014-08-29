/**
 * Created by hope on 2014/8/28.
 */
//function initBoard() {
//    clickFlag = 0;
//    turnFlag = 0;
//    stepTotal = 0;
//    soldierCnt = 15;
//    var bkgd = "green";
//    for (var x = 0; x < 5; x++) {
//        for (var y = 0; y < 5; y++) {
//            if (x > 2) {
//                bkgd = "";
//            }
//            setChess("div" + x + y, soldierWidth, soldierWidth, xLocations[x][y] - soldierWidth / 2, yLocations[x][y] - soldierWidth / 2, bkgd);
//        }
//    }
//    setChess("div41", boomWidth, boomWidth, xLocations[4][1] - boomWidth / 2, yLocations[4][1] - boomWidth / 2, "red");
//    setChess("div43", boomWidth, boomWidth, xLocations[4][3] - boomWidth / 2, yLocations[4][3] - boomWidth / 2, "red");
//}

//var windowWidth = $(window).width();
//var windowHeigth = $(window).height();
//
//var border = 10;
//var padding = 50;
//var boomWidth = 40;
//var boomGrowup = 20;
//
//var soldierWidth = 30;
//var soldierGrowup = 10;
//
//var tableMarginTop = 50;
//var tableMarginLeft = (windowWidth / 2) - (padding * 4) - (border * 2.5);
//
//var xLocations = new Array(new Array(5), new Array(5));
//var yLocations = new Array(new Array(5), new Array(5));
//for (var x = 0; x < 5; x++) {
//    xLocations[x] = new Array();
//    yLocations[x] = new Array();
//    for (var y = 0; y < 5; y++) {
//        xLocations[x][y] = tableMarginLeft + (border * (y + 0.5)) + (padding * y * 2);
//        yLocations[x][y] = tableMarginTop + (border * (x + 0.5)) + (padding * x * 2);
//        addDiv(x, y);
//    }
//}

function addDiv(x, y) {
    var dv = document.createElement('div');
    dv.id = "div" + x + y;
    dv.className = "circle";
    document.getElementById("topdiv").appendChild(dv);
}

