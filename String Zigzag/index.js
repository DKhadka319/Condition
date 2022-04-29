function StringZigzag(strArr) {
    const [str, rowCount] = [...strArr];
    const zigzagArr = [];

    if (str.length <= rowCount) {
        return str;
    }

    for (let i=0, zigzagIndex = 0, down=true, strLen=str.length; i<strLen; i++) {
        if (! zigzagArr[zigzagIndex]) {
            zigzagArr[zigzagIndex] = [];
        }
        zigzagArr[zigzagIndex].push(str[i]);

        if (zigzagIndex === 0) {
            down = true;
        } else if (zigzagIndex === rowCount-1) {
            down = false;
        }

        if (down) {
            zigzagIndex++;
        } else {
            zigzagIndex--;
        }
    }

    return [].concat(...zigzagArr).join('');
}
   
// keep this function call here 
console.log(StringZigzag(readline()));
