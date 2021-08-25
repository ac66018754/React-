import React,{ Component,Fragment} from 'react';
import TodoItem from './TodoItem.js'

class Todolist extends Component {
	constructor(props){
		super(props);
		this.state={
			inputValue:'',
			list:[]
		}
	}

	render(){
		return(
			<Fragment>
				<div>
					<input
						value={this.state.inputValue}
						onChange={this.handleInputChange.bind(this)}
					/>
					<button onClick={this.handleBtnClick.bind(this)}>提交</button>
				</div>
				<ul>{/*這邊會有list的item還有他的index值   我要將他們連同刪除函式一同傳去子組件 */}
					{ 
						this.state.list.map((item,index) =>{
							return (<TodoItem
									content={item}
									index={index}
									delete={this.handleItemDelete.bind(this)}
							/>)
						})
					}
				</ul>
			</Fragment>
		)
	}

	handleInputChange(e){
		this.setState({
			inputValue:e.target.value
		})
	}
	handleBtnClick(){
		this.setState(
		{
			list:[...this.state.list,this.state.inputValue],
			inputValue:''
		})
	}
	handleItemDelete(n){
		const list=[...this.state.list];//複製舊串列
		list.splice(n,1); {/*從獲取到得index值往後刪除一個(刪自己)*/}
		this.setState({
			list:list
		})
	}
}
export default Todolist;