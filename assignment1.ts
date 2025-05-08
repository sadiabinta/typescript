
// ##########################//
function formatString(input:string,toUpper?:boolean):string{
    if(toUpper || typeof toUpper==='undefined'){
        return input.toUpperCase()
    }
    else{
        return input.toLowerCase()
    }
}
console.log(formatString("Hello"));

// ##########################//


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const goodItems=items.filter(item=>item.rating>=4)
    return goodItems;
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
  console.log(filterByRating(books)); 

  // ##########################//

  function concatenateArrays<T>(...arrays: T[][]): T[]{
    let concatValue:T[]=[];
    for (const array of arrays){
        concatValue=[...concatValue,...array]
    }
    return concatValue;
        
  }

console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));

// ##########################//

class Vehicle{
    private _make:string;
    private _year:number;

    constructor(_make:string,_year:number){
        this._make=_make;
        this._year=_year;
    }

    getInfo(){
        console.log(`Make: ${this._make}, Year: ${this._year}`);
    }

}
class Car extends Vehicle{
    private _model:string;
    constructor(_make:string,_year:number,_model:string){
        super(_make,_year);
        this._model=_model;
    }
    getModel(){
        console.log(`Model: ${this._model}`);
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();

// ##########################//

function processValue(value: string | number): number{
    if(typeof value ==='string'){
        return value.length;
    }
    else{
        return value*2;
    }
}

console.log(processValue("hello"));
console.log(processValue(10));

// ##########################//

interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]):Product | null{
    let expensive=products[0];
    if(products){
        for(const product of products){
            if(product.price>expensive.price){
                expensive=product;
            }
        }
        return expensive
    }
    else{
        return null
    }
  }
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  console.log(getMostExpensiveProduct(products));  
  // Output: { name: "Bag", price: 50 }
