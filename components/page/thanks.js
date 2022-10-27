

const Thanks = ({product}) => {
  const random = Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000 ;
  return (
    <>
    <div>Thanks for apply {product}</div>
    <div className="fw-bold">Reference Number: {random} </div>
    </>
    
  )
}

export default Thanks