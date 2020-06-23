import React from "react"
import Profile from "./Profile"
import {
    addPost,
    gettingProfile,
    gettingStatus,
    settingStatus
} from "../../../redux/reducers/profileReducer"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {compose} from "redux"
import {
    getId,
    getPosts,
    getProfile,
    getStatus
} from "../../../redux/selectors/profileSelectors"


class ProfileContainer extends React.Component {

    refProf = () => {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.id;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.gettingProfile(userId)
        this.props.gettingStatus(userId)
    }

    componentDidMount() {
        this.refProf()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refProf()
        }
    }

    render() {
        return (
            <Profile
                owner={!this.props.match.params.userId}
                addPost={this.props.addPost}
                settingStatus={this.props.settingStatus}
                profile={this.props.profile}
                status={this.props.status}
                posts={this.props.posts}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: getId(state),
        status: getStatus(state),
        profile: getProfile(state),
        posts: getPosts(state),
    }
}
export default compose(
    connect(mapStateToProps,
        {
            gettingProfile,
            addPost,
            gettingStatus,
            settingStatus
        }),
    withRouter,
)(ProfileContainer);

