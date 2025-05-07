
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
  // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

