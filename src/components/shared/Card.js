import PropTypes from 'prop-types'
function Card({ children ,reverse}) {
  
  return <div className={`feedback-box ${reverse && 'reverse-card'}`} style={{backgroundColor:reverse?'rgba(0,0,0,0.4)':'white'}}>{children}</div>;
}
Card.propTypes={
  children:PropTypes.node,
  reverse:PropTypes.bool,
}
Card.defaultProps={
  reverse:false,
}

export default Card;
