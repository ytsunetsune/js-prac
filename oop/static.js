var Area = function () {};

Area.version = '1.0';

// 静的メソッドtriangleの定義
Area.triangle = function (base, height) {
  return base * height / 2;
}

// 静的メソッドdiamondの定義
Area.diamond = function (width, height) {
  return width * height / 2;
}

document.writeln('version: ' + Area.version);
document.writeln('三角形の面積: ' + Area.triangle(5, 3));
var a = new Area();
document.writeln('菱型の面積: ' + a.diamond(10, 2));

