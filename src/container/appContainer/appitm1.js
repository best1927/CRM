import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAppContent} from '../../actions/crmactionPromise';

class AppItm1 extends Component  {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        
     }
     componentDidMount(){
        this.props.getAppContent('best');
     }

  render(){  return (
        <div> {this.props.appContent}
            <div className="text-xs-right">
                <Link to="/" className="btn btn-primary">
                    Back
                </Link>
            </div>

        </div>
    )};
};

function mapStateToProps(state){
    // Map newState from Redux Reducer
    return {
        appContent :  state.crmAppItm1
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getAppContent:fetchAppContent},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(AppItm1);