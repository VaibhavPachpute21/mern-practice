import {v4 as uuid} from 'uuid'


let users=[];
let posts=[];

export const getUsers=(req,res)=>{
    res.send(users)

}

export const createPost=(req,res)=>{
    const post=req.body;
    posts.push({...post,id:uuid()});
    res.send(posts);
}

export const createUser=(req,res)=>{
    const user=req.body;
    users.push({...user,id:uuid()});
    res.send("user created!");
}

export const getUser=(req,res)=>{
    console.log(req.params)
    console.log(req.body)
    const singleUser=users.filter((user)=>user.id ===req.params.id);
    res.send(singleUser);
}

export const deleteUser=(req,res)=>{
    console.log(req.params)
    users=users.filter((user)=>user.id !== req.params.id);
    res.send(users)
}


export const updateUser=(req,res)=>{
    const user= users.find((user)=>user.id === req.params.id);
    user.name=req.body.name;
    user.email=req.body.email;
    user.contact=req.body.contact;
    res.send("User Updated")
}


