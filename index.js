const express= require('express');

const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
const { render } = require('ejs');
const { resolveMx } = require('dns');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/css', express.static('public'))
app.use(express.static(__dirname +'/public'));

const user = {
  
    firstName: 'Lakan',
    lastName: 'Santos',
    email: 'lakan@gmail.com',
    password: 'lakanlakan',
    balance: 10000,
    accountCreated: 08/03/2022
}


app.get('/user/deposit', (req,res)=>{
   
    remainingBalance= user.balance
   
 
    res.render('user/deposit', {user, remainingBalance})
})
app.post('/user/deposit', (req,res)=>{
   
    const {deposit} =req.body;
    remainingBalance= user.balance+deposit
    user.push({balance: remainingBalance})
 
    res.render('user/deposit', {user, deposit, remainingBalance})
})

app.get('/user/infodeposit', (req,res)=>{

    
    res.render('user/infodeposit', {user})
})

app.get('/user/balance', (req, res)=>{
    res.render('user/balance', {user})
})
app.post('/user/infodeposit', (req,res)=>{
    let {deposit} = req.body
    remainingBalance = user.balance+ parseInt(deposit);
    //  transactionId= [];
    // chars = 'ABCDEFGHIJKLMNOPQRSUTVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    
    // for(let i=0; i<15; i++){
    //     transactionId += chars[Math.floor(Math.random()*chars.length)];
    // }
    transactionId= uuidv4();
    
    res.render('user/infodeposit', {user, transactionId, deposit, remainingBalance})
    
    
})
app.get('/user/signup', (req,res)=>{
    res.render('user/signup')
})
app.get('/user/successdeposit', (req, res)=>{
    res.render('user/successdeposit')
})


//WITHDRAW
app.get('/user/success', (req, res)=>{
    res.render('user/success')
})

app.get('/user/withdraw', (req,res)=>{
   
    remainingBalance= user.balance
   
 
    res.render('user/withdraw', {user, remainingBalance})
})
app.post('/user/withdraw', (req,res)=>{
   
    const {withdraw} =req.body;
    remainingBalance= user.balance-withdraw
    user.push({balance: remainingBalance})
 
    res.render('user/withdraw', {user, withdraw, remainingBalance})
})

app.get('/user/info', (req,res)=>{

    
    res.render('user/details', {user})
})

app.post('/user/info', (req,res)=>{
    let {withdraw} = req.body
    remainingBalance = user.balance-withdraw;
    //  transactionId= [];
    // chars = 'ABCDEFGHIJKLMNOPQRSUTVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    
    // for(let i=0; i<15; i++){
    //     transactionId += chars[Math.floor(Math.random()*chars.length)];
    // }
    transactionId= uuidv4();
    
    res.render('user/details', {user, transactionId, withdraw, remainingBalance})
    
    
})


// app.post('/user/info', (req,res)=>{
//     const {withdraw} = req.body
//     remainingBalance = user.balance-withdraw;
//     //  transactionId= [];
//     // chars = 'ABCDEFGHIJKLMNOPQRSUTVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    
//     // for(let i=0; i<15; i++){
//     //     transactionId += chars[Math.floor(Math.random()*chars.length)];
//     // }
//     transactionId= uuidv4();
    
//     res.render('user/details', {user, transactionId, withdraw, remainingBalance})
    
    
// })




    // app.patch('/user/details', (req, res)=>{
    //     const {withdraw} = req.body
    // remainingBalance = user.balance-withdraw;
    // balance= remainingBalance
    //     res.render('user/withdraw')
    // })



app.get('/', (req,res)=>{
    res.render('user/home')
})


app.get('/user/login', (req,res)=>{
    res.render('user/login')
})

app.get('/user/login', (req,res)=>{
    res.render('user/login')
})




app.listen(3000, ()=>{

    console.log('On port 3000');
})