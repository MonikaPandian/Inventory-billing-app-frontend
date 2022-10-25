import React from 'react'
import Footer from './Footer'

const ProfileDetails = () => {
    return (
        <div className="container-fluid px-2 px-md-4">
            <div className="page-header min-height-100 border-radius-xl" style={{ backgroundImage: 'https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80' }}>
                <span className="mask  bg-gradient-primary  opacity-6"></span>
            </div>
            <div className="card card-body mx-3 mx-md-4 mt-n6">
                <div className="row gx-4 mb-2">
                    <div className="col-auto">
                        <div className="avatar avatar-xl position-relative">
                            <img src="../assets/img/bruce-mars.jpg" alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
                        </div>
                    </div>
                    <div className="col-auto my-auto">
                        <div className="h-100">
                            <h5 className="mb-1">
                                Richard Davis
                            </h5>
                            <p className="mb-0 font-weight-normal text-sm">
                                CEO / Co-Founder
                            </p>
                        </div>
                    </div>
                   
                </div>
                <div className="row">
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <div className="card card-plain h-100">
                                <div className="card-header pb-0 p-3">
                                    <h6 className="mb-0">Platform Settings</h6>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="text-uppercase text-body text-xs font-weight-bolder">Account</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault" defaultChecked />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault">Email me when someone follows me</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1" />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault1">Email me when someone answers on my post</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" defaultChecked />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault2">Email me when someone mentions me</label>
                                            </div>
                                        </li>
                                    </ul>
                                    <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-4">Application</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault3" />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault3">New launches and projects</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault4" defaultChecked />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault4">Monthly product updates</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 px-0 pb-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault5" />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault5">Subscribe to newsletter</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-4">
                            <div className="card card-plain h-100">
                                <div className="card-header pb-0 p-3">
                                    <div className="row">
                                        <div className="col-md-8 d-flex align-items-center">
                                            <h6 className="mb-0">Profile Information</h6>
                                        </div>
                                        <div className="col-md-4 text-end">
                                            <a href="#">
                                                <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <p className="text-sm">
                                        Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                                    </p>
                                    <hr className="horizontal gray-light my-4" />
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Full Name:</strong> &nbsp; Alec M. Thompson</li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Mobile:</strong> &nbsp; (44) 123 1234 123</li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; alecthompson@mail.com</li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Location:</strong> &nbsp; USA</li>
                                        <li className="list-group-item border-0 ps-0 pb-0">
                                            <strong className="text-dark text-sm">Social:</strong> &nbsp;
                                            <a className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="#">
                                                <i className="fab fa-facebook fa-lg"></i>
                                            </a>
                                            <a className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="#">
                                                <i className="fab fa-twitter fa-lg"></i>
                                            </a>
                                            <a className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="#">
                                                <i className="fab fa-instagram fa-lg"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-4">
                            <div className="card card-plain h-100">
                                <div className="card-header pb-0 p-3">
                                    <h6 className="mb-0">Conversations</h6>
                                </div>
                                <div className="card-body p-3">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                                            <div className="avatar me-3">
                                                <img src="../assets/img/kal-visuals-square.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Sophie B.</h6>
                                                <p className="mb-0 text-xs">Hi! I need more information..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="#">Reply</a>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <div className="avatar me-3">
                                                <img src="../assets/img/marie.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Anne Marie</h6>
                                                <p className="mb-0 text-xs">Awesome work, can you..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="#">Reply</a>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <div className="avatar me-3">
                                                <img src="../assets/img/ivana-square.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Ivanna</h6>
                                                <p className="mb-0 text-xs">About files I can..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="#">Reply</a>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <div className="avatar me-3">
                                                <img src="../assets/img/team-4.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Peterson</h6>
                                                <p className="mb-0 text-xs">Have a great afternoon..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="#">Reply</a>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0">
                                            <div className="avatar me-3">
                                                <img src="../assets/img/team-3.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Nick Daniel</h6>
                                                <p className="mb-0 text-xs">Hi! I need more information..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="#">Reply</a>
                                        </li>
                                    </ul>
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

export default ProfileDetails