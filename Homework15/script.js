function createAsyncList(iterations) {
    const data = [];

    function dataCreation(n) {
        let obj = {};
        if(n>0){
            obj.massage = 'Current iteration'+' '+`${n}`;
            dataCreation(n-1);
            data.push(obj);
        } else return;
    }

    return new Promise(resolve => {
        dataCreation(iterations);
        resolve(data);
    })
}
createAsyncList(3).then((data) => {
console.log(data);
})