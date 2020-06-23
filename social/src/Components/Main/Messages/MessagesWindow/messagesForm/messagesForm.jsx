import React from "react";
import m from "./messagesForm.module.css";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../../../Common/Form/Form";



let MessagesForm = ({handleSubmit,submitting}) => {

    return (
                <form onSubmit={handleSubmit} className={m.ui__container}>
                    <Field  name="message"
                            component={TextArea} type="text" className={m.ui__area}
                              placeholder="Write your's message..."/>
                    <div className={m.buttons__container}>
                        <button type="submit" disabled={submitting} className={m.buttons__send}>Send</button>
                        {/*<button type="button" className={m.buttons__clear}>Clear</button>*/}
                    </div>
                </form>

    )
}
MessagesForm = reduxForm({form: 'messages'})(MessagesForm)
export default MessagesForm;

