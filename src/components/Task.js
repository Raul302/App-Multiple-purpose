import React,{ Component } from 'react';
import SingleTask  from './SingleTask';
class Task extends Component {
    render(){
        return (
            this.props.tasks.map(task =><SingleTask task={task} key = {task.id}/> )
        )
    }
}

export default Task;