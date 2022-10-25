import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-4  ">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              © &nbsp;&nbsp;{currentYear}&nbsp;
              Inventory_mangement_team
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
