function volume(l,w,h) {
    return l * w * h;
}

function volumeC(l) {
    return function(w) {
        return function(h) {
            return l * w * h;
        }
    }
}

console.log(multiArg);
console.log(curried);
