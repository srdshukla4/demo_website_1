var a;
a = 10;
console.log(a);
console.log(typeof a);

a = 'yo';
console.log(a);
console.log(typeof a);

a = 1.000010110110101;
console.log(a);
console.log(typeof a);


// date 12/02/2022
let s = 100;
// print(s);
console.log(s);

// search differnce between let and var and memory allocation


//finctions---------------------------------------

function gethello() {
    console.log('hello');
    console.log('world');
}

// finction invoking

gethello()

///Funcrtion expression
//function are treated as first class citizen in js coz
//can be returned
//can be passed as parameter


// reac more about funtion ex   pression


function calc(str, a, b) {
    if (str == 'add') {
        return a + b;
    }
    elif(str == 'minus ') || (str == 'minus') || (str == '-')


}

let func_exp = calc('add', 1, 3);
console.log('-----------------------------------------------------');

//console.log(func_exp());

let object = {
    number: 20,
    type: "varchar",
    module: { gl: 5, acc: 2, hr: 3 },
    fun_helloworld: function() {
        return "hello world";
    },
    arr: [1, 2, 3, 4]

};

for (let i in object)
    console.log("key is " + i + " and object is " + object[i] + "and its type is " + typeof object[i]);

//let a = 10;