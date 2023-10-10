import { useState } from "react";
import "./Charts.scss";
import BarChart from "./charts/BarChart.jsx";
import LineChart from "./charts/LineChart.jsx";
import DoughnutChart from "./charts/DoughnutChart.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <div class="container-fluid header_con">
          <div class="row">
            <div class="col-auto d-flex align-items-center justify-content-center logo_">
              <div>
                <span class="logo_dot"></span>
              </div>
              <span>DataBlendIQ</span>
            </div>
            <div class="col d-flex align-items-center justify-content-start serach_box">
              <i class="bx bx-search"></i>
              <input type="text" placeholder="Search here..." />
            </div>

            <div class="col d-flex align-items-center justify-content-end my_profile">
              <div>
                <div class="pro_file d-flex align-items-center justify-content-evenly gap-1">
                  <i class="bx bx-bell icon_vell"></i>
                  <div class="pro_img"></div>

                  <div class="nam_info d-flex flex-column align-items-center justify-content-center">
                    <div class="name_">
                      <span>name</span>
                    </div>
                    <div class="admin">
                      <span>Admin</span>
                    </div>
                  </div>
                  <i class="bx bx-chevron-down down_"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid side_">
        <div class="row">
          <div class="col-4 d-flex flex-column align-items-center justify-content-between  p-2 sidebar_con">
            <div class="main_data gap-2">
              <i class="bx bx-pie-chart"></i>
              <h4>
                <a href="#">Process Engine</a>
              </h4>
            </div>
            <div class="list_data">
              <div>
                <a href="#">Dashboard</a>
              </div>
              <div>
                <a href="#">Jobs</a>
              </div>
              <div>
                <a href="#">Transformation</a>
              </div>
              <div>
                <a href="#">Configuration</a>
              </div>

              <div class="line_bl"></div>
            </div>

            <div class="main_data mt-4 gap-2">
              <i class="bx bx-shower"></i>
              <h4>
                <a href="#">DQ Workflow</a>
              </h4>
            </div>

            <div class="list_data list_data2">
              <div>
                <a href="#">Favourite workflow</a>
              </div>
              <div>
                <a href="#">Standard workflow</a>
              </div>
              <div>
                <a href="#">Custom workflow</a>
              </div>

              <div class="line_bl"></div>
            </div>

            <div class="main_data mt-4 ">
              <i class="bx bx-shower"></i>
              <h4>
                <a href="#">KYC Verification</a>
              </h4>
            </div>

            <div class="main_data data_link_ mb-5">
              <i class="bx bx-log-out"></i>
              <h4>
                <a href="#">Sing Out</a>
              </h4>
            </div>
          </div>

          <div class="col dashboard_div">
            <div class="row">
              <div class="col d-flex flex-column align-items-around gap-4 dashboard_div2">
                <div class="info_dashboard">
                  <div class="dashboard_name">Dashboard</div>
                  <div class="dashboard_invite">Wellcome to DataBlendIQ</div>
                </div>

                <div class="info_mail gap-3">
                  <div class="pdi d-flex gap-4 p-2">
                    <div class="info_pdi gap-2 d-flex flex-column">
                      <div class="pdi_name">PDI JOBS</div>
                      <h4>0212</h4>
                      <p>+8% from yesterday</p>
                    </div>

                    <div class="icon_pid gap-2 d-flex flex-column">
                      <i class="bx bx-shopping-bag"></i>
                    </div>
                  </div>

                  <div class="pdi d-flex gap-4 p-2">
                    <div class="info_pdi gap-2 d-flex flex-column">
                      <div class="pdi_name">Transformation</div>
                      <h4>06135</h4>
                      <p>+8% from yesterday</p>
                    </div>

                    <div class="icon_pid">
                      <i class="bx bx-shopping-bag"></i>
                    </div>
                  </div>

                  <div class="pdi d-flex gap-4 p-2">
                    <div class="info_pdi gap-2 d-flex flex-column">
                      <div class="pdi_name">Schedule job/KTR</div>
                      <h4>12/32</h4>
                      <p>+8% from yesterday</p>
                    </div>

                    <div class="icon_pid">
                      <i class="bx bx-shopping-bag"></i>
                    </div>
                  </div>

                  <div class="pdi d-flex gap-4 p-2">
                    <div class="info_pdi gap-2 d-flex flex-column">
                      <div class="pdi_name">PDI JOBS</div>
                      <h4>0212</h4>
                      <p>+8% from yesterday</p>
                    </div>

                    <div class="icon_pid">
                      <i class="bx bx-shopping-bag"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-fluid chart_div mt-4">
                <div className="row d-flex align-items-center justify-content-center">
                  <div className="col-5 chart_1">
                    <div className="row">
                      <div className="col-11 charts">
                        <BarChart />
                      </div>
                    </div>
                  </div>
                  <div className="col-3 chart_2">
                    <div className="row">
                      <div className="col-11 charts">
                      <DoughnutChart />
                      </div>
                    </div>
                  </div>
                  <div className="col-4 chart_3">
                    <div className="row">
                      <div className="col-11 charts">
                       <LineChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
