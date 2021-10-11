/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
   
    let count = 0; 
    const rowMaximums = [];
    const columnMaximums = [];
    //find maximums
    for (let i = 0; i < grid.length; i++) { //row
        for (let j = 0; j < grid[0].length; j++) { //column
            if (grid[i][j] > rowMaximums[i] || rowMaximums[i] === undefined) {
                rowMaximums[i] = grid[i][j];
            }
            if (grid[i][j] > columnMaximums[j] || columnMaximums[j] === undefined) {
                columnMaximums[j] = grid[i][j];
            }
        }
    }
    //determine height change possible, if any
    for (let i = 0; i < grid.length; i++) { //row
        for (let j = 0; j < grid[0].length; j++) { //column
            if (grid[i][j] === rowMaximums[i] || grid[i][j] === columnMaximums[j]) {
                continue;
            } else {
                let tallestItCanBe = Math.min(rowMaximums[i], columnMaximums[j]);
                count += tallestItCanBe - grid[i][j];
            }
        }
    }
    return count;
    
};