

export const OutputContainer = ({bmi, status}) => {
  return (
    <div className='mt-8 w-full'>
                   {bmi && <p className='mb-2'>BMI : {bmi}</p>}
                   {status && <p>Status : {status}</p> }
                </div>
  )
}
