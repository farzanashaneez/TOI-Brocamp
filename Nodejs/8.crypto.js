import crypto from 'crypto'
const hash = crypto.createHash('sha256').update('mypassword').digest('hex');
console.log(hash); // => hashed string

//createhash('sha256')
//update('password')
//digest('hex)

// if bcrypt?
// bcrypt.hash(password,10,(err,hash)=>{
//     bcrypt.compare(password,hash,(err,res)=>{

//     })
// })
