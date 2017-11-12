var lifegame = function(puts){

  var cell = initCanvas();

  cell = setBlinker(cell);

  for (var i = 0; i < 5; i++) {
    var line = "";
    for (var j = 0; j < 5; j++) {
      line += cell[i][j];
    }
    puts(line);
  }

  for (var times = 0; times < 3; times++) {
    var next_cell = [[],[],[],[],[]];
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        // 誕生
        if (cell[i][j] == "□") {
          var count = 0;
          if (cell[i-1] && cell[i-1][j-1] == "■") count = count+1;
          if (cell[i-1] && cell[i-1][j] == "■") count = count+1;
          if (cell[i-1] && cell[i-1][j+1] == "■") count = count+1;
          if (cell[i] && cell[i][j-1] == "■") count = count+1;
          if (cell[i] && cell[i][j+1] == "■") count = count+1;
          if (cell[i+1] && cell[i+1][j-1] == "■") count = count+1;
          if (cell[i+1] && cell[i+1][j] == "■") count = count+1;
          if (cell[i+1] && cell[i+1][j+1] == "■") count = count+1;
          if (count >= 3) {
            next_cell[i][j] = "■";
          } else {
            next_cell[i][j] = "□";
          }
        } else {
          next_cell[i][j] = "□"
        }

        // 生存、過疎、過密を判定
        if (cell[i][j] == "■") {
          var count = 0;
          if (cell[i-1] && cell[i-1][j] == "■") count = count+1;
          if (cell[i] && cell[i][j-1] == "■") count = count+1;
          if (cell[i] && cell[i][j+1] == "■") count = count+1;
          if (cell[i+1] && cell[i+1][j] == "■") count = count+1;

          if (count == 2) {
            next_cell[i][j] = "■";
          }　else {
            next_cell[i][j] = "□";
          }
        }
      }
    }

    cell = next_cell;

    puts(times + "==========");

    for (var i = 0; i < 5; i++) {
      var line = "";
      for (var j = 0; j < 5; j++) {
        line += cell[i][j];
      }
      puts(line);
    }
  }

}

var initCanvas = function() {
  var cell = [];
  for (var i = 0; i < 5; i++) {
    cell[i] = [];
    for (var j = 0; j < 5; j++) {
      cell[i][j] = "□";
    }
  }
  return cell;
};

var setBlinker = function(cells) {
  cells[2][1] = "■";
  cells[2][2] = "■";
  cells[2][3] = "■";
  return cells;
};

module.exports = {
  lifegame: lifegame,
  initCanvas: initCanvas,
  setBlinker: setBlinker
};
