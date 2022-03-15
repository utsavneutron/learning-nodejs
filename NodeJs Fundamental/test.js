describe('calc', () => {
    it('should multiply 2 and 2', () => {
        expect(2*2).toBe(4)
    })
})

describe('get messages', () => {
    it('should return 200 ok',(done) => {
        request.get('http://localhost:3000/messages', (err,res) => {
            console.log(res.body)
            expect(res.statusCode).toEqual(200)
            done()
        })
    })

    it('should return a list, thats not empty',(done) => {
        request.get('http://localhost:3000/messages', (err,res) => {
            expect(JSON.parse(res.body).length).toBeGreaterThan(40)
            done()
        })
    })
})

it('should return multiplication of two digits', () => {
    expect(myFunction(2,6)).toBe(12)
})

function myFunction(x,y){
    return x*y
}

/*
Which code should come instead of the ??? placeholder for this Jasmine test to pass?
 

describe('calc', () => {
    it('should calculate 2 to the power of 3', () => {
        ???
    })
})

Answer: expect(2**3).toBe(8)
*/