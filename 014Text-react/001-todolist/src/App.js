import React,{Component,Fragment} from 'react'
import './App.css'
import Item from './Item.js'
import { Calendar } from 'antd';

class App extends Component{
	constructor(props){
		super(props)
		//初始化state
		this.state = {
			list:['吃饭','睡觉'],
			task:''
		}

		this.handleInput = this.handleInput.bind(this)
		this.handelAdd = this.handelAdd.bind(this)
	}
	handelAdd(){
		const list = [...this.state.list,this.state.task]
		this.setState((preState)=>({
			list:list,
			task:''
		}),()=>{
			console.log(this.ul.childNodes)
		})
	}
	handleInput(ev){
		// const val = ev.target.value
		// console.log(this.input)
		const val = this.input.value
		this.setState((preState)=>({
			task:val
		}))
	}
	handleDel(index){
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState((preState)=>({
			list:list
		}))
	}
	getItems(){
		return this.state.list.map((item,index)=>{
			return (
				<Item 
					key={index} 
					task={item} 
					list={this.state.list} 
					index={index} 
					handleDel = {this.handleDel.bind(this,index)}
				/>
			)
		})
	}
	render(){
		return (
			<div className='App'>
				<input ref={(input)=>{this.input = input}} onChange={this.handleInput} value={this.state.task} />
				<button className='btn' onClick={this.handelAdd.bind(this)}>提交</button>
				<ul className='list' ref={(ul)=>{this.ul = ul}}>
					{	
						this.getItems()
					}
				</ul>
			</div>	
		)
	}
}


export default App