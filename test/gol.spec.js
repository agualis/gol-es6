'use strict';
var assert = require('assert');

function calculate_neighbours(cells, x, y) {
    return check_alive_cell(cells, x-1, y-1) +
    check_alive_cell(cells, x, y-1) +
    check_alive_cell(cells, x+1, y-1) +
    check_alive_cell(cells, x-1, y) +
    check_alive_cell(cells, x+1, y) +
    check_alive_cell(cells, x-1, y+1) +
    check_alive_cell(cells, x, y+1) +
    check_alive_cell(cells, x+1, y+1);
}

function check_alive_cell(cells, x, y) {
    try {
        if (cells[x][y] =='V') return 1;
    } catch (error) {
        return 0;
    }
    return 0;
}


function apply_rule(cell_status, neighbours_count) {
    if (neighbours_count>2) return 'V';
    return 'M'

}

function next_generation(cells) {
    return cells.map((row, row_number)=> calculate_next_generation_by_row(cells, row, row_number));
}

function calculate_next_generation_by_row(cells, row, row_number) {
    return row.map((cell_status, column_number)=> apply_rule(cell_status, calculate_neighbours(cells, column_number, row_number)))
}
describe('GOL', () => {

    it('calculate neighbours', () => {

        var cells = []
        cells [0] = ['V','M','V']
        cells [1] = ['M','M', 'V']
        cells [2] = ['M','M', 'V']
        assert.equal(calculate_neighbours(cells, 0, 0), 0);
        assert.equal(calculate_neighbours(cells, 1, 1), 4);
        cells = next_generation(cells);
        console.log(cells)
        cells = next_generation(cells);
        console.log(cells)
        cells = next_generation(cells);
        console.log(cells)
        cells = next_generation(cells);
        console.log(cells)


    });

});

