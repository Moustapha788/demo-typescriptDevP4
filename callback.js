/*
* Moustapha Gaye
*/
/* sans callback */
function fn1(x, y) {
    var s = x + y;
    fn2(s);
}
function fn2(som) {
    console.log(som);
}
fn1(3, 4);
/* avec callback */
function f1(x, y, f2) {
    var s = x + y;
    f2(s);
}
f1(3, 4, function (x) {
    console.log(x + 100);
});
f1(3, 4, function (x) {
    console.log("souleymane diallo " + x);
});
function hello(nom, cb) {
    var ch = "hello " + nom + " ";
    return cb(ch);
}
var r1 = hello("souleymane", function (x) {
    return x.toUpperCase();
});
console.log(r1);
var r2 = hello("souleymane", function (x) {
    return x.length.toString();
});
console.log(r2);
