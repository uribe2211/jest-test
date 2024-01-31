let animals=['cat', 'dog', 'elephant', 'lion'];

describe('animals', () => {
    it('should add animal', () => {
        animals.push('tiger');
        expect(animals[animals.length-1]).toBe('tiger');
    })
})