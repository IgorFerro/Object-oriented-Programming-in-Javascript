//Objects

//Object Literals

/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function(){
        console.log('draw');
    }
};

circle.draw();
*/
/////////////////////////////////////////////////////////////
//Factory Function
/*
function createCircle(radius){
    return {
        radius,
        draw :function(){
            console.log('draw')
        }
    };
}

const circle = createCircle(1);
circle.draw();

//Constructor Function
function Circle(radius){
    this.radius =radius
    this.draw=function() {
    console.log(draw);
    }
}
const another = new Circle(1);
*/
////////////////////////////////////////////////////////////////
//Value vs Reference Types

/*Value Types        References Type
Number               Object 
String               Function
Boolean              Array
Symbol
undefined
null*/ 

// Primitives are copied by their value
//Objects are copied by their reference

let obj = {value: 10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj);