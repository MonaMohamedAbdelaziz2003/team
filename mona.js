/* the function start after 3 second
setTimeout(function myFunction() {
    console.log("mona");
}, 3000); 
*/

////////////////////////////////////map

// let x = [1, 2, 3, 4];
// let y = [];
// for (let i = 0; i < x.length; i++) {
//     y.push(x[i] + x[i]);
// }
// console.log(y);

/////////function map
/*
let r = x.map(function(element_of_arrayx, index, arr) {
    return element_of_arrayx + element_of_arrayx;
}, 10);
console.log(r);
*/
//kinbv////////function filter use in condition
/*
let x = ["mona", "moha", "ah"];
let z = x.filter(function(el) {
    return el.startsWith("m") ? true : false; ////if true return name start with m ,,,,,if is map not filter return true
}, 10);
console.log(z);
*/
///////////////////////////////////////////////function reduce
/*
let x = [10, 50, 30];
let y = x.reduce(function(acc_, current_iselemnt_after_acc, index, arr) {
return acc_is_sum_element > current ? acc_is_sum_element : current;
});
console.log(y);
*/ ////////////////////////////////////////////function foreach



////////////////////////////////////////bootcamp
// how to call the element
// console.log(document.forms);
//////////////////////////////////////////creat element
// let x = document.createElement("div");
// document.body.appendChild(x);
// let y = document.createTextNode("mona mohamed");
// x.appendChild(y);
// let a = document.createAttribute("mm");
// x.setAttributeNode(a);
// x.setAttribute("mm", "htttp");
///////////////////////////////////////////////////////////////////letl
var x1 = document.getElementById("x1");
var o1 = document.getElementById("o1");
var x2 = document.getElementById("x2");
var o2 = document.getElementById("o2");
var x3 = document.getElementById("x3");
var o3 = document.getElementById("o3");
var x4 = document.getElementById("x4");
var o4 = document.getElementById("o4");
var x5 = document.getElementById("x5");
var o5 = document.getElementById("o5");
var x6 = document.getElementById("x6");
var o6 = document.getElementById("o6");
var x7 = document.getElementById("x7");
var o7 = document.getElementById("o7");
var x8 = document.getElementById("x8");
var o8 = document.getElementById("o8");
var x9 = document.getElementById("x9");
var o9 = document.getElementById("o9");
///////////////////////////////////////////////////////////////
var won_x = document.getElementById("won_x");
var won_o = document.getElementById("won_o");
var tab = document.getElementById("tab");
var playagain = document.getElementById("playagain");
//////////////////////////////////////////////////////
function again() {
    location.reload();
}
//////////////////////////////////////////////////////////////xxx
function ok() {
    won_x.style.display = "block";
    tab.style.display = "none";
    playagain.style.display = "block";
}

function oko() {
    won_o.style.display = "block";
    tab.style.display = "none";
    playagain.style.display = "block";
}

function xx1() {
    o1.style.display = "none";
    x1.style.width = "200px";
    x1.style.height = "200px";
    if (o9.style.display === "none" && o5.style.display === "none" && o1.style.display == "none") {
        ok();
    }
    if (o2.style.display === "none" && o3.style.display === "none" && o1.style.display == "none") {
        ok();
    }
    if (o4.style.display === "none" && o7.style.display === "none" && o1.style.display == "none") {
        ok();
    }

}

function xx2() {
    o2.style.display = "none";
    x2.style.width = "200px";
    x2.style.height = "200px";
    if (o2.style.display === "none" && o3.style.display === "none" && o1.style.display == "none") {
        ok();
    }
    if (o2.style.display === "none" && o5.style.display === "none" && o8.style.display == "none") {
        ok();
    }
}

function xx3() {
    o3.style.display = "none";
    x3.style.width = "200px";
    x3.style.height = "200px";
    if (o2.style.display === "none" && o3.style.display === "none" && o1.style.display == "none") {
        ok();
    }
    if (o6.style.display === "none" && o3.style.display === "none" && o9.style.display == "none") {
        ok();
    }
    if (o7.style.display === "none" && o5.style.display === "none" && o3.style.display == "none") {
        ok();
    }
}

function xx4() {
    o4.style.display = "none";
    x4.style.width = "200px";
    x4.style.height = "200px";
    if (o4.style.display === "none" && o7.style.display === "none" && o1.style.display == "none") {
        ok();
    }
    if (o4.style.display === "none" && o5.style.display === "none" && o6.style.display == "none") {
        ok();
    }
}

function xx5() {
    o5.style.display = "none";
    x5.style.width = "200px";
    x5.style.height = "200px";
    if (o9.style.display === "none" && o5.style.display === "none" && o1.style.display == "none") {
        ok();
    }
    if (o7.style.display === "none" && o5.style.display === "none" && o3.style.display == "none") {
        ok();
    }
    if (o2.style.display === "none" && o5.style.display === "none" && o8.style.display == "none") {
        ok();
    }
    if (o4.style.display === "none" && o5.style.display === "none" && o6.style.display == "none") {
        ok();
    }
}

function xx6() {
    o6.style.display = "none";
    x6.style.width = "200px";
    x6.style.height = "200px";
    if (o6.style.display === "none" && o3.style.display === "none" && o9.style.display == "none") {
        ok();
    }
    if (o4.style.display === "none" && o5.style.display === "none" && o6.style.display == "none") {
        ok();
    }
}

