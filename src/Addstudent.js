import React, { useState } from 'react'
import swal from 'sweetalert';

export default function Addstudent() {
    //1 state
    const [name, setName] = useState("")

    //2 funcation
    function mysubmit(e){
        console.log(name)
        e.preventDefault()

        var data = {
            
                "data": {
                  "name":name
                }
              
          }

        fetch("https://afternoon-eyrie-84059.herokuapp.com/api/friends",{
            method:"post",
             headers: {
              'Content-Type': 'application/json',
        
                 },
            body:JSON.stringify(data)
            
        }).then((d)=>{
            console.log(d.status)
            if(d.status === 200){
                swal("Good job!", "Add friend Successfully", "success");

            }
        }).catch((e)=>{
            console.log(e)
        }).finally();

    }
   


    // return statement
    return (
        <div>
            <h1 className="text-center">Add new Friend</h1>
            

            <form action="" className="text-center" onClick={mysubmit}>
                
                <input type="text" placeholder="add friend name"  onChange={(e)=>setName(e.target.value)} />
                <br />
                <br />
                <button  type="submit" >Submit</button>
            </form>
            
        </div>
    )
}
