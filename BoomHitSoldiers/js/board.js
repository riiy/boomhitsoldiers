/**
 * Created by hope on 2014/8/28.
 */
function initBoard() {
    clickFlag = 0;
    turnFlag = 0;
    stepTotal = 0;
    soldierCnt = 15;
    var bkgd = "green";
    for (var x = 0; x < 5; x++) {
        for (var y = 0; y < 5; y++) {
            if (x > 2) {
                bkgd = "";
            }
            setChess("div" + x + y, soldierWidth, soldierWidth, xLocations[x][y] - soldierWidth / 2, yLocations[x][y] - soldierWidth / 2, bkgd);
        }
    }
    setChess("div41", boomWidth, boomWidth, xLocations[4][1] - boomWidth / 2, yLocations[4][1] - boomWidth / 2, "red");
    setChess("div43", boomWidth, boomWidth, xLocations[4][3] - boomWidth / 2, yLocations[4][3] - boomWidth / 2, "red");
}
