
function createAsyncList(iterations) {
    const arr = [];
    return function fn() {
        return new Promise ((resolve, reject) => {
            setTimeout (() => {
                arr.push({message: `Current iteration ${iterations}`})
                iterations--;
                if(iterations !=0) resolve(fn());
                else resolve(arr.reverse());
            }, 1000)
        })
    }()
}
createAsyncList(3).then((data) => {
console.log(data);
})