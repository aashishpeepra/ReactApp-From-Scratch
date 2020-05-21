import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {starter} from '../../actions/index';
class HomeContainer extends Component{
    UNSAFE_componentWillMount(){
        this.props.starter();
    }
    render(){
        console.log(this.props)
        return(
            <div>
                {
                    // console.log(this.props.data)
                    this.props.data.getData!==undefined ?
                    <ul>
                        {this.props.data.getData.map(each=><li key={each.id}>{each.name}</li>)}
                    </ul>:null
                }
            </div>
        )
    }
}
function mapStateToProps(state){
    return {data:state.data};
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({starter},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);