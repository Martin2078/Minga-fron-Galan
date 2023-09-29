import React, { useDebugValue, useState }  from "react";
import axios from "axios";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

const SignUp =()=>{
const [dataForAlert, setDataForAlert] = useState([])
const [show, setShow] = useState(false)


const [response, setResponse ] = useState(false)
let dataMessage =[]
let navigate = useNavigate()
    const handleCreate = (e,data)=>{
        
        e.preventDefault(); 
        create(data);
          }
     
          const setShowAlert = ()=>{
            if(show){
                if(response){
                    setShow(false)
                    navigate("/");
                }else{
                    setShow(false)
                }
            } else{
                setShow(true)
            }
            
          }


          const handleSignUpClick =  async(e,data) => {
            e.preventDefault()
            
            console.log(data)
            try {
              setShow(!show)
               await axios.post('http://localhost:4000/auth/google-signin', data)
             .then(res =>{ 
                console.log(res.data.message)
                if(res.data.success){
                    setResponse(true)
                    dataMessage.push(res.data.message)
                    setDataForAlert(dataMessage)
                }else{
                    dataMessage.push(res.data.message)
                    setDataForAlert(dataMessage)
                }
                
                setShow(true)
                }
                )
              
        
            } catch (error) {
                error =>{
                    console.log(error)
                    if(error.response){
                      setDataForAlert(error.response.data.message)
                      setShow(true)
                    } else{
                        dataMessage.push("Error del servidor")
                        setDataForAlert(dataMessage)
                        setShow(true)
                    }
                    
                    
                    }
             
            }
        
          };
        

        const create = async (data) =>{
           await axios.post("http://localhost:4000/auth/signup",data)
            .then(res =>{ 
                console.log(res.data.message)
                if(res.data.success){
                    setResponse(true)
                    dataMessage.push(res.data.message)
                    setDataForAlert(dataMessage)
                }else{
                    dataMessage.push(res.data.message)
                    setDataForAlert(errorData)
                }
                
                setShow(true)
                }
                )
            .catch(error =>{
                console.log(error)
                if(error.response){
                  setDataForAlert(error.response.data.message)
                  setShow(true)
                } else{
                    dataMessage.push("Error del servidor")
                    setDataForAlert(dataMessage)
                    setShow(true)
                }
                
                
                })
        }
        
        
        
        
        
    


    return(

        <div className="h-screen w-full flex flex-row-reverse  ">
            <div className="hidden sm:flex sm:w-1/2 sm:h-full "><img className="w-full h-full object-cover" src="../images/Rectangle 80.png" alt="" /></div>
            <div className="w-full h-1/2 flex flex-col items-center  gap-1 sm:w-1/2 pt-10">
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
          handleSignUpClick = {handleSignUpClick}
          />
           </div>
           {show ? <Alert
           show ={show}
           setShow = {setShowAlert}
           message={dataForAlert}

           /> :
           null }
           
            
        </div>
    )

        
    
}

export default SignUp;