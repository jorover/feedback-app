import React from 'react'
import { Link } from 'react-router-dom'

interface btn{
  mainBtn:string,
  btnPrimary:string,
  content:string,
  link:string,
  click:any,
  type: HTMLButtonElement | any,
  inputVal:Object
}

const Button:React.FC<btn> = ( { link, mainBtn, inputVal, btnPrimary, content, click, type }:btn ) => {

    const global = mainBtn ? mainBtn : 'btn'
    const primary = btnPrimary ? btnPrimary : 'btn-secondary'
    const cancel = content === 'Cancel' ? "cancel-btn" : ""

  return (
    <Link to={link} className="link">
      <button type={type} className={`${global} ${primary} ${cancel}`} onClick={(e)=> click(e, inputVal)}>
          {content}
      </button>
     </Link>
  )
}

export default Button