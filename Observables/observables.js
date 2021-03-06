"use strict";
exports.__esModule = true;
var Rx_1 = require("rxjs/Rx");
var observable = Rx_1.Observable.create(function (observer) {
    try {
        observer.next('Hey guys!');
        observer.next('How are you?');
        setInterval(function () {
            observer.next('I am good');
        }, 1000);
        // observer.complete()
        // observer.next('This will not send')
    }
    catch (err) {
        observer.error(err);
    }
}).share();
var observer = observable.subscribe(function (x) { return console.log(x); }, function (error) { return console.log(error); }, function () { return console.log("Completed"); });
// var observer2 = observable.subscribe(
//     (x: any) => console.log(x)
// )
setTimeout(function () {
    var observer2 = observable.subscribe(function (x) { return console.log('Subscribe 2: ' + x); });
}, 1000);
// function addItem(val:any){
//     var node = document.createElement("li");
//     var textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("output").appendChild(node)
// }
// tsc observables.ts
// node observables.js
