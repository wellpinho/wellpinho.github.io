function PortfolioForm() {
  return (
    <form className="row g-3">
      <div className="col-md-12">
        <label htmlFor="inputEmail4" className="form-label">Title</label>
        <input type="text" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-md-12">
        <label htmlFor="inputPassword4" className="form-label">Description</label>
        <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label htmlFor="floatingTextarea"></label>
        </div>
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Image</label>
        <input type="text" className="form-control" id="inputAddress" />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Link</label>
        <input type="text" className="form-control" id="inputAddress" />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Technologies</label>
        <input type="text" className="form-control" id="inputAddress" />
      </div>
    </form>
  );
}

export default PortfolioForm;