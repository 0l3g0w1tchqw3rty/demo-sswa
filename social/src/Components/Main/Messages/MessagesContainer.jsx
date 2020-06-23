import Messages from "./messages";
import {addMessage} from "../../../redux/reducers/messagesReducer";
import {connect} from "react-redux";
import React from "react";
import {withRedirectAuth} from "../../../hoc/withRedirectAuth";
import {compose} from "redux";



class MessagesContainer extends React.Component{


    render() {
        return(
            <Messages{...this.props}/>
            )

    }
}


const mapStateToProps = (state) => {
    return {
        users: state.messages.users,
        message: state.messages.message,
        string: state.messages.string,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => {
            dispatch(addMessage(message));
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRedirectAuth
)(MessagesContainer);