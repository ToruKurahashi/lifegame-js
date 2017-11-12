const assert = require('assert');
const lifegame = require('../lifegame');
const fs = require('fs');
const path = require('path');

describe('ライフゲーム',() => {

  test('既存の出力と比較する', () => {
    const lines = [];
    lifegame((line) => {
      lines.push(line + '\n');
    });
    const original = fs.readFileSync(path.join(__dirname, '..', 'original_output'), 'utf-8');
    assert(lines.join('') === original);
  });

});
