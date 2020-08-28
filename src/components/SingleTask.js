import React,{Component} from 'react';

class SingleTask extends Component {
    render(){
        // extraction
        const {task} = this.props;
        
        return  <div>
        {task.title} -
        {task.description} -
        {task.done} -
        {task.id}
        <input type="checkbox"/>
        <button>
            x
        </button>
        </div>
    }
}
export default SingleTask;