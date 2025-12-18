import useAuth from '../../../hooks/useAuth'
import coverImg from '../../../assets/images/field_image.jpg'
import { GoMail } from "react-icons/go";
import useRole from '../../../hooks/useRole';

const Profile = () => {
  const { user } = useAuth();
  const { role } = useRole();

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5'>
        <img
          alt='cover photo'
          src={coverImg}
          className='w-full mb-4 rounded-t-lg h-56'
        />
        <div className='p-4 flex flex-col sm:flex-row items-center gap-4 -mt-6'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <div>
            <p className='mt-2 text-sm font-medium text-gray-500 '>
            User Id: {user?.uid}
          </p>
          <p className='text-xl md:text-3xl font-bold'>Name: {user?.displayName}</p>
          <p className='flex gap-3 items-center font-semibold'><GoMail /> {user?.email}</p>
          </div>
           <p className='p-2 px-4 w-fit self-start mt-4 text-xs text-white bg-primary rounded-full'>
            {role}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
