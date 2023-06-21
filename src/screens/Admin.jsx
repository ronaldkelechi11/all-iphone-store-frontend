import '../styles/Admin.scss'
import Navbar from "../components/Navbar"



const Admin = () => {
  const LOCAL_STORAGE_ADMIN = 'alliphonestore.isAdmin'
  if (localStorage.getItem(LOCAL_STORAGE_ADMIN)) {
    return;
  }
  else {
    alert("You do not have authorized acces to the admin panel")
    window.location = "/"
  }
  return (
    <div className="admin">
      <Navbar />

    </div>
  )
}

export default Admin
