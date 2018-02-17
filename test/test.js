const expect = require("chai").expect
const checkTriangle = require('../app')

describe('checkTriangle()', function () {
    it('should return a scalene triangle', function(){

        const a = 5;
        const b = 7;
        const c = 9;
        const res1 = "Your triangle is scalene"

        const res2 = checkTriangle(a,b,c)

        expect(res2).to.be.equal(res1)



    })


})