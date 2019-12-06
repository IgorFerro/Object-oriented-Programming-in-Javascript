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
/*
let obj = {value: 10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj);
*/
///////////////////////////////////////////////////////////
//Adding or Removing Properties
//Constroctur Function
function Circle(radius){
    this.radius= radius;
    this.draw= function(){
        console.log('draw');
    }
}

//Object
const circle = new Circle(10);

//Create New Object
circle.location = {x:1};

//Add new object 
const propertyName = 'center location';
circle.propertyName = {x:1};

//Delete a property
delete circle['location'];

/////////////////////////////////////////////////////////////
//Enumerating Properties
//Constroctur Function
function Circle(radius){
    this.radius= radius;
    this.draw= function(){
        console.log('draw');
    }
}

//Object
const circle = new Circle(10);
