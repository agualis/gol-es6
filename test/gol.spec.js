'use strict';
var assert = require('assert');

const ALIVE = true;

describe('Game Of Life', ()=>  {

    function rule1 (cell) {
        if (cell.is_alive() && cell.neighbours_count()<2){
            cell.alive=false;
            return true;
        }
        return false;
    }

    function rule2 (cell) {
        if (cell.is_alive() && cell.neighbours_count() in (2,3)){
            cell.alive=false;
            return true;
        }
        return false;
    }


    class Cell {

        constructor(alive, neighbours, rules){
            this.alive = alive;
            this.neighbours = neighbours
            this.rules = rules;
        }

        is_alive(){
            return this.alive;
        }

        is_death() {
            return !this.alive;
        }

        neighbours_count() {
            return this.neighbours;
        }

        next_generation() {
            for (var rule of this.rules) {
                if (rule(this)) return;
            }
            if (this.neighbours_count() >=3){
                this.alive = false;
            } else {
                this.alive = true;
            }
        }
    };
    var rules = [rule1]
    let cell = new Cell(ALIVE, 1, rules);

    it('A cell is alive', () => {
        assert.equal(cell.is_alive(), ALIVE);
    });

    it('A cell is  death', () => {
        assert.equal(cell.is_death(), !ALIVE);
    });

    it('A cell has neigbours', () => {
        assert.equal(cell.neighbours_count(), 1);
        let cell2 = new Cell(ALIVE, 4)
        assert.equal(cell2.neighbours_count(), 4);
    });

    it('Any live cell with fewer than two live neighbours_count dies', () => {
        let cell = new Cell(ALIVE, 1, rules);
        cell.next_generation()
        assert.equal(cell.is_death(), true);
    });

    it('Any live cell with two or three live neighbours lives', () => {
        let cell = new Cell(ALIVE, 2, rules);
        cell.next_generation()
        assert.equal(cell.is_alive(), true);
    });

    it('Any live cell with more than three live neighbours dies', () => {
        let cell = new Cell(ALIVE, 3, rules);
        cell.next_generation()
        assert.equal(cell.is_death(), true);
    });

});

