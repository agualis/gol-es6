'use strict';
var assert = require('assert');


function counter(cells,x,y) {
    try {
        if (cells[x][y] === 'x') return 1;
    } catch(error){
        return 0;
    }
    return 0;
}

function neighbours_count(x, y, cells) {
    return counter(cells, x-1, y-1) +
    counter(cells, x, y-1) +
    counter(cells,x+1,y-1) +
    counter(cells,x-1,y) +
    counter(cells,x+1,y)+
    counter(cells,x-1,y+1)+
    counter(cells,x,y+1)+
    counter(cells,x+1,y+1)
}
describe('GOL', () => {

    it('4 cells world 2x2', () => {

        const cells = [];
        cells[0] = [];
        cells[1] = [];

        cells[0][0]='.';
        cells[0][1]='.';
        cells[1][0]='.';
        cells[1][1]='x';

        console.log(cells);

        assert.equal(neighbours_count(1,1, cells), 0);
        assert.equal(neighbours_count(0,0, cells), 1);

        
    });

});

