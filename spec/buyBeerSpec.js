// First, create tests for canBuyBeer function - test that the function works as expected for an age under 18, and for an age over 18
describe('canBuyBeer', () => {
    
    describe('if passed an age under 18', () => {
        it('should return false', () => {
            expect(canBuyBeer(17)).toBe(false);
        });
    });

    describe('if passed an age 18 or over', () => {
        it('should return true', () => {
            expect(canBuyBeer(18)).toBe(true);
        });
    });

});


// Next, create tests for the canGregBuyBeer function. First, create a test as if greg.age is over 17.
describe('canGregBuyBeer', () => {
    
    let originalAge;

    beforeEach(() => {
        originalAge = greg.age;
    });

    afterEach(() => {
        greg.age = originalAge;
    });

    describe('if greg is 18', () => {
        
        it('should return "Greg is 18, he can buy beer!"', () => {
            
            // set greg's age to explicitly be 18, we know that canGrebBuyBeer will always return the string 'Greg is 18, he can buy beer!'
            // const originalAge = greg.age;
            greg.age = 18;
            
            expect(canGregBuyBeer()).toBe(`Greg is 18, he can buy beer!`);
            // set greg.age back to original, so as not to break any further tests
            // greg.age = originalAge;
        });
    });

    describe('if greg is 17', () => {

        it('should return "Greg is 17, he can\'t buy beer :("', () => {
            
            // const originalAge = greg.age;
            greg.age = 17;

            expect(canGregBuyBeer()).toBe(`Greg is 17, he can't buy beer :(`);
            // greg.age = originalAge;
        });
    });

});
