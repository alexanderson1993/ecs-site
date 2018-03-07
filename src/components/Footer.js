import React from 'react'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <a href="https://fyreworks.us" target="_blank">
      <img draggable={false} src={require('../images/oss_logo.svg')} />
    </a>
    <p className="copyright">&copy; {new Date().getUTCFullYear()} Fyreworks</p>
  </footer>
)

Footer.propTypes = {
  timeout: React.PropTypes.bool,
}

export default Footer
