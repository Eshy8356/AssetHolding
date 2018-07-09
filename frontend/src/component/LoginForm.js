import React from 'react'
import  { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const buttonStyle = {
    position: 'relative',
    left: '90px',
    top: '25px',
    marginBottom: '30px'
}
const renderTextField = ({input, label, type}) => (
    <TextField
        label={label}
        type={type}
        {...input}
        fullWidth
    />
)


let LoginForm = (props) =>{
    const { handleSubmit } = props
    return(
        <form onSubmit={handleSubmit}>

            <div>
                <Field name="email" component={renderTextField} label="Email" type="text" />
            </div>
            <div>
                {/*<Field name="password" component='input' type="password"/>*/}
                <Field name='password' component={renderTextField} label="Password" type="password"/>
            </div>
            <Button type="submit" variant='raised' color='primary' style={buttonStyle}>Login</Button>
        </form>
    )
}

LoginForm = reduxForm({form:"login"})(LoginForm)

export default LoginForm