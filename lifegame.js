var lifegame = function(puts){

  var cells = initCanvas();

  cells = setBlinker(cells);

  for (var i = 0; i < 5; i++) {
    var line = "";
    for (var j = 0; j < 5; j++) {
      line += cells[i][j];
    }
    puts(line);
  }

  for (var times = 0; times < 3; times++) {
    var next_cells = [[],[],[],[],[]];
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        // 誕生
        if (cells[i][j] == "□") {
          var count = 0;
          if (cells[i-1] && cells[i-1][j-1] == "■") count = count+1;
          if (cells[i-1] && cells[i-1][j] == "■") count = count+1;
          if (cells[i-1] && cells[i-1][j+1] == "■") count = count+1;
          if (cells[i] && cells[i][j-1] == "■") count = count+1;
          if (cells[i] && cells[i][j+1] == "■") count = count+1;
          if (cells[i+1] && cells[i+1][j-1] == "■") count = count+1;
          if (cells[i+1] && cells[i+1][j] == "■") count = count+1;
          if (cells[i+1] && cells[i+1][j+1] == "■") count = count+1;
          if (count >= 3) {
            next_cells[i][j] = "■";
          } else {
            next_cells[i][j] = "□";
          }
        } else {
          next_cells[i][j] = "□"
        }

        // 生存、過疎、過密を判定
        if (cells[i][j] == "■") {
          var count = 0;
          if (cells[i-1] && cells[i-1][j] == "■") count = count+1;
          if (cells[i] && cells[i][j-1] == "■") count = count+1;
          if (cells[i] && cells[i][j+1] == "■") count = count+1;
          if (cells[i+1] && cells[i+1][j] == "■") count = count+1;

          if (count == 2) {
            next_cells[i][j] = "■";
          }　else {
            next_cells[i][j] = "□";
          }
        }
      }
    }

    cells = next_cells;

    puts(times + "==========");

    for (var i = 0; i < 5; i++) {
      var line = "";
      for (var j = 0; j < 5; j++) {
        line += cells[i][j];
      }
      puts(line);
    }
  }

}

var initCanvas = function() {
  var cells = [];
  for (var i = 0; i < 5; i++) {
    cells[i] = [];
    for (var j = 0; j < 5; j++) {
      cells[i][j] = "□";
    }
  }
  return cells;
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
