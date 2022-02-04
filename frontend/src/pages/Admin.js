import Portfolio from '../components/admin/Portfolio'
import PortfolioForm from '../components/admin/PortfolioForm';

function Admin() {
  return (
    <div className="container-fluid">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Admin Panel</h1>
          <p className="col-md-8 fs-4">This is the Admin Panel for the Portfolio</p>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <div className="list-group" id="list-tab" role="tablist">
            <a 
              className="list-group-item list-group-item-action active" 
              id="list-home-list" 
              data-bs-toggle="list" 
              href="#list-home" 
              role="tab" 
              aria-controls="list-home"
            >Welcome</a>
            <a 
              className="list-group-item list-group-item-action" 
              id="list-profile-list" 
              data-bs-toggle="list" 
              href="#list-profile" 
              role="tab" 
              aria-controls="list-profile"
            >Portfolio</a>
            <a 
              className="list-group-item list-group-item-action" 
              id="list-messages-list" 
              data-bs-toggle="list" 
              href="#list-messages" 
              role="tab" 
              aria-controls="list-messages"
            >Technologies</a>
            {/* <a 
              className="list-group-item list-group-item-action" 
              id="list-form-list" 
              data-bs-toggle="list" 
              href="#list-form" 
              role="tab" 
              aria-controls="list-form"
            >Add new portfolio</a> */}
          </div>
        </div>
        <div className="col-8">
          <div className="tab-content" id="nav-tabContent">
            <div 
              className="tab-pane fade show active" 
              id="list-home" 
              role="tabpanel" 
              aria-labelledby="list-home-list"
            >...</div>
            <div 
              className="tab-pane fade" 
              id="list-profile" 
              role="tabpanel" 
              aria-labelledby="list-profile-list"
            ><Portfolio /></div>
            <div 
              className="tab-pane fade" 
              id="list-messages"
              role="tabpanel" 
              aria-labelledby="list-messages-list"
            >...</div>
            {/* <div 
              className="tab-pane fade" 
              id="list-form"
              role="tabpanel" 
              aria-labelledby="list-form-list"
            ><PortfolioForm /></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;