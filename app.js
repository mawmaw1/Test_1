const [,,a,b,c] = process.argv;

if(process.argv.length!=5){
    console.log("you need to input precisely 3 values")
} else {
    
    if(a==b && b==c){
        console.log("Your triangle is equilateral")
    }
    else if(a==b || b==c || a==c){
        console.log("Your triangle is isosceles")
    }
    else{
        console.log("Your triangle is scalene")
    }
    
}


