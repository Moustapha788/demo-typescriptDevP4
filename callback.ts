/*
* Moustapha Gaye
*/

/* sans callback */
function fn1(x: number, y: number) {
    const s: number = x + y;
    fn2(s);

}
function fn2(som: number) {
    console.log(som);
}

fn1(3, 4);



/* avec callback */


function f1(
    x: number,
    y: number,
    f2: (som: number) => void): void {
    const s: number = x + y;
    f2(s);
}

f1(3, 4, (x) => {
    console.log(x + 100);
})

f1(3, 4, (x) => {
    console.log("souleymane diallo " + x);
})

function hello(nom: string, cb: (name: string) => string): string {
    const ch = "hello " + nom+" ";
    return cb(ch);
}

const r1=hello("souleymane",(x)=>{

    return x.toUpperCase();
})

console.log(r1);


const r2=hello("souleymane",(x)=>{

    return x.length.toString();
})

console.log(r2);
