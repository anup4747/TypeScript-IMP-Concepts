// let hero;

// function getHero(){
//     return "thor"
// }

// hero = getHero();

// the code is correct but this is not good practice. Cause hero's type not defined and what type will going to asign is any of the type so use below code 

let hero:string ;

function getHero(){
    return "thor"
}

hero = getHero();

// when you dont specify a type and typescript cant infer it from context, the compiler will typically default to any

// You ususally want tot avoid this, though, because any isnt type-checked. Use compiler flag [noImplictAny] to flag any implicit any as an error
