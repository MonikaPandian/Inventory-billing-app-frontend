import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [orders, setOrders] = useState("")

  const getOrders = () => {
    fetch("https://inventory-billing-app-backend.vercel.app/orders/count", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((res) => setOrders(res))
      .catch((e) => console.log(e));
  }

  useEffect(() => getOrders(), [orders]);

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10">weekend</i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Today's Money</p>
                <h4 className="mb-0">₹ 53k</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+55% </span>than last week</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10">person</i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Today's Orders</p>
                <h4 className="mb-0">{orders}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>than last month</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10">person</i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">New Customers</p>
                <h4 className="mb-0">10</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-danger text-sm font-weight-bolder">-2%</span> than yesterday</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10">weekend</i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Sales</p>
                <h4 className="mb-0"> ₹ 10,050</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+5% </span>than yesterday</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-4 col-md-6 mt-4 mb-4">
          <div className="card z-index-2 ">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                <div className="chart">
                  <Bar options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      }
                    },
                    interaction: {
                      intersect: false,
                      mode: 'index',
                    },
                    scales: {
                      y: {
                        grid: {
                          drawBorder: false,
                          display: true,
                          drawOnChartArea: true,
                          drawTicks: false,
                          borderDash: [5, 5],
                          color: 'rgba(255, 255, 255, .2)'
                        },
                        ticks: {
                          beginAtZero: true,
                          min: 0,
                          max: 80,
                          stepSize: 10,
                          padding: 10,
                          font: {
                            size: 14,
                            weight: 300,
                            family: "Roboto",
                            style: 'normal',
                            lineHeight: 2
                          },
                          color: "#fff"
                        },
                      },
                      x: {
                        grid: {
                          drawBorder: false,
                          display: true,
                          drawOnChartArea: true,
                          drawTicks: false,
                          borderDash: [5, 5],
                          color: 'rgba(255, 255, 255, .2)'
                        },
                        ticks: {
                          display: true,
                          color: '#f8f9fa',
                          padding: 10,
                          font: {
                            size: 14,
                            weight: 300,
                            family: "Roboto",
                            style: 'normal',
                            lineHeight: 2
                          },
                        }
                      },
                    },
                  }} data={{
                    labels: ["M", "T", "W", "T", "F", "S", "S"],
                    datasets: [{
                      label: "Sales",
                      tension: 0.4,
                      borderWidth: 0,
                      borderRadius: 4,
                      borderSkipped: false,
                      backgroundColor: "rgba(255, 255, 255, .8)",
                      data: [50, 20, 10, 22, 50, 10, 40],
                      maxBarThickness: 6
                    },],
                  }} />
                </div>
              </div>
            </div>
            <div className="card-body">
              <h6 className="mb-0 ">Sales Performance</h6>
              <p className="text-sm">Last week</p>
              <hr className="dark horizontal" />
              <div className="d-flex ">
                <i className="material-icons text-sm my-auto me-1">schedule</i>
                <p className="mb-0 text-sm"> campaign sent 2 days ago </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4 mb-4">
          <div className="card z-index-2  ">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div className="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                <div className="chart">
                  <Line options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      }
                    },
                    interaction: {
                      intersect: false,
                      mode: 'index',
                    },
                    scales: {
                      y: {
                        grid: {
                          drawBorder: false,
                          display: true,
                          drawOnChartArea: true,
                          drawTicks: false,
                          borderDash: [5, 5],
                          color: 'rgba(255, 255, 255, .2)'
                        },
                        ticks: {
                          display: true,
                          color: '#f8f9fa',
                          padding: 10,
                          font: {
                            size: 14,
                            weight: 300,
                            family: "Roboto",
                            style: 'normal',
                            lineHeight: 2
                          },
                        }
                      },
                      x: {
                        grid: {
                          drawBorder: false,
                          display: false,
                          drawOnChartArea: false,
                          drawTicks: false,
                          borderDash: [5, 5]
                        },
                        ticks: {
                          display: true,
                          color: '#f8f9fa',
                          padding: 10,
                          font: {
                            size: 14,
                            weight: 300,
                            family: "Roboto",
                            style: 'normal',
                            lineHeight: 2
                          },
                        }
                      },
                    }
                  }} data={{
                    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                      label: "sales",
                      tension: 0,
                      pointRadius: 5,
                      pointBackgroundColor: "rgba(255, 255, 255, .8)",
                      pointBorderColor: "transparent",
                      borderColor: "rgba(255, 255, 255, .8)",
                      borderWidth: 4,
                      backgroundColor: "transparent",
                      fill: true,
                      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
                      maxBarThickness: 6
                    }],
                  }} />
                </div>
              </div>
            </div>
            <div className="card-body">
              <h6 className="mb-0 "> Daily Sales </h6>
              <p className="text-sm "> (<span className="font-weight-bolder">+15%</span>) increase in today sales. </p>
              <hr className="dark horizontal" />
              <div className="d-flex ">
                <i className="material-icons text-sm my-auto me-1">schedule</i>
                <p className="mb-0 text-sm"> updated 4 min ago </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-4 mb-3">
          <div className="card z-index-2 ">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                <div className="chart">
                  <Line options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      }
                    },
                    interaction: {
                      intersect: false,
                      mode: 'index',
                    },
                    scales: {
                      y: {
                        grid: {
                          drawBorder: false,
                          display: true,
                          drawOnChartArea: true,
                          drawTicks: false,
                          borderDash: [5, 5],
                          color: 'rgba(255, 255, 255, .2)'
                        },
                        ticks: {
                          display: true,
                          padding: 10,
                          color: '#f8f9fa',
                          font: {
                            size: 14,
                            weight: 300,
                            family: "Roboto",
                            style: 'normal',
                            lineHeight: 2
                          },
                        }
                      },
                      x: {
                        grid: {
                          drawBorder: false,
                          display: false,
                          drawOnChartArea: false,
                          drawTicks: false,
                          borderDash: [5, 5]
                        },
                        ticks: {
                          display: true,
                          color: '#f8f9fa',
                          padding: 10,
                          font: {
                            size: 14,
                            weight: 300,
                            family: "Roboto",
                            style: 'normal',
                            lineHeight: 2
                          },
                        }
                      },
                    },
                  }} data={{
                    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                      label: "deliveries",
                      tension: 0,
                      pointRadius: 5,
                      pointBackgroundColor: "rgba(255, 255, 255, .8)",
                      pointBorderColor: "transparent",
                      borderColor: "rgba(255, 255, 255, .8)",
                      borderWidth: 4,
                      backgroundColor: "transparent",
                      fill: true,
                      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                      maxBarThickness: 6
                    }],
                  }} />
                </div>
              </div>
            </div>
            <div className="card-body">
              <h6 className="mb-0">Completed Deliveries</h6>
              <p className="text-sm">Last five months</p>
              <hr className="dark horizontal" />
              <div className="d-flex ">
                <i className="material-icons text-sm my-auto me-1">schedule</i>
                <p className="mb-0 text-sm">just updated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
          <div className="card">
            <div className="card-header pb-0">
              <div className="row">
                <div className="col-lg-6 col-7">
                  <h6>Bulk Orders</h6>
                  <p className="text-sm mb-0">
                    <i className="fa fa-check text-info" aria-hidden="true"></i>
                    <span className="font-weight-bold ms-1">12 done</span> this month
                  </p>
                </div>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Shop name</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Order amount</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Amount Paid</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Amount Pending</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img src="../assets/img/small-logos/logo-xd.svg" className="avatar avatar-sm me-3" alt="xd" />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Cooperative Shop</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-sm font-weight-bold">₹ 12,000</span>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-sm font-weight-bold">₹ 8,000</span>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-sm font-weight-bold">₹ 4,000</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img src="../assets/img/small-logos/logo-atlassian.svg " className="avatar avatar-sm me-3" alt="xd" />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Fine Gourmet</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-sm font-weight-bold">₹ 12,000</span>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-sm font-weight-bold">₹ 8,000</span>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-sm font-weight-bold">₹ 4,000</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img src="../assets/img/small-logos/logo-slack.svg" className="avatar avatar-sm me-3" alt="xd" />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Whole Foods market</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-sm font-weight-bold">₹ 20,000</span>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-sm font-weight-bold">₹ 10,000</span>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-sm font-weight-bold">₹ 5,000</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img src="../assets/img/small-logos/logo-spotify.svg " className="avatar avatar-sm me-3" alt="xd" />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Walmart</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-sm font-weight-bold">₹ 18,000</span>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-sm font-weight-bold">₹ 16,000</span>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-sm font-weight-bold">₹ 2,000</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img src="../assets/img/small-logos/logo-jira.svg " className="avatar avatar-sm me-3" alt="xd" />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Stop & shop</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-sm font-weight-bold">₹ 14,000</span>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-sm font-weight-bold">₹ 11,000</span>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-sm font-weight-bold">₹ 3,000</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img src="../assets/img/small-logos/logo-invision.svg" className="avatar avatar-sm me-3" alt="xd" />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Market of Choice</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-sm font-weight-bold">₹ 19,000</span>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-sm font-weight-bold">₹ 14,000</span>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-sm font-weight-bold">₹ 5,000</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card h-100">
            <div className="card-header pb-0">
              <h6>Orders overview</h6>
              <p className="text-sm">
                <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                <span className="font-weight-bold">24%</span> this month
              </p>
            </div>
            <div className="card-body p-3">
              <div className="timeline timeline-one-side">
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="material-icons text-success text-gradient">notifications</i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">₹ 2400, cereals and Millets</h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 PM</p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="material-icons text-danger text-gradient">code</i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">New order #1832412</h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 11 PM</p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="material-icons text-info text-gradient">shopping_cart</i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">Server payments for April</h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 9:34 PM</p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="material-icons text-warning text-gradient">credit_card</i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">New card added for order #4395133</h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">20 DEC 2:20 AM</p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="material-icons text-primary text-gradient">key</i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">Unlock packages for new shop</h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">18 DEC 4:54 AM</p>
                  </div>
                </div>
                <div className="timeline-block">
                  <span className="timeline-step">
                    <i className="material-icons text-dark text-gradient">payments</i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">New order #9583120</h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">17 DEC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard















































































































































































































