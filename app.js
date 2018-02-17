const [,,a,b,c] = process.argv;


const checkTriangle = (a,b,c) => {
    // if(process.argv.length!=5){
    //    return "you need to input precisely 3 values"
    // }
    if(a==b && b==c){
        return ("Your triangle is equilateral")
    }
    else if(a==b || b==c || a==c){
        return ("Your triangle is isosceles")
    }
        return ("Your triangle is scalene")
}

//console.log(checkTriangle(a,b,c))

module.exports = checkTriangle;