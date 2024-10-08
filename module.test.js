import { calculateAge } from './module';

/****
 * @function calculateAge
 */

describe('calculateAge Unit Test Suites', () => {
    it('should return the correct age for a person born in 1980', () => {
        const loise = {
            birth: new Date('1980-01-01'),
        };
        const age = calculateAge(loise);
        expect(age).toBe(new Date().getFullYear() - 1980);
    });

    it('should throw an error if no argument is passed', () => {
        expect(() => calculateAge()).toThrow('Invalid input');
    });

    it('should throw an error if the argument is not an object', () => {
        const invalidInput = 'invalid';
        expect(() => calculateAge(invalidInput)).toThrow('Invalid input');
    });

    it('should throw an error if the object does not contain a birth field', () => {
        const personWithoutBirth = {};
        expect(() => calculateAge(personWithoutBirth)).toThrow(
            'Invalid input: missing birth field',
        );
    });

    it('should throw an error if the birth field is not a valid date', () => {
        const personWithInvalidBirth = {
            birth: 'not-a-date',
        };
        expect(() => calculateAge(personWithInvalidBirth)).toThrow(
            'Invalid input: birth must be a valid date',
        );
    });

    it('should return age 0 if the birth date is today', () => {
        const personBornToday = {
            birth: new Date(),
        };
        const age = calculateAge(personBornToday);
        expect(age).toBe(0);
    });

    it('should return correct age even if birth date is a leap year (February 29)', () => {
        const leapYearPerson = {
            birth: new Date('2000-02-29'),
        };
        const age = calculateAge(leapYearPerson);
        expect(age).toBe(new Date().getFullYear() - 2000);
    });

    it('should return correct age next year (simulate test running in 2025)', () => {
        const loise = {
            birth: new Date('1980-01-01'),
        };

        jest.useFakeTimers(); // Activer les fake timers
        jest.setSystemTime(new Date('2025-01-02')); // Simule le 2 janvier 2025, juste après son anniversaire
        const age = calculateAge(loise);
        expect(age).toBe(45);
        jest.useRealTimers();
    });

    it('should throw an error if the birth date is invalid', () => {
        const personWithInvalidBirthDate = {
            birth: new Date('invalid-date'),
        };
        expect(() => calculateAge(personWithInvalidBirthDate)).toThrow(
            'Invalid input: birth must be a valid date',
        );
    });

    it('should handle a person born in the future (return age 0)', () => {
        const futurePerson = {
            birth: new Date('3000-01-01'),
        };
        const age = calculateAge(futurePerson);
        expect(age).toBe(0);
    });

    it('should handle a birth date in ancient history (e.g., 1000 AD)', () => {
        const ancientPerson = {
            birth: new Date('1000-01-01'),
        };
        const age = calculateAge(ancientPerson);
        expect(age).toBe(new Date().getFullYear() - 1000);
    });
});
