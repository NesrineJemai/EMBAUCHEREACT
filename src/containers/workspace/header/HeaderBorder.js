import React from 'react'
import {
    ToolbarRow,
    ToolbarSection,
    ToolbarTitle,
    ToolbarIcon
  } from 'rmwc/Toolbar'
  import {Link, Route, Switch} from 'react-router-dom'

const HeaderBorder = (props) => {
  const linkStyle = {
    textDecoration: 'none',
    color: "black",
    ":hover": {
      textDecoration: "none",
      color: "black"},
    ":visited": {
      textDecoration: "none",
      color: "black"}
  }
    console.log(props)
    return ( 
      
      <ToolbarRow style={{ backgroundColor: 'white' }}>
        <ToolbarSection alignStart>
          <ToolbarTitle style={{ color: 'black' }}>{props.name}</ToolbarTitle>
        </ToolbarSection>
        <Route path="/create" render={()=>{
          return (
            <ToolbarSection alignEnd>
              <Link to='/' style={linkStyle}><ToolbarIcon style={{ color: 'black' }} use='close'/></Link>
            </ToolbarSection>
          )}}/>
        
      </ToolbarRow>
    )
}
export default HeaderBorder;