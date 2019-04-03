const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Andrew',
        //     age: 26
        // });
        reject('something went wrong');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log(data);

    retunr 'some data';
}).then((str) => {
    console.log('does this run?', str);
}).catch((e) => {
    console.log('error: ', e);
});

console.log('after');