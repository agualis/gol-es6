'use strict';
var assert = require('assert');

describe('GOL with no primitives, Lay of Demeter and Information Hiding', () => {

    class Address {
        constructor(x,y){
            this.x = x
            this.y = y
        }
    }

    class Cell{
        constructor(address){
            this.address = address
        }

        getX() {
            return this.address.x
        }

        getY() {
            return this.address.y
        }

        aliveTopNeighbour(world){
            try {
                return world.cellByAdress(new Address(this.x, this.y-1)) ? 1 : 0;
            } catch (error) {
                return 0;
            }
        }

        aliveTopRightNeighbour(world){
            try {
                return world.cellByAdress(new Address(this.x+1, this.y-1)) ? 1 : 0;
            } catch (error) {
                return 0;
            }
        }

        aliveTopRightNeighbour(world){
            try {
                return world.cellByAdress(new Address(this.x+1, this.y-1)) ? 1 : 0;
            } catch (error) {
                return 0;
            }
        }


    }
    class World{
        constructor(){
            this.neighbours = Array(100).fill().map(()=> Array(100));
            for (var cell of arguments) {
                this.neighbours[cell.getX()][cell.getY()] = cell
            }
        }
        neighboursCount(cell) {
            this.neighboursCount(this)
            return 3
        }

        cellByAdress(address){
            cells[x][y]
        }
    }

    it('Cell has neighbours', () => {
        const cellWithOneNeighbours = new Cell(new Address(0,0))
        const cellWithTwoNeighbours = new Cell(new Address(0,1))
        const anyCell= new Cell(new Address(1,2))
        const world = new World(cellWithOneNeighbours, cellWithTwoNeighbours, anyCell)
        assert.equal(world.neighboursCount(cellWithOneNeighbours), 1);
        assert.equal(world.neighboursCount(cellWithTwoNeighbours), 2);
    });
});

