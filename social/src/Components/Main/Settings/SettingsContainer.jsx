import React from "react";
import Settings from "./Settings";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withRedirectAuth} from "../../../hoc/withRedirectAuth";
import {getId, getIsFetching, getProfile} from "../../../redux/selectors/profileSelectors";
import {gettingProfile, savingProfile, uploadingPhoto} from "../../../redux/reducers/profileReducer";

class SettingsContainer extends React.Component {

    componentDidMount() {
        this.props.gettingProfile(this.props.id);
    }


    render() {
        return (
            <Settings isFetching={this.props.isFetching}
                      uploadPhoto={this.props.uploadingPhoto}
                      profile={this.props.profile}
                      {...this.props}/>
        )
    }
}
const mapStateToProps =(state)=>{
    return{

        isFetching: getIsFetching(state),
        profile: getProfile(state),
        id:getId(state),
    }
}
export default compose(
    connect(mapStateToProps,{uploadingPhoto,savingProfile,gettingProfile}),
    withRouter,
    withRedirectAuth,
)(SettingsContainer);