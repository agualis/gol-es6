'use strict';
var assert = require('assert');
const FIZZ = "FIZZ";
const BUZZ = "BUZZ";
const BANG = "BANG";
const BINGO = "BINGO";

function repeat(number) {
    return number.toString()
}

const bang = create_module_rule(7, BANG);
const fizz = create_module_rule(3, FIZZ);
const buzz = create_module_rule(5, BUZZ);

function create_module_rule(rule_module, word) {
    return function (num) {
        if (num % rule_module ==0) {
            return word
        };
        return "";
    };
};

var say = (function makeSayFn(concat_rules) {
    return function(num){
        var result = concat_rules.reduce((initial, rule) => initial + rule(num),'');
        if (result) return result
        return repeat(num);
    };
})([fizz, buzz, bang]);

describe('FizzBuzz', () => {

    it('should repeat numbers when no pattern rule matched', () => {
        assert.equal(say(1), "1");
        assert.equal(say(2), "2");
    });

    it('should say Fizz when number is multiple of 3', () => {

        assert.equal(say(3), FIZZ);
        assert.equal(say(9), FIZZ);
    });

    it('should say Buzz when number is multiple of 5', () => {
        assert.equal(say(5), BUZZ);
        assert.equal(say(10), BUZZ);
    });

    it('should say FizzBuzz when number is multiple of 15', () => {
        assert.equal(say(3*5), FIZZ + BUZZ);
    });

    it('should say BANG when number is multiple of 7', () => {
        assert.equal(say(7), BANG);
    });

    it('should say FIZZBANG when number is multiple of 7 and 3', () => {
        assert.equal(say(3*7), FIZZ + BANG);
    });

    it('should say BUZZBANG when number is multiple of 7 and 5', () => {
        assert.equal(say(5*7), BUZZ + BANG);
    });

    it('should say FIZZBUZZBANG when number is multiple of 7, 3 and 5', () => {
        assert.equal(say(3*5*7), FIZZ + BUZZ + BANG);
    });

    it('should say BINGO when number is exactly 40', () => {
        assert.equal(say(40), BINGO);
    });

});

