import { useEffect, useState } from "react"
import { Banner, SignButton, SignInput } from "../../components"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import { motion } from "framer-motion"
import axios from 'axios'
import './index.scss'

interface dataProps {
  email: string,
  senha: string,
}

const SignIn = () => {
  
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    senha: "",
  })
  const [disable, setDisable] = useState(true)
  
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]*)$/i

  const ToFeed = () => {
    if(!toast.isActive(0))
      navigate('/feed')
  }

  const UserSignIn = () => {
    if(!toast.isActive(1))
    axios.post(`${process.env.REACT_APP_BASE_URL}/UserSignIn`, {
      email: data.email,
      password: data.senha
    })
    .then((res) => {
      console.log({response: res})
      toast.success('Usuário Cadastrado!', {
        toastId: 1,
        progress: undefined,
        onClose: ToFeed
      });
    })
    .catch((err) => {
      console.error(err)
    })
  }

  const checkDisable = (data:dataProps) => {
    if(
      emailRegex.test(data.email) &&
      data.senha !== ""
    ) return false
    else return true
  }

  useEffect(()=>{
    setDisable(checkDisable(data))
  }, [data])

  return (
    <motion.section 
    className="SignIn"
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

        <h1>loGin</h1>

        {/* Input Container */}
        <div className="Input-Container">
          <div className="Input">
            <SignInput
            placeholder="Email"
            action={(v:string)=>{setData({...data, email:v})}}
            type="email"
            autofocus="autofocus"
            />
          </div>
          <div className="Input">
            <SignInput
            placeholder="Senha"
            action={(v:string)=>{setData({...data, senha:v})}}
            type="password"
            icon
            />
          </div>
          {}
        </div>
        {/* ================ */}
        {/* Button Container */}
        <div className="Button-Container">
          <SignButton
          value="Entrar"
          disabled={disable}
          action={UserSignIn}
          />
          <p>
            Primeira vez aqui?{" "}
            <Link to="/signup" className="Link-Span">Faça seu cadastro.</Link>
          </p>
        </div>
        {/* ================ */}
      </section>

    </motion.section>
  )
}

export default SignIn