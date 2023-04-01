const httpStatus = require('http-status');
const Sequelize = require('sequelize');
class baseService {
    _model = null;
    _include = null;
    constructor(model, include){
        if(model){
            this._model = model;
        }
        if(include){
            this._include = include;
        }
        if (!this._model && !(this instanceof baseService)) {
            console.log('The model is not set.');
        }
    }
    getOne = async(req,res,next) => {
        const id = req.params.id || 0;
        try{
            const result = await this._model.findByPk(id);
            if(!result){
                res.status(httpStatus.NOT_FOUND);
            }
            res.status(httpStatus.OK);
            res.json(result);
        }catch(err){
            console.log(err.message);
            next(err);
        }
    }
    getAll = async (req,res,next) => {
        try{
            const result = await this._model.findAll();
            if(!result){
                res.status(httpStatus.NOT_FOUND);
                return;
            }
            res.status(httpStatus.OK);
            res.send(result);
        }catch(err){
            console.log(err.message);
            next(err);
        }
    }
    addData = async (req,res,next) => {    
        try{
            const result = await this._model.create(req.body);
            res.status(httpStatus.CREATED);
            res.send(result)
        }catch(err){
            console.log(err.message);
            next(err);
        }
    }
    updateOne = async (req,res,next) => {
        try{
            const result = await this._model.update(req.body,{
                where:{
                    id:req.params.id
                }
            })
            res.status(httpStatus.OK);
            res.send(result)
        }catch(err){
            console.log(err.message);
            next(err);
        }
    }
    deleteOne = async (req,res,next) => {
        try{
            const result = await this._model.destroy({where:{id:req.params.id}})
            res.status(httpStatus.OK);
            res.send("Delete successfully")
        }catch(err){
            console.log(err.message);
            next(err);
        }
    }
}
module.exports =  baseService