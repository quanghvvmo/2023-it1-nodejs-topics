const express = require('express')
const func = require('./functions')

class BaseRouter extends express.Router{
    constructor(service){
        super();
        if(!service){
            service = new func(null, null)
        }
        this.get('/:id',(req,res,next)=>{
            service.getOne(req,res,next)
        })
        this.get('/users',(req,res,next)=>{
            service.getAll(req,res,next)
        })
        this.post('/',(req,res,next)=>{
            service.addData(req,res,next)
        })
        this.put('/:id',(req,res,next)=>{
            service.updateOne(req,res,next)
        })
        this.delete('/:id',(req,res,next)=>{
            service.deleteOne(req,res,next)
        })
    }
}
module.exports =  BaseRouter