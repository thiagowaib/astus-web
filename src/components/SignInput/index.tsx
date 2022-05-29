import { useState, useRef } from 'react'

import './index.scss'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const SignInput = (props:any) => {
  const [value, setValue] = useState("")
  // Icon: -1 (null), Icon: 0 (VisOff), Icon: 1 (VisOn)
  const [icon, setIcon] = useState(props.icon ? 0 : -1)
  const inputRef = useRef<HTMLInputElement>(null)

  console.log(`Icon: ${icon}`)
  const handleChange = (e:any) => {
    const v = e.target.value
    setValue(v)
    props.action(v)
  }

  const handleShow = () => {
    const inp = inputRef.current
    if(inp!==null && inp.type === "password") {
      inp.type = "text"
      setIcon(1)
    } else if (inp!==null) {
      inp.type = "password"
      setIcon(0)
    }
  }

  const getIcon = () => {
    if(icon === 0)
      return (<VisibilityOff className="Icon-Show" onClick={handleShow}/>)
    else 
      return (<Visibility className="Icon-Show" onClick={handleShow}/>)
  }

  return (<>
      <input
        ref={inputRef}
        className={icon>=0 ? "With-Icon" : ""}
        value={value}
        onInput={handleChange}
        {...props}
      />
      {icon >= 0 ? getIcon() : null}
  </>)
}

export default SignInput