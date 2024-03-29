const p1 = new Promise((reslove, reject) => {
    setTimeout(() => {
        reject("it's rejected");
    }, 500);
});


p1.then(res => console.log('res', res), err => console.log('err', err)).catch(err => console.log('err2', err)).finally(() => console.log("Finally"));