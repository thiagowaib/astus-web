import { useEffect } from "react"
import { useState } from "react"
import { Banner, SignButton, SignInput } from "../../components"
import { Link } from "react-router-dom"
import './index.scss'

interface dataProps {
  email: string,
  senha: string,
}

const SignIn = () => {
  
  const [data, setData] = useState({
    email: "",
    senha: "",
  })
  const [disable, setDisable] = useState(true)
  
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]*)$/i

  const PostData = () => {
    console.log(data)
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
    <section className="SignIn">
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
            action={(v:string)=>{setData({...data, email:v});console.log(v)}}
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
          action={PostData}
          />
          <p>
            Primeira vez aqui?{" "}
            <Link to="/signup" className="Link-Span">Faça seu cadastro.</Link>
          </p>
        </div>
        {/* ================ */}
      </section>

    </section>
  )
}

export default SignIn