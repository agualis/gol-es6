'use strict';
var assert = require('assert');

const FIZZ = 'FIZZ';
const BUZZ = 'BUZZ';
const BANG = 'BANG';

class FizzBuzzTranslator {
    constructor(rules){
        this.rules = rules;
    }
    say(input) {
        var result = ''
        for (var rule of this.rules) {
            var doesitmatch = rule.matches(input)
            if (rule.matches(input)) result += rule.say();
        }
        return result == '' ? input.toString() : result;
    }
}

class FizzRule {
    matches(input){
        return (input % 3 == 0);
    }
    say(){
        return FIZZ
    }
}

class BuzzRule {
    matches(input){
        return (input % 5 == 0);
    }
    say(){
        return BUZZ
    }
}

class BangRule {
    matches(input){
        return (input % 7 == 0);
    }
    say(){
        return BANG
    }
}

describe('array', () => {

    //SETUP
    const rules = [new FizzRule(), new BuzzRule(), new BangRule()]
    const translator = new FizzBuzzTranslator(rules);

    it('should repeat numbers when no pattern rule matched', () => {
        assert.equal(translator.say(1), 1);
    });

    it('should say Fizz', () => {
        assert.equal(translator.say(3), FIZZ);
    });

    it('should say Buzz', () => {
        assert.equal(translator.say(5), BUZZ);
    });

    it('should say FizzBuzz', () => {
        assert.equal(translator.say(15), FIZZ + BUZZ);
    });

    it('should say Bang', () => {
        assert.equal(translator.say(7), BANG);
    });

    it('should say Bang', () => {
        assert.equal(translator.say(7*3), FIZZ + BANG);
    });


});

