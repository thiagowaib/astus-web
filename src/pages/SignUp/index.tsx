import { useEffect, useState } from "react"
import { Banner, SignButton, SignInput } from "../../components"
import { Link, useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer, toast } from "react-toastify"
import { motion } from 'framer-motion'
import axios from 'axios'
import './index.scss'

interface dataProps {
  email: string,
  nome: string,
  senha: string,
  confSenha: string
}

const SignUp = () => {
  
  const navigate = useNavigate()

  const [data, setData] = useState({
    email: "",
    nome: "",
    senha: "",
    confSenha: ""
  })
  const [disable, setDisable] = useState(true)
  
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]*)$/i

  const ToSignIn = () => {
    if(!toast.isActive(0))
      navigate('/signin')
  }

  const UserSignUp = () => {
    if(!toast.isActive(0)) {
      axios.post(`${process.env.REACT_APP_BASE_URL}/UserSignUp`, {
        email: data.email,
        name: data.nome,
        password: data.senha
      })
      .then(() => {
          toast.success('Usuário Cadastrado!', {
            toastId: 0,
            progress: undefined,
            onClose: ToSignIn
          });
      })
      .catch((err) => {
        console.error(err)
      })
    }
  }

  
  

  const checkDisable = (data:dataProps) => {
    if(
      emailRegex.test(data.email) &&
      data.nome !== "" &&
      data.senha !== "" &&
      data.senha === data.confSenha
    ) return false
    else return true
  }

  useEffect(()=>{
    setDisable(checkDisable(data))
  }, [data])

  return (
    <motion.section 
    className="SignUp"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration:0.2} }}
    >
      {/* React-Toastify Toast Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      {/* ============================== */}
      <section className="Left-Container">
      <Banner/>
      </section>
      <section className="Right-Container">

        <h1>cadastro</h1>

        {/* Input Container */}
        <div className="Input-Container">
          <div className="Input">
            <SignInput
            placeholder="Email"
            action={(v:string)=>{setData({...data, email:v})}}
            type="email"
            autoFocus
            success={emailRegex.test(data.email) ? "true" : "false"}
            />
          </div>
          <div className="Input">
            <SignInput
            placeholder="Nome"
            action={(v:string)=>{setData({...data, nome:v})}}
            type="text"
            success={data.nome !== "" ? "true" : "false"}
            />
          </div>
          <div className="Input">
            <SignInput
            placeholder="Senha"
            action={(v:string)=>{setData({...data, senha:v})}}
            type="password"
            icon
            success={(data.senha !== "" && data.senha === data.confSenha) ? "true" : "false"}
            />
          </div>
          <div className="Input">
            <SignInput
            placeholder="Confirmar Senha"
            action={(v:string)=>{setData({...data, confSenha:v})}}
            type="password"
            icon
            success={(data.senha !== "" && data.senha === data.confSenha) ? "true" : "false"}
            />
          </div>
          <span 
          className={(data.senha !== "" && data.senha !== data.confSenha) ? 
          "Err-Senhas Show": "Err-Senhas"}>
          As senhas não estão iguais!
          </span>
          {}
        </div>
        {/* ================ */}
        {/* Button Container */}
        <div className="Button-Container">
          <SignButton
          value="Cadastrar"
          disabled={disable}
          action={UserSignUp}
          />
          <p>
            Já possui uma conta?{" "}
            <Link to="/signin" className="Link-Span">Faça seu Login.</Link>
          </p>
        </div>
        {/* ================ */}
      </section>

    </motion.section>
  )
}

export default SignUp