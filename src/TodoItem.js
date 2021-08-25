import React,{ Component,Fragment} from 'react';
class TodoItem extends Component 
{
	constructor(props)
	{
		super(props);		
		this.handleClick=this.handleClick.bind(this);
	}
	render()
	{
		return(
			<li onClick={this.handleClick}>
				{this.props.content}
			</li>
			)
	}
	handleClick()
	{
		this.props.delete(this.props.index)
	}

}
export default TodoItem;
