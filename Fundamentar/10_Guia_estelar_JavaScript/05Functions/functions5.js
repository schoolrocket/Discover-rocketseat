// function hoisting

sayMyName();


function sayMyName() {
    console.log('Vug')
}

/*      -- alguns exemplos onde não acontece a elevação ou hoisting

var sayMyName = function () {
    console.log('Vug Vug')
}

const sayMyName = function () {
    console.log('Vug Vug')
}

const sayMyName = function sayMyName() {
    console.log('Vug Vug')
}

*/