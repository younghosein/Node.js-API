const fs= require('fs');

//blocking:
const data = fs.readFileSync('main.txt');
console.log(data.toString());
console.log('end process1');

//non-blocking
fs.readFile('main.txt', (err , data)=>{
    if(err)
        console.log(err)
    console.log(data.toString())
})
console.log('end process2')