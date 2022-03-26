// == task 1 ==========================================================

function getSum(arr) {
    if(arr.length==1) return arr[0];
    return arr.pop() + getSum(arr);
}
console.log(getSum([1, 2, 3]));
// ================================
function getSumMulti(arr) {
    return arr.reduce((sum, current) => sum + (Array.isArray(current) ? getSumMulti(current) : current), 0);
}
console.log(getSumMulti([1, [2, [3]], [1, 2, 3], [5, 6, [4, 3, [2, 1]]]]));

// ==task 2 ===========================================================

function contains(obj, val) {
    for(let key in obj) {
		if (obj[key] === val)  return true;
        else if(typeof obj[key] === "object" && obj[key] !== null) {
            return contains(obj[key], val);
        }
    }
    return false;
}
const obj = {
    a: {
        b: {
            c: {
                d: 'test',
                e: {
                f: 5
                }
            }
        }
    }
}
console.log(contains(obj, 5));

// == task 3 =================================================================

function createStack() {
    const arr = [];
    const method = {
        add: function plus(value) {
             if(arr) return arr.push(value);
      },
        remove: function() {
           return arr.pop();
      },
        get: function() {
            console.log(arr);
            return arr;
        }
    };
    return method;
}
const stack = createStack();
stack.add(5);
stack.add("test");
stack.remove();
stack.get();

