import PropTypes from 'prop-types'
function Header({title,bgColor,textColor}){
    const headerStyle={
        backgroundColor:bgColor,
        color:textColor
    }
    return(<header style={headerStyle}>
        <h2 className="header-title">{title}</h2>
    </header>)
}

Header.defaultProps={
    title:'feedback ui',
    bgColor:'rgba(255,255,255,0.9)',
    textColor:'#19b4db'
}
Header.propTypes={
    text:PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string,
}
export default Header;