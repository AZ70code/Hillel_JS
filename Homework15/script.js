function createAsyncList(iterations) {
    const data = [];
    let count = 0;

    function objCreation(n) {
        let obj = {};
        obj.massage = 'Current iteration'+' '+`${n}`;
        return obj;
    }
    
    return new Promise((resolve, reject) => {
       let intervalId = setInterval(() => {
            count++;
            if(count == iterations){
                clearInterval(intervalId);
              };
            obj = objCreation(count);
            console.log(obj);
            data.push(obj);
        }, 1000);
        resolve(data);
    })
}
createAsyncList(3).then((data) => {
console.log(data);
})