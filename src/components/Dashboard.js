import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="container-fluid dbbg">
      <div className="row">
        <div className="col-8">
          <div class="row">
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title dbcards1">
                    <b>$ 7.3M </b>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="20"
                      viewBox="0 0 48 48"
                    >
                      <mask id="ipTFileDate0">
                        <g fill="none" stroke="#0fdd8e" strokeWidth="3">
                          <path
                            fill=""
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m30 4l10 10"
                          />{" "}
                          <circle cx="24" cy="28" r="8" fill="#555" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M23 25v4h4"
                          />{" "}
                        </g>{" "}
                      </mask>

                      <path
                        fill="#0fdd8e"
                        d="M0 0h48v48H0z"
                        mask="url(#ipTFileDate0)"
                      />
                    </svg>
                  </h5>

                  <p class="card-text ">
                    <b>Authorizations</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title dbcards1">
                    <b>$ 6.2M </b>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="20"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#0fdd8e"
                        d="M256 96c38.4 0 73.7 13.5 101.3 36.1l-32.6 32.6c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9H448c8.8 0 16-7.2 16-16V64c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-34 34C363.4 52.6 312.1 32 256 32c-10.9 0-21.5 .8-32 2.3V99.2c10.3-2.1 21-3.2 32-3.2zM132.1 154.7l32.6 32.6c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8V64c0-8.8-7.2-16-16-16H64c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l34 34C52.6 148.6 32 199.9 32 256c0 10.9 .8 21.5 2.3 32H99.2c-2.1-10.3-3.2-21-3.2-32c0-38.4 13.5-73.7 36.1-101.3zM477.7 224H412.8c2.1 10.3 3.2 21 3.2 32c0 38.4-13.5 73.7-36.1 101.3l-32.6-32.6c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8V448c0 8.8 7.2 16 16 16H448c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-34-34C459.4 363.4 480 312.1 480 256c0-10.9-.8-21.5-2.3-32zM256 416c-38.4 0-73.7-13.5-101.3-36.1l32.6-32.6c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9H64c-8.8 0-16 7.2-16 16l0 112c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l34-34C148.6 459.4 199.9 480 256 480c10.9 0 21.5-.8 32-2.3V412.8c-10.3 2.1-21 3.2-32 3.2z"
                      />
                    </svg>
                  </h5>
                  <p class="card-text">
                    <b>Settlements</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title dbcards1">
                    <b>$ 294 </b>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="20"
                      viewBox="0 0 48 48"
                    >
                      <mask id="ipSFileDateOne0">
                        <g fill="none" strokeWidth="3">
                          <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12"
                          />

                          <circle
                            cx="34"
                            cy="36"
                            r="8"
                            fill="#fff"
                            stroke="#fff"
                          />

                          <path
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M33 33v4h4"
                          />

                          <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M30 4v10h10"
                          />
                        </g>
                      </mask>

                      <path
                        fill="orange"
                        d="M0 0h48v48H0z"
                        mask="url(#ipSFileDateOne0)"
                      />
                    </svg>
                  </h5>
                  <p class="card-text">
                    <b>Average Ticket</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "orange" }}>
                    <b>4,205 </b> &nbsp;&nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="20"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="rgb(38, 130, 196)"
                        d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
                      />
                    </svg>
                  </h5>
                  <p class="card-text">
                    <b>Unique </b>
                  </p>
                  <p class="card-text">
                    <b> Merchants</b>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-2 " style={{ paddingTop: "20px" }}>
              <div className="card dbc2" style={{ borderRadius: "10px" }}>
                <div class="card-body ">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 1024 1024"><path fill="rgb(38, 130, 196)"  d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097c-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163L254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475c13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"/></svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      id="feArrowRight0"
                      fill="none"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g id="feArrowRight1" fill="rgb(38, 130, 196)">
                        <path
                          id="feArrowRight2"
                          d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="card dbc3">
            <div class="d-flex justify-content-between align-items-center">
              <span>
                <b>Chargeback</b>
              </span>
              <span>
                <b style={{ color: "orange" }}>View all</b>
              </span>

              <div className="col-3">
                <div className="dropdown">
                  <select
                    className="noBorder no-outline dbc4"
                    style={{ borderRadius: "10px" }}
                  >
                    <option defaultValue="-1">Pending action</option>
                    <option value="1">Open</option>
                    <option value="1">Closed</option>
                    <option value="1">With Network</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="card-body ">
              <table className="table " style={{ borderColor: "white" }}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>

                    <td>Past due payment-2C2P</td>
                    <td>$ 419.20</td>
                    <td>25-sep-22</td>
                    <td style={{ color: "orange" }}>Click here</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>

                    <td>Past due payment-ACI</td>
                    <td>$ 512.90</td>
                    <td>29-sep-22</td>
                    <td style={{ color: "orange" }}>Click here</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br></br>
          {/* card two production incidents */}

          <div class="card dbc3">
            <div class="d-flex justify-content-between align-items-center">
              <span>
                <b>production incidents</b>
              </span>
              <span>
                <b style={{ color: "orange" }}>View all</b>
              </span>

              <div className="col-3">
                <div className="dropdown">
                  <select
                    className="noBorder no-outline dbc4"
                    style={{ borderRadius: "10px" }}
                  >
                    <option defaultValue="-1">Open</option>
                    <option value="1">In-progress</option>
                    <option value="1">Pending Details</option>
                    <option value="1">Review</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="card-body ">
              <table className="table " style={{ borderColor: "white" }}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>

                    <td>Past due payment-2C2P</td>
                    <td>$ 419.20</td>
                    <td>25-sep-22</td>
                    <td style={{ color: "orange" }}>Click here</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>

                    <td>Past due payment-ACI</td>
                    <td>$ 512.90</td>
                    <td>29-sep-22</td>
                    <td style={{ color: "orange" }}>Click here</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br></br>
          {/* card  3 past due payments */}

          <div class="card dbc3">
            {/* <div class="card"> */}
            <div class="d-flex justify-content-between align-items-center">
              <span>
                <b>Past Due Payments</b>
              </span>
              <span>
                <b style={{ color: "orange" }}>View all</b>
              </span>

              <div className="col-3">
                <div className="dropdown">
                  <select
                    className="noBorder no-outline dbc4"
                    style={{ borderRadius: "10px" }}
                  >
                    <option defaultValue="-1"> Open </option>
                    <option value="1">Closed </option>
                    <option value="1">Lorem</option>
                    <option value="1">Lorem </option>
                  </select>
                </div>
              </div>
            </div>
            {/* </div> */}
            <div class="card-body ">
              <table className="table " style={{ borderColor: "white" }}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>

                    <td>Past due payment-2C2P</td>
                    <td>$ 419.20</td>
                    <td>25-sep-22</td>
                    <td style={{ color: "orange" }}>Click here</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>

                    <td>Past due payment-ACI</td>
                    <td>$ 512.90</td>
                    <td>29-sep-22</td>
                    <td style={{ color: "orange" }}>Click here</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* right side layout */}
        <div className="col">
          {/* progree bar */}

          {/* <div> */}
          <div className="card ">
            <div class="card-body">
              <h6 className="dbc5 text-start">
                <span>Today's Authorizations</span>
                <span style={{ float: "right" }}>View Declined</span>
              </h6>
              <h6>
                <span style={{ marginLeft: "50px" }}>85% / $ 10,120</span>
                <span style={{ float: "right" }}>124</span>
              </h6>

              <div
                class="progress pgcolor"
                style={{ backgroundColor: "rgb(16, 16, 134)" }}
              >
                <div
                  class="progress-bar bg-warning w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br></br>

              {/* nnm? */}

              {/* 2 */}
              <h6 className="dbc5 text-start">
                <span>Today's Settlements</span>
                <span style={{ float: "right" }}>View Declined</span>
              </h6>
              <h6>
                <span style={{ marginRight: "82px" }}>85% / $ 10,120</span>
                <span style={{ float: "right" }}>124</span>
              </h6>

              <div
                class="progress "
                style={{ backgroundColor: "rgb(16, 16, 134)" }}
              >
                <div
                  class="progress-bar w-50"
                  style={{ backgroundColor: "orange" }}
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          {/* </div> */}
          <div>
            <div class="card">
              <div class="card-body">
                <h6 className="text-start">Upcoming actions</h6>
                <table className="table " style={{ borderColor: "white" }}>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Description</th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>

                      <td>Monthly IMR File</td>

                      <td>10-Oct-22</td>
                      <td style={{ color: "orange" }}>Click here</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>

                      <td>
                        <p>
                          Half-yearly cycle <br />
                          reange compliance <br></br>form
                        </p>
                      </td>

                      <td>10-oct-22</td>
                      <td style={{ color: "orange" }}>Click here</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div class="card">
              <div class="card-body">
                <h6 className="text-start">Open waivers</h6>
                <table className="table " style={{ borderColor: "white" }}>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Description</th>
                      <th scope="col">IOM</th>
                      <th scope="col">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>

                      <td>
                        Active/Active <p>connectivity</p>
                      </td>

                      <td>8-525</td>
                      <td style={{ color: "orange" }}>Click here</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
