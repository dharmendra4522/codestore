function squarePattern(n) {
    let size = 2 * n - 1;
    let center = size / 2;

    for(let i =0; i<size; i++){
        for(let j=0; j<size; j++){
            let distance = Math.max(Math.abs(i-center), Math.abs(j-center));
            let distanceValue = distance + 1;
            
        }
    }
}