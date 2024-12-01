// Discreminated unions

// nerver type unions

interface Circle{
    kind:"circle",
    radius:number
}

interface Square{
    kind: "square",
    side:number 
}

interface Rectagle{
    kind: "rectangle",
    length:number,
    width:number,
    side:number
}

type Shape = Circle | Square | Rectagle
function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side
}

function getArea(shape: Shape){
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
            break;
        case "square":
            return  shape.side * shape.side;
            break;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape : never = shape
            return _defaultforshape
    }
}