function isEmpty(value) {
    return Object.keys(value).length === 0;
  }


let obj = {test: 1};

console.log(isEmpty(obj));