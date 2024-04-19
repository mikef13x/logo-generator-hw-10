const { Triangle, Circle, Square } = require('../lib/shapes')
describe('Shapes', () => {

    describe('isTriangle', () => {
        it('should inherit the properties from the parent shape, given by the user', () => {
            const isTriangle = new Triangle('hi', 'white', 'green');
            expect(isTriangle.logoText).toBe('hi')
            expect(isTriangle.textColor).toBe('white')
            expect(isTriangle.shapeColor).toBe('green')
        })
        it('should render a triangle shape', () => {
            const isTriangle = new Triangle('x', 'black', 'white');
            expect(isTriangle.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${isTriangle.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${isTriangle.textColor}">${isTriangle.logoText}</text></svg>`)
        })
    })
    describe('isSquare', () => {
        it('should inherit the properties from the parent shape, given by the user', () => {
            const isSquare = new Square('hi', 'white', 'green');
            expect(isSquare.logoText).toBe('hi')
            expect(isSquare.textColor).toBe('white')
            expect(isSquare.shapeColor).toBe('green')
        })
        it('should render a Square shape', () => {
            const isSquare = new Square('x', 'black', 'white');
            expect(isSquare.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect width="300" height="200" x="10" y="10" stroke="black" fill="${isSquare.shapeColor}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${isSquare.textColor}">${isSquare.logoText}</text></svg>`)
        })
    })
    describe('isCircle', () => {
        it('should inherit the properties from the parent shape, given by the user', () => {
            const isCircle = new Circle('hi', 'white', 'green');
            expect(isCircle.logoText).toBe('hi')
            expect(isCircle.textColor).toBe('white')
            expect(isCircle.shapeColor).toBe('green')
        })
        it('should render a Circle shape', () => {
            const isCircle = new Circle('x', 'black', 'white');
            expect(isCircle.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle width="300" height="200" cx="150" cy="100" r="80" fill="${isCircle.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${isCircle.textColor}">${isCircle.logoText}</text></svg>`)
        })
    })
})