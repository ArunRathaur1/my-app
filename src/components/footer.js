import React from 'react'
import PropTypes from 'prop-types'
function Footer(props){
    return(
        <>
        <div className="card text-center">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">First React Page</h5>
    <p className="card-text">All right are reaserver .</p>
    <a href="/" className="btn btn-primary">Go Home</a>
  </div>
</div>
        </>
    )
}
Footer.propTypes={
hello:PropTypes.string
}
export default Footer;