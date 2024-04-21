"use server"

import {connect} from "@/dbconfig/db";
import Room from "@/models/room.model";

interface Room {
    roomname: string;
    description?: string;
    language: string;
    githubrepo?: string;
    userId:any;
}

async function createRoomAction(roomData:Room){
    
    // console.log("userId form server action",roomData)
    connect();
    
    const newRoom=new Room(roomData)

    await newRoom.save();
    

    
}
export {
    createRoomAction
}

// const user=await User.findOne({email})
// const newUser=new User({
    //     username,
    //     email,
    //     password:hashedPassword
    // })
    // const savedUser=await newUser.save()