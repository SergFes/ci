function sum(a,b){
    return a+b;
}

describe ('Travis TEST',()=>{
    it("function sum",()=>{
           expect(sum(3,4)).toEqual(7) 
    })   
})