import { useState } from 'react'
import UpdateUserRoleModal from '../../Modal/UpdateUserRoleModal'
import DeleteUserModal from '../../Modal/DeleteUserModal'

const UserDataRow = ({ user, index, refetch }) => {
  let [isOpen, setIsOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false);
  const closeModal = () => setIsOpen(false); 
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>{index + 1}.</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <img src={user.imageURL} alt="" className='w-12 h-12 rounded-full object-cover'/>
      </td>
      <td className='py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>{user.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 '>{user.role}</p>
      </td>

      <td className=' py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='space-x-3'>
          <span
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Change role</span>
        </span>
        <button onClick={() => setDeleteOpen(true)} className='bg-red-200 text-red-700 px-3 py-1 rounded-full cursor-pointer'>Delete</button>
        </div>
        {/* Modal */}
        <UpdateUserRoleModal
          isOpen={isOpen}
          closeModal={closeModal}
          user={user}
          refetch={refetch}
        />
        <DeleteUserModal user={user} deleteOpen={deleteOpen} setDeleteOpen={setDeleteOpen}/>
      </td>
    </tr>
  )
}

export default UserDataRow