function xx7() {
    o7.style.display = "none";
    x7.style.width = "200px";
    x7.style.height = "200px";
    if (o4.style.display === "none" && o7.style.display === "none" && o1.style.display == "none") {
        ok();
    }
    if (o7.style.display === "none" && o5.style.display === "none" && o3.style.display == "none") {
        ok();
    }
    if (o7.style.display === "none" && o8.style.display === "none" && o9.style.display == "none") {
        ok();
    }
}

function xx8() {
    o8.style.display = "none";
    x8.style.width = "200px";
    x8.style.height = "200px";
    if (o2.style.display === "none" && o5.style.display === "none" && o8.style.display == "none") {
        ok();
    }
    if (o7.style.display === "none" && o8.style.display === "none" && o9.style.display == "none") {
        ok();
    }
}

function xx9() {
    o9.style.display = "none";
    x9.style.width = "200px";
    x9.style.height = "200px";
    if (o9.style.display === "none" && o5.style.display === "none" && o1.style.display == "none") {
        ok();
    }
    if (o6.style.display === "none" && o3.style.display === "none" && o9.style.display == "none") {
        ok();
    }
    if (o7.style.display === "none" && o8.style.display === "none" && o9.style.display == "none") {
        ok();
    }
}
///////////////////////////////////////////////////////////oooo
function oo1() {
    x1.style.display = "none";
    o1.style.width = "200px";
    o1.style.height = "200px";
    if (x9.style.display === "none" && x5.style.display === "none" && x1.style.display == "none") {
        oko();
    }
    if (x2.style.display === "none" && x3.style.display === "none" && x1.style.display == "none") {
        oko();

    }
    if (x4.style.display === "none" && x7.style.display === "none" && x1.style.display == "none") {
        oko();
    }
}

function oo2() {
    x2.style.display = "none";
    o2.style.width = "200px";
    o2.style.height = "200px";
    if (x2.style.display === "none" && x3.style.display === "none" && x1.style.display == "none") {
        oko();

    }
    if (x2.style.display === "none" && x5.style.display === "none" && x8.style.display == "none") {
        oko();
    }
}

function oo3() {
    x3.style.display = "none";
    o3.style.width = "200px";
    o3.style.height = "200px";
    if (x2.style.display === "none" && x3.style.display === "none" && x1.style.display == "none") {
        oko();

    }
    if (x6.style.display === "none" && x3.style.display === "none" && x9.style.display == "none") {
        oko();
    }
    if (x7.style.display === "none" && x5.style.display === "none" && x3.style.display == "none") {
        oko();
    }
}

function oo4() {
    x4.style.display = "none";
    o4.style.width = "200px";
    o4.style.height = "200px";
    if (x4.style.display === "none" && x7.style.display === "none" && x1.style.display == "none") {
        oko();
    }
    if (x4.style.display === "none" && x5.style.display === "none" && x6.style.display == "none") {
        oko();
    }
}

function oo5() {
    x5.style.display = "none";
    o5.style.width = "200px";
    o5.style.height = "200px";
    if (x9.style.display === "none" && x5.style.display === "none" && x1.style.display == "none") {
        oko();
    }
    if (x2.style.display === "none" && x5.style.display === "none" && x8.style.display == "none") {
        oko();
    }
    if (x7.style.display === "none" && x5.style.display === "none" && x3.style.display == "none") {
        oko();
    }
    if (x4.style.display === "none" && x5.style.display === "none" && x6.style.display == "none") {
        oko();
    }
}

function oo6() {
    x6.style.display = "none";
    o6.style.width = "200px";
    o6.style.height = "200px";
    if (x6.style.display === "none" && x3.style.display === "none" && x9.style.display == "none") {
        oko();
    }
    if (x4.style.display === "none" && x5.style.display === "none" && x6.style.display == "none") {
        oko();
    }
}

function oo7() {
    x7.style.display = "none";
    o7.style.width = "200px";
    o7.style.height = "200px";
    if (x4.style.display === "none" && x7.style.display === "none" && x1.style.display == "none") {
        oko();
    }
    if (x7.style.display === "none" && x5.style.display === "none" && x3.style.display == "none") {
        oko();
    }
    if (x7.style.display === "none" && x8.style.display === "none" && x9.style.display == "none") {
        oko();
    }
}

function oo8() {
    x8.style.display = "none";
    o8.style.width = "200px";
    o8.style.height = "200px";
    if (x2.style.display === "none" && x5.style.display === "none" && x8.style.display == "none") {
        oko();
    }
    if (x7.style.display === "none" && x8.style.display === "none" && x9.style.display == "none") {
        oko();
    }
}

function oo9() {
    x9.style.display = "none";
    o9.style.width = "200px";
    o9.style.height = "200px";
    if (x9.style.display === "none" && x5.style.display === "none" && x1.style.display == "none") {
        oko();
    }
    if (x6.style.display === "none" && x3.style.display === "none" && x9.style.display == "none") {
        oko();
    }
    if (x7.style.display === "none" && x8.style.display === "none" && x9.style.display == "none") {
        oko();
    }
}