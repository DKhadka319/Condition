let minMoves = Infinity;

function alreadyVisited(cell, visitedCells) {
    return visitedCells.length
        && visitedCells.filter(i => i[0] === cell[0] && i[1] === cell[i]).length;
}

function isAllowed(cell, visitedCells) {
    return !alreadyVisited(cell, visitedCells)
        && cell[0] > 0 && cell[0] < 9
        && cell[1] > 0 && cell[1] < 9;
}

function getMovesCount(startPos, endPos, pathLen, visitedCells) {
    if (pathLen >= 9 || pathLen > minMoves) {
        return;
    }

    if (startPos.join('-') === endPos.join('-') && pathLen < minMoves) {
        minMoves = pathLen;
    }

    const allowedCells = [
        [startPos[0] - 1, startPos[1] - 2], // LeftUpVerticalG
        [startPos[0] - 2, startPos[1] - 1], // LeftUpHorizontalG
        [startPos[0] + 1, startPos[1] - 2], // RightUpVerticalG
        [startPos[0] + 2, startPos[1] - 1], // RightUpHorizontalG

        [startPos[0] - 1, startPos[1] + 2], // LeftBottomVerticalG
        [startPos[0] - 2, startPos[1] + 1], // LeftBottomHorizontalG
        [startPos[0] + 1, startPos[1] + 2], // RightBottomVerticalG
        [startPos[0] + 2, startPos[1] + 1], // RightBottomHorizontalG
    ].filter(i => isAllowed(i, visitedCells));

    if (! allowedCells.length) {
        return;
    }

    for (let allowedCell of allowedCells) {
        getMovesCount(
            allowedCell,
            endPos,
            pathLen+1,
            [...visitedCells].concat([allowedCell]));
    }
}

function QuickKnight(str) {
    const [startPos, endPos] = str
        .match(/\(\d \d\)/g)
        .map(i => i.replace(/[\(\)]/g, '').split(' ').map(i => parseInt(i)));

    getMovesCount(startPos, endPos, 0, [startPos]);

    return minMoves;
}
   
// keep this function call here 
console.log(QuickKnight(readline()));
