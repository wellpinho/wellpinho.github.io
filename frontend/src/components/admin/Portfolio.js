import { useState } from 'react'
import './portfolio.css'
import { useApi } from '../../hooks/userApi'
import moment from 'moment'
import Modal from './modal'
import PortfolioForm from './PortfolioForm'

function PortfolioList() {
  const [action, setAction] = useState({
    del: {
      header: 'Confirme Delete',
      btnVariant: 'btn btn-danger',
      btnLabel: 'Confirm',
      body: 'Are you sure want to delete it?'
    },
    edit: {
      header: 'Edit portfolio',
      btnVariant: 'btn btn-primary',
      btnLabel: 'Save',
      body: <PortfolioForm />
    },
    add: {
      header: 'Add new portfolio',
      btnVariant: 'btn btn-primary',
      btnLabel: 'Create',
      body: <PortfolioForm />
    }
  })
  const {data} = useApi('/portfolio')
  const [currentAction, setCurrentAction] = useState({
    header: '',
    btnVariant: '',
    btnLabel: '',
    body: ''
  })
  const handle = (slug, actn) => {
    setCurrentAction(actn)
  }

  return (
    <div>
      <button 
        type="submit" 
        class="btn btn-primary btn-sm" 
        onClick={() => handle(null, action.add)}
      >Add new portfolio</button>

      <table className="table table-striped table-hover">
        <thead>
          <tr key="">
            <th>Image</th>
            <th>Title</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { data?.data?.map(item => {
            const data = moment(item.createdAt).format('MM/YYYY')
            return (
              <tr className="table-active" key={item.slug}>
                <td>
                  <img 
                    src={item.image} 
                    className="img-thumbnail" 
                    alt="..."
                  />
                </td>
                <td>{ item.title }</td>
                <td>{ data }</td>
                <td>
                  <button 
                    type="button" 
                    className="btn btn-primary me-1"
                    onClick={() => handle(item._id, action.edit)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >Edit</button>
                  <button 
                    type="button" 
                    className="btn btn-danger" 
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handle(item._id, action.del)}
                  >Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <Modal currentAction={currentAction}>
        {currentAction.body}
      </Modal>
    </div>
  );
}

export default PortfolioList;