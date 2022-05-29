import './index.scss'

interface Props {
  value: string,
  disabled?: boolean,
  action: ()=>void
}

const SignButton = ({value="", disabled=false, action}:Props) => {
  return (<>
      <button
      onClick={action}
      disabled={disabled}
      >{value}</button>
  </>)
}

export default SignButton