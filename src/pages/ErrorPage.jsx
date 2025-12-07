import { useNavigate } from 'react-router'
import { IoHome } from "react-icons/io5";
import errorImg from '../assets/images/404 image.jpg'

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <section className='bg-white '>
      <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
        <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
          <img src={errorImg} alt="" className=''/>
          <h1 className='mt-3 text-2xl font-semibold text-gray-800  md:text-3xl'>
            Something Went Wrong!
          </h1>
          <div className='flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
            <button
              onClick={() => navigate(-1)}
              className='flex items-center justify-center w-1/2 px-5 py-1.5 cursor-pointer text-sm transition-colors duration-200 bg-primary text-white rounded-lg gap-x-2 sm:w-auto'
            >
             <IoHome />
              <span>Go back</span>
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
