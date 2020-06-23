import React from "react"
import Users from "./Users"
import {connect} from "react-redux"
import {
    gettingUsers,
    following,
    unfollowing
} from "../../../redux/reducers/usersReducer"
import {compose} from "redux"
import {
    getCurrentPage, getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsers,
    getUsers
} from "../../../redux/selectors/usersSelectors"
import {UsersType} from "../../../Types/Types"
import {StateType} from "../../../redux/store"

type MapStateToPropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    followingProgress: Array<number>
    totalItems: number
    users: Array<UsersType>
}

type MapDispatchToPropsType = {
    gettingUsers: (currentPage: number, pageSize: number) => void
    following: (id: number)=> void
    unfollowing: (id: number)=> void
}

type OwnPropsType = { // ***if needed
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType


class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.gettingUsers(this.props.currentPage, this.props.pageSize);
    }

    settingCurrentPage = (page: number) => {
        this.props.gettingUsers(page, this.props.pageSize);
    }

    render() {

        return <Users
            isFetching={this.props.isFetching}
            following={this.props.following}
            unfollowing={this.props.unfollowing}
            settingCurrentPage={this.settingCurrentPage}
            followingProgress={this.props.followingProgress}
            pageSize={this.props.pageSize}
            totalItems={this.props.totalItems}
            currentPage={this.props.currentPage}
            users={this.props.users}
        />
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalItems: getTotalUsers(state),
        users: getUsers(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}
export default compose(
    //***TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState***
    connect<MapStateToPropsType,
        MapDispatchToPropsType,
        OwnPropsType,
        StateType>(mapStateToProps, {gettingUsers, following, unfollowing})
)(UsersContainer);