//Object property shorthand

const name = 'Andrew';
const userAge = 27;


//shorthand syntax for objects in which object 
//keys and variable names are the same. 
//In this case, name fits this scenario.
const user = {
    name,
    age:userAge,
    location:'Phiadelphia'
}

console.log(user);

//Object destructuring

const product = {
    label: 'Red  notebook',
    price: 3,
    stock:201,
    salePrice:undefined
}

//Traditional way of creating variables based on Objects:
/*
const label = product.label;
const stock = product.stock;
*/
/*
ES6 Destructuring:
Notice we added rating. This won't cause the app to crash.
Variables that don't have a property in the object will just be undefined.
We can also assign default values if the value doesn't exist. In this case,
we gave rating a value of 5.
We can also use our own variable names Notice we use label, then a new name.
*/

/*
const {label:productLabel, stock, rating = 5} = product;

console.log(productLabel);
console.log(stock);
console.log(rating);
*/

//Anothe example:
/*
Another neat example of destructuring is it can be done
within the function declaration. In this case, we are passing
the object product in the function call. Then in the declaration,
we are destructuring it so that the variables can then be used
in the function body.
*/

const transaction = (type, {label, stock}) => {
    console.log(type,label,stock);
}

transaction('order',product);