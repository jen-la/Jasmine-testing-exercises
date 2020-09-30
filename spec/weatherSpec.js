// specs for getWeatherFor function (asynchronous)
describe('getWeatherFor', () => {

    describe('if passed "Sydney"', () => {
        it('should resolve 25', () => {
            return expectAsync(getWeatherFor('Sydney')).toBeResolvedTo(25);       
        });
    });

    describe('if passed "Melbourne"', () => {
        it('should resolve 15', () => {
            return expectAsync(getWeatherFor('Melbourne')).toBeResolvedTo(15);
        });
    });
    
    describe('if passed any city other than "Sydney" or "Melbourne"', () => {
        it('should reject with an error', () => {
            return expectAsync(getWeatherFor('Adelaide')).toBeRejectedWith('City Adelaide does not exist in our database');
        });
    });
});


