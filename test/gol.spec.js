'use strict';
var assert = require('assert');

function isAlive(neighbours) {
    return neighbours == 1;
}

class Cell {
    constructor(neighbours){
        this.neighbours = neighbours;
    }

    neighbours_count() {
        return this.neighbours;
    }
}

class World {
    constructor(cells){
        this.cells = cells;
    }

    next_generation() {
        var i =0;
        var result =[];
        for (var cellNumber of this.cells) {
            if (this.cells[i+1] ==1 + this.cells[i-1] == 1) {
                result[i] = 1;
            } else {
                result[i] = 0;
            }
            i++;
        }
        this.cells = result;
        return this;
    }

    printWorld(){
        return this.cells;
    }
}
describe('GOL', () => {

    it('alive cell with 1 neighbour dies', () => {
        assert.equal(isAlive(1), true);
        assert.equal(isAlive(2), false);
    });

    it('calculate cell neighbours', () => {
        var cell = new Cell(3);
        assert.equal(cell.neighbours_count(), 3);
        var cell = new Cell(4);
        assert.equal(cell.neighbours_count(), 4);
    });

    it('x. -> .x', () => {
        var world= new World(([0,1]))
        assert.equal(world.next_generation().printWorld(), [1,0]);
    });

    it('.xx -> x..', () => {
        var world= new World(([1,1,1]))
        assert.equal(world.next_generation().printWorld(), [0,1,1]);
    });

});

