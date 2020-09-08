import React,{Component} from 'react';
import './SingleTask.css';

class SingleTask extends Component {

    StyleCompleted(){
        return {
            fontSize:'20px',
            color: this.props.task.done ? 'pink' : 'black',
            textDecoration:'none',
        }
    }
    render(){
        // extraction
        const {task} = this.props;
        const redColor = {background : 'red'};
        return  <div
        style={this.StyleCompleted()}
        // style={redColor}
        >
        {task.title} -
        {task.description} -
        {task.done} -
        {task.id}
        <input type="checkbox"/>
        <button style={btnDelete}>
            x
        </button>
        </div>
    }
}
const btnDelete = {
    fontSize: '32px',
    background: 'blue',
    color: 'orange',
    border: 'none',
    padding: '10px 15px',
    cursor : 'pointer',
    borderRadius: '50%',
    float: 'right'
};
export default SingleTask;