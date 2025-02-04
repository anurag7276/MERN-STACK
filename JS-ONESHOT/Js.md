Concept of false and truthy values:-
False => undefined , null , 0 ,false ,NAN, ' '
truthy=> anything that is not false

&& => return  false values
|| => return first truthy values this is called short circuting concept

function is also an object in js

TYPES IN JS

Primitive or values types => Number String Boolean Undefined Null

Refrence types Or Objects => Function Object Array

refrence types or Objects same address pr point karte hai

primitive me copy banti hai

Note:-
Primitive are copied by their value
Refrance are copied by their address/refrances

let lastname = 'babbar' =>                  this is string primitive type

let lastname = new String('babbar')    =>  this is Object


string_name[index]
string_name.includes('any char sequence ')//boolean type
string_name.startWith('any char sequence ')//boolean type
string_name.endsWith('any char sequence ')//boolean type
string_name.toLowerCase()
string_name.toUpperCase()


Array Insertion

End =>   num.push(element)
BEGIN =>  num.unshift(element)
Middle =>  num.splice(which index , kitna delete karna hai )

Array Searching

this 2 types is used for primitive 
.indexOf()
.includes()

for object/Refrance type we use => callback fumction

arrayname.find(callback fn / predicate fn)


Array Removing

end   => .pop()
biggining =>  .shift()
middle => .splice(which index , delete count)


remove all element:-
array.length(0)
array.splice(0,array.length)

Spread operater

combined_Array = [...array1 , ...array2]

Mapping => map each element of array to something else


inspect then select any element and we can acces through $0


Document fragment => light weight dom object 
in this ,updation ke baad bhi reflow aur repaint nahi hota 
jab fragment ko reflow aur repaint karenge tab 1 reflow aur 1 repaint hoga
js is single threaded language ->,processing one command at a time
js is synchronous language

event loop asyn code ko run karta hai like settimeout, addeventlistner

API=> application programming interface

features of async code:-
* clean and concise
* better error handling
* easier bugging



Custom attribute is used to catch element through js like class , id...
and catch through ("[customSelector]") liken . is used for class  

("input[type=checkbox]") is a way to catch element

<input type="range" min="1" max="20">  this is for slider   

Math.floor(Math.random() * (max - min) ) + min

String.fromCharCode(ascii value)
String.charAt(index)  // acces value

how to copy clipboard
navigator.clipbored.writeText(passwordDisplay.value)

class.checked => return true  or false

apperance : none; => default brawser property nahi lagta



AngryTools.com   website is used for gradient generator code


.classname::-webkit-slider-thumb:hover   

boxes[index].style.pointerEvents = "none"
boxes[index].style.pointerEvents = "all"

outline : 2px solid blue;