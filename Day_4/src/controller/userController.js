const  uuidv4 = require('uuid') 
const  user = require('../_database/models/user');           

class User {
    constructor(){ 
    }
    getAll = async(req,res) => {
        const users = await user.findAll();
        res.send(users);
    }

    updateUser =async (req,res,next) => {
        try{
            const userFind = await user.findOne({ where: { username:username } })
            if(userFind){
                await  userFind.update(req.body)
            res.status(200).json(userFind)
            return;
        }
        }
        catch(err){
            res.status(400).json({ message: "Error updating a user" });
        }        
    }
    activeUser = async (req,res) =>{
        try{
            const User = await user.findOne({where:{username:req.params.username}})
            if(User){
                if(User.isActive==1){
                    await User.update({isActive:0})
                }
                else await User.update({isActive:1})
            res.send(User)
            }
        }
        catch(e){
            res.status(400).json({message:"Error"})
        }
    }
    deleteUser = async (req,res) => {
        try{
            await user.destroy({where:{username:req.params.username}})
            res.status(200).json({message:"OK"})
        }catch(e){
            console.log(e)
            res.status(400).json({message:"Failed"})
        }
    }
        
}




module.exports = new User
