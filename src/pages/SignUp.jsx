import React, { useDebugValue, useState }  from "react";
import axios from "axios";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";

const SignUp =()=>{
const [showAlert, setShowAlert] = useState(false);
const [error,setError] = useState([]);
let errorData =[]
let navigate = useNavigate()
    const handleCreate = (e,data)=>{
        
        e.preventDefault(); 
        create(data);
          }
     
          
          

        const create = async (data) =>{
           await axios.post("http://localhost:4000/users/signup",data)
            .then(res =>{ 
                console.log(res.data.message)
                if(res.data.success){
                    logIn(data)
                }else{
                    errorData.push(res.data.message)
                    setError(errorData)
                }
                
                }
                )
            .catch(error =>{
                 setError(error.response.data.message)
                })
        }
        console.log(error)
        
        const logIn = async (data) =>{
            await axios.post("http://localhost:4000/users/signin",{"email": data.email,"password":data.password})
            .then(res=>{
                console.log(res)
                redirect()
            })
            .catch(error=>{

                console.log(error)
            })
        }

        const redirect = () =>{
            navigate("/")
        }
    


    return(

        <div className="h-screen w-full flex flex-row-reverse  ">
            <div className="hidden sm:flex sm:w-1/2 sm:h-full "><img className="w-full h-full object-cover" src="../images/Rectangle 80.png" alt="" /></div>
            <div className="w-full h-1/2 flex flex-col items-center  gap-1 sm:w-1/2">
            <div className='flex h-10'>
              <img className='w-20' src="../images/logo-footer.png" alt="" />
              <img className='w-20' src="../images/logo-footer2.png" alt="" />
            </div>
            <section className=" flex flex-col items-center gap-3">
            <h1 className="text-xl">welcome</h1>
            <p className="w-2/3 text-xs">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
           </section> 
          <RegisterForm
          handleCreate = {handleCreate}
          
          />
           </div>
            
        </div>
    )

        
    
}

export default SignUp;