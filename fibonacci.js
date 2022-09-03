function fibonacciGenerator (n) {

    var sequence = [];

    for (var i = 0; i < n; i++){
        if (i === 0 || i ===1){
            sequence.push(i);
        }else{
            sequence.push(sequence[(i-1)] + sequence[(i-2)]);
        }    
    }
    
    return sequence;
}

fibonacciGenerator(4);
