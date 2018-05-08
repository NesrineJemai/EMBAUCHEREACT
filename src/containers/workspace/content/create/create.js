import React, {Component, Fragment} from 'react'
import * as headerActionCreators from '../../../../store/actions/header'
import Footer from './Footer'
import formStyle from './formStyle.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import DropDownMenu from './DropDownMenu';
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';
import { Radio } from 'rmwc/Radio';
import RadioButtonExampleSimple from './RadioButtonExampleSimple';
import FloatingActionButtonExampleSimple from './FloatingActionButtonExampleSimple';
import DatePickerExampleSimple from './DatePickerExampleSimple';

import Divider from 'material-ui/Divider';
import { Select } from 'rmwc/Select';



import { connect } from 'react-redux'
class Create extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <Fragment>
                    <div  className="form">
                    <h4> Identité </h4>
                    <RadioButtonExampleSimple/>
               
                                {/* Standard text field. */}
                            <TextField label="Prénom" />
                          
                           &nbsp;&nbsp;

                                {/* Standard text field. */}
                            <TextField label="Nom" />
                          
                        <p></p>
                        <Divider />

               
                            <h4> Naissance </h4>
                        <DatePickerExampleSimple/>

                                        <p></p>

                        <Divider />
                        <h4> Télécharger la photo</h4>

               
                    <div className="addImg">
                   <FloatingActionButtonExampleSimple/>
                   </div>
                    </div>
                <Footer/>
                
                <Footer/>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
      tab: state.header.tab
    }
}
const mapDispatchToProps = dispatch => {
    return {
      setHeaderTab : tab => 
        dispatch(headerActionCreators.setHeaderTab(tab))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Create)
