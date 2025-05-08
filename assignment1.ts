
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
myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
myCar.getModel();  // Output: "Model: Corolla"
