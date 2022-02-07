import {FaQuestion} from 'react-icons/fa'
import {Link} from "react-router-dom"
function AboutIcon() {
  const aboutStyle={
    color:'white',
    position:'fixed',
    bottom:'1rem',
    right:'1rem',
    cursor:'pointer',
  }
  return (
    <div className='d-none d-sm-block'>
      <Link to="/about">
      <FaQuestion style={aboutStyle} size={30}/>
      </Link>
    </div>
  );
}

export default AboutIcon;
