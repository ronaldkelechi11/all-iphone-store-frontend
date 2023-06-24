import '../styles/Admin.scss'
import { useState } from 'react'
import Navbar from "../components/Navbar"

const Admin = () => {
  const LOCAL_STORAGE_ADMIN = 'alliphonestore.isAdmin'
  const url = import.meta.env.VITE_APIURL + "/admin/addItem"

  if (!localStorage.getItem(LOCAL_STORAGE_ADMIN)) {
    alert("You do not have authorized acces to the admin panel")
    window.location = "/"
  }

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [condition, setCondition] = useState('')
  const [RAM, setRAM] = useState('')
  const [storageSize, setStorageSize] = useState('')
  const [color, setColor] = useState('')
  const [issues, setIssues] = useState('')
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')




  function formSubmit(e) {
    e.preventDefault()

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("condition", condition);
    formdata.append("RAM", RAM);
    formdata.append("storageSize", storageSize);
    formdata.append("color", color);
    formdata.append("issues", issues);
    formdata.append("image1", image1);
    formdata.append("image2", image2);
    formdata.append("image3", image3);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };


    fetch(url, requestOptions)
      .then(response => {
        if (response.status == 200) {
          alert('Succesfully Added new Phone')
          // setName('')
          // setPrice('')
          // setCondition('')
          // setRAM('')
          // setStorageSize('')
          // setColor('')
          // setIssues('')
          // setImage1('')
          // setImage2('')
          // setImage3('')
        }
        if (response.status == 501) {
          alert("Error adding Iphone")
        }
      })
      .catch(error => console.log('error', error));

  }


  return (
    <div className="admin">
      <Navbar />
      <div className="additem">
        <form onSubmit={formSubmit} >
          <input type="text" placeholder='Phone Name' maxLength={25} minLength={1} value={name} onChange={e => { setName(e.target.value) }} />
          <input type="text" placeholder='Price(N)' value={price} maxLength={25} minLength={2} onChange={e => { setPrice(e.target.value) }} />
          <input type="text" placeholder='Condition(New or Used)' maxLength={4} minLength={3} value={condition} onChange={e => { setCondition(e.target.value) }} />
          <input type="text" placeholder="RAM (GB)" maxLength={1} value={RAM} onChange={e => { setRAM(e.target.value) }} />
          <input type="text" placeholder="Storage Size (GB)" maxLength={4} value={storageSize} onChange={e => { setStorageSize(e.target.value) }} />
          <input type="text" placeholder="Colour" value={color} maxLength={15} onChange={e => { setColor(e.target.value) }} />
          <textarea type="text" className='issues' placeholder="Issues" value={issues} maxLength={255} onChange={e => (setIssues(e.target.value))} />
          <div className="row">
            <input type="file" accept="image/*" onChange={e => { setImage1(e.target.files[0]) }} />
            <input type="file" accept="image/*" onChange={e => { setImage2(e.target.files[0]) }} />
            <input type="file" accept="image/*" onChange={e => { setImage3(e.target.files[0]) }} />
          </div>
          <button className='button'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Admin
