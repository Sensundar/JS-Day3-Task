//To compare two JSON have same properties without order

//In JS Object keys represents properties

function compareJSONwithoutOrder(obj1, obj2){
    let keys1 = Object.keys(obj1).sort();
    let keys2 = Object.keys(obj2).sort();
    //console.log(keys1, keys2)
    let result = ((JSON.stringify(keys1)) === JSON.stringify(keys2));
    return result;
    //console.log(result)
}

let obj1 = {name:"Person 1",age:5};
let obj2 = {age:5,name:"Person 1"};

let result = compareJSONwithoutOrder(obj1,obj2);
if (result){
    console.log("Two JSON have same properties without orders")
}else{
    console.log("Two JSON have not same properties")

}

