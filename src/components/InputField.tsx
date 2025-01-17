import { useState } from "react";

const InputField = ({ type, placeholder, icon, onChange} : {type:any, placeholder:any, icon:any, onChange:any}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);



  return (
    <div className="input-wrapper">
      <input
        type={isPasswordShown ? 'text' : type}
        placeholder={placeholder}
        className="input-field"
        onChange={onChange}
        required
      />
      <i className="material-symbols-rounded">{icon}</i>
      {type === 'password' && (
        <i onClick={() => setIsPasswordShown(prevState => !prevState)} className="material-symbols-rounded eye-icon">
          {isPasswordShown ? 'On' : 'off'}
        </i>
      )}
    </div>
  )
}

export default InputField;