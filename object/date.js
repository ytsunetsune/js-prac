var d = new Date('2016/07/10');
document.writeln('これを書いた日付は ' + d + ' です');
document.writeln('これを書いた日付は ' + d.toDateString() + ' です');
var dat = new Date();
dat.setDate(d.getDate() - 20);
document.writeln('これを書いた20日前は ' + dat.toDateString() + ' です');
