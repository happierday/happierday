const User = require('../models/userProfile');
const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const router = express.Router();

router.post('/',(req,res)=>{
    if(!req.body.email){
        res.json({success: false, message: 'You must provide an email'});
    }else{
        if(!req.body.username){
            res.json({success:  false, message: 'You must provide a username'});
        }else{
            if(!req.body.password){
                res.json({success: false, message: 'You must provide a password'});
            }else{
                let user = new User({
                    email: req.body.email.toLowerCase(),
                    username: req.body.username.toLowerCase(),
                    password: req.body.password
                });
                user.save((err)=>{
                    if(err){
                        if(err.code === 11000){
                            res.json({success: false, message: 'Username or Email already exists!'});
                        }else{
                            if(err.errors){
                                if(err.errors.email){
                                    res.json({success: false, message: err.errors.email.message});
                                }else{
                                    if(err.errors.username){
                                        res.json({success: false, message: err.errors.username.message});
                                    }else{
                                        if(err.errors.password){
                                            res.json({success: false, message: err.errors.password.message});
                                        }
                                    }
                                }
                            }else{
                                res.json({success: false, message: 'can not save user!'});
                            }
                        }
                    }
                    const token = jwt.sign({userId: user._id},config.secret,{ expiresIn: '10h' });
                    res.json({success: true, message: 'Account Registered! ',token:token});
                })
            }
        }
    }
})

router.get('/checkemail/:email',(req,res) => {
    if(!req.params.email){
        res.json({success: false, message: 'Email is not provided'})
    }else{
        User.findOne({email: req.params.email},(err,user) =>{
            if(err){
                res.json({success: false, message: err})
            }else{
                if(user){
                    res.json({success: false, message: 'Email already Exists'});
                }else{
                    res.json({success: true, message:'Email is avaliable!'});
                }
            }
        })
    }
})

router.get('/checkusername/:username',(req,res) => {
    if(!req.params.username){
        res.json({success: false, message: 'Username is not provided'})
    }else{
        User.findOne({username: req.params.username},(err,user) =>{
            if(err){
                res.json({success: false, message: err})
            }else{
                if(user){
                    res.json({success: false, message: 'Username already Exists'});
                }else{
                    res.json({success: true, message:'Username is avaliable!'});
                }
            }
        })
    }
})

module.exports = router;
