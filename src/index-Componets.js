import React from 'react';
import ReactDOM from 'react-dom';
import ComponentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui conatiner comments">
            <ApprovalCard>Are you sure?</ApprovalCard>
            <ApprovalCard><ComponentDetail avatar={faker.image.avatar()} author={faker.name.firstName()} time={faker.date.weekday()} comment={faker.lorem.sentence()} /></ApprovalCard>
            <ApprovalCard><ComponentDetail avatar={faker.image.avatar()} author={faker.name.firstName()} time={faker.date.weekday()} comment={faker.lorem.sentence()} /></ApprovalCard>
            <ApprovalCard><ComponentDetail avatar={faker.image.avatar()} author={faker.name.firstName()} time={faker.date.weekday()} comment={faker.lorem.sentence()} /></ApprovalCard>
            <ApprovalCard><ComponentDetail avatar={faker.image.avatar()} author={faker.name.firstName()} time={faker.date.weekday()} comment={faker.lorem.sentence()} /></ApprovalCard>
            
        </div>

    )
}

ReactDOM.render( <App/>, document.querySelector('#root'))