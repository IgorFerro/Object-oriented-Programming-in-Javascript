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
//Constructor Function
/*function Circle(radius){
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
*/
/////////////////////////////////////////////////////////////
//Enumerating Properties
//Constructor Function
/*function Circle(radius){
    this.radius= radius;
    this.draw= function(){
        console.log('draw');
    }
}
//Object
const circle = new Circle(10);


//Enumerating all the members of the Object
for(let key in circle){
    if(typeof circle[key] !=='function')
    console.log(key, circle[key]);
}

//All the Keys from Object
const keys = Object.keys(circle);
console.log(keys);
//Check the existing property or a method
if('radius' in circle)
console.log('Circle  has a radius');*/

/////////////////////////////////////////////////////////
//Abstraction: Hide the details and Show the essentials

//Constructor Function
/*function Circle(radius){
     this.radius= radius;

     //Change for let(private)
    //this.defaultLocation = {x:0, y:0};

    let defaultLocation = {x:0, y:0};

    //Change for let(private)
    //this.computeOptimumLocation = function(factor){}
    let computeOptimumLocation = function(factor){}

    this.draw= function(){
   
     computeOptimumLocation(0.1);

        console.log('draw');
    }
}
//Object
const circle = new Circle(10);
circle.draw();*/
////////////////////////////////////////////////////////////////
//Getter and Setters
function Circle(radius){
    this.radius= radius;

   let defaultLocation = {x:0, y:0};

   //1
   this.getDefaultLocation = function(){
       return defaultLocation;
   };

   this.draw= function(){
   console.log('draw');}
}

Object.defineProperty(this,'defaultLocation', {
   get: function(){
       return defaultLocation;
   },
   set: function(value){
       if(!value.x || !value.y)
       throw new Error('Invalid location.');
       defaultLocation = value;
   } 
})
//Object
const circle = new Circle(10);

//1
//circle.getDefaultLocation();
//circle.getDefaultLocation;
circle.defaultLocation = 1;
circle.draw();

