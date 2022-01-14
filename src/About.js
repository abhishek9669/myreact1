import React,{useState,useEffect} from 'react'

export default function About() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://afternoon-eyrie-84059.herokuapp.com/api/friends")
        .then((result)=>{
            result.json()
            .then((res)=>{
                //console.log("result",res)
                setData(res.data)
            })

        })
    }, [])
    //  data.forEach(e => {
         
         
    //  });
   //console.log(data)
  
    return (
        
        <div className="container">
        <div className="py-4">
            <h1>FRIEND </h1>
            <table className="table">
                <thead>
  
                <tr>
                   <td scope="col">ID</td>
                   <td scope="col">Name</td>
                  
                </tr>
                </thead>
                <tbody>
                {data.map((d)=> 
                   {
                       console.log(d)
                       return(
                        <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.attributes.name}</td>
                      
                       
                    </tr>
                       )
                   }
                )}
                </tbody>
            </table>
        </div>   
    </div>
)
}
