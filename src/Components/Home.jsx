import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_USER_PENDING, POST_USER_PENDING, UPDATE_USER_PENDING, VIEW_USER_PENDING } from '../Redux-saga/User/action/action';


const Home = () => {
  let dispatch = useDispatch();
  const [View, setView] = useState()

  let user = useSelector((state) => state.userReducer)

  let name = useRef();
  let email = useRef();

  //add-data
  const addUser = () => {
    let data = {
      name: name.current.value,
      email: email.current.value
    }
    dispatch({ type: POST_USER_PENDING, payload: data })
    
  }

  //delete-data
  const deleteData = (id) => {
    dispatch({ type: DELETE_USER_PENDING, payload: id })
  }

  //update-data
  const viewData = (id, index) => {
    let viewData = user.user[index]
    console.log(viewData, "viewDattaaa");
    setView(viewData)
    console.log(View, "from Viewww");
  }

  const handleInput = (e) => {
    setView({ ...View, [e.target.name]: e.target.value })

  }

  const handleUpdate = () => {
    dispatch({ type: UPDATE_USER_PENDING, payload: View })
    
  }

  return (
    <>
      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label>Name:</label><input type="text" name='name' value={View?.name} onChange={handleInput} />
              <label>Email:</label><input type="text" name='email' value={View?.email} onChange={handleInput} />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleUpdate}>Update</button>
            </div>
          </div>
        </div>
      </div>
      <div>

        <label>Name:</label><input type="text" ref={name} className='m-2'/>
        <label>Email:</label><input type="text" ref={email} className='m-2' />
        <button onClick={addUser}>Submit</button>

        <div className="row m-3">
        {
          user?.user?.map((val, index) => {
            return (
              <>
                <div className="col-md-3">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">{val.name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{val.email}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button class="btn btn-secondary m-3" onClick={() => { deleteData(val.id) }}>delete</button>
                    <button type="button" onClick={(e) => { viewData(val.id, index) }} class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      View</button>
                  </div>
                </div>
                </div>
                
              </>
            )
          })
        }
        </div>
      </div>
    </>

  )
}

export default Home
