import { Newspaper } from 'lucide-react'
import { MdOutlineReviews } from "react-icons/md";
import MenuItem from './MenuItem'

const StudentMenu = () => {
  return (
    <>
      <MenuItem icon={Newspaper} label='My Applications' address='my-applications' />
      <MenuItem icon={MdOutlineReviews} label='My Reviews' address='my-reviews' />
    </>
  )
}

export default StudentMenu
