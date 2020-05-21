import React,{Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {add} from '../../actions/index';
class Formed extends Component{
    renderForm(field){

        return(
            <div className="form-box" style={{margin:"10px"}}>
                <label>{field.title}</label>
                <input autoComplete="true" type={field.type} {...field.input}/>
                <div style={{fontSize:"15px",color:"red"}}>
                    {field.meta.touched?field.meta.error:""}
                </div>
            </div>
        )
    }
    onSubmit(e){
        this.props.add(e,()=>{
            console.log(this.props)
            alert(this.props.status)
        })
    }
    render(){
        return(
            <div className="form-holder">
                <form  onSubmit={this.props.handleSubmit((event)=>this.onSubmit(event))}>
                    <Field type="text" title="Enter Name" name="name" component={this.renderForm}/>
                    <Field type="password" title="Enter Password" name="password" component={this.renderForm}/>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}
function validate(values){
    let errors={};
    console.log(values.name);
    if(!values.name){
        errors.name="You must be having a name"
    }
    if(!values.password)
    {
        errors.password="You gotta be kidding me"
    }
    return errors;
}
function mapStateToProps(state)
{
    console.log("--------->",state)
    return {status:state.data.status}
}
export default reduxForm({
    validate,
    form:"PostMessage"
})(
    connect(mapStateToProps,{add})(Formed)
);