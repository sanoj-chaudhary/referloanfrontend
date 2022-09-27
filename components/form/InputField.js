
const inputField = ({errors,classes, label, ...props}) => {
console.log(props)
  return (
    <div>
      <div className={`form-group group ${ errors ? "has-error" : 'has-success'} `}>
        <input className={`form-control shadow-none bg-white ${classes}`} required {...props} />
        <span className="bar"></span>
        <label htmlFor={label}>{label}</label>
        {errors  ? (
            <p className="form-error">{errors}</p>
          ) : null}
      </div>
    </div>
  )
}

export default inputField