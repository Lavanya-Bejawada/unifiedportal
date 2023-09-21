const Modals = () => {
    return (
      <>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          modal
        </button>
  
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header" style={{ backgroundColor: "#002266" }}>
                <h5
                  class="modal-title"
                  style={{ color: "white" }}
                  id="exampleModalLabel"
                >
                  Past Due payments
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  style={{ color: "white" }}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-start">
                <h5 style={{ color: "#f58d42" }}>Please complete the payment</h5>
                <table className="table " style={{ borderColor: "white", color:"#002266" }}>
                  <thead >
                    <tr style={{color:"#002266"}}>
                      <th scope="col">#</th>
                      <th scope="col">Description</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
  
                      <td>Past due payment-2C2P</td>
                      <td>$ 419.20</td>
                      <td>25-sep-22</td>
                      <td>2 days</td>
                    </tr>
                  </tbody>
                </table>
                <h5 style={{ color: "#002266" }}>Comments</h5>
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                  placeholder="We have paid the due"
                ></textarea>
                <div style={{display: "inline-flex", alignItems: "center"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#f58d42" class="bi bi-paperclip" viewBox="0 0 16 16">
      <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
    </svg>
    <h5 style={{color: "#f58d42", marginLeft:" 5px"}}>Attach Swift copy</h5>
  </div>
  
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn modalcolor"
                  style={{ backgroundColor: "#f58d42" }}
                  data-bs-dismiss="modal"
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Modals;
  