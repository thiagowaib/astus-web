import { useEffect } from "react"
import { useState } from "react"
import { Banner, SignButton, SignInput } from "../../components"
import { Link } from "react-router-dom"
import './index.scss'

interface dataProps {
  email: string,
  nome: string,
  senha: string,
  confSenha: string
}

const SignUp = () => {
  
  const [data, setData] = useState({
    email: "",
    nome: "",
    senha: "",
    confSenha: ""
  })
  const [disable, setDisable] = useState(true)
  
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]*)$/i

  const PostData = () => {
    console.log(data)
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
    <section className="SignUp">
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
            action={(v:string)=>{setData({...data, email:v});console.log(v)}}
            type="email"
            autofocus="autofocus"
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
          action={PostData}
          />
          <p>
            Já possui uma conta?{" "}
            <Link to="/signin" className="Link-Span">Faça seu Login.</Link>
          </p>
        </div>
        {/* ================ */}
      </section>

    </section>
  )
}

export default SignUp