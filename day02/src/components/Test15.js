import React, { Component } from 'react';

class Test15 extends Component {
    state = {
        data:[
            {no:1,name:'지진희',age:40,addr:'서울', isActive:false},
            {no:2,name:'김현주',age:30,addr:'강원', isActive:false},
            {no:3,name:'허준호',age:45,addr:'제주', isActive:false},
            {no:4,name:'정만식',age:42,addr:'경기', isActive:true},
            {no:5,name:'이승준',age:40,addr:'부산', isActive:false},
            {no:6,name:'권해효',age:46,addr:'울산', isActive:true},
            {no:7,name:'한고은',age:38,addr:'경남', isActive:false},
            {no:8,name:'연우진',age:30,addr:'전남', isActive:true},
            {no:9,name:'한선화',age:26,addr:'포항', isActive:false},
            {no:10,name:'유선호',age:20,addr:'서울', isActive:true},
        ]
    }

    click1 = ()  => {
        this.setState({
            data: this.state.data.filter( item => item.no !== 1 )
        })
    }

    click2 = ()  => {
        const { data } = this.state 
        this.setState({
            data: data.filter( item => item.no !== 2 )
        })
    }
    click3 = ()  => {
        const { data } = this.state 
        this.setState({
            data: data.filter( item => item.no !== 5 )
        })
    }

    click4 = (num)  => {
        const { data } = this.state 
        this.setState({
            data : data.filter( item => item.no !== num )
        })
    }

    // 값 수정 
    click5 = ()  => {
        const { data } = this.state 
        this.setState({
            data: data.map( item => {
                if( item.no === 1 ) {
                    return {
                        ...item , 
                        name:'이젠',
                        age: 10 ,
                        addr:'서울시 서초구',
                        isActive:true 
                    }
                }else{
                    return item 
                }
            } )
        })
    }

    click6 = ()  => {
        const { data } = this.state 
        this.setState({
            data : data.map( item => {
                if( item.no === 2 ) {
                    return{
                        ...item ,
                        name:'이철수',
                        age:20 ,
                        addr:'제주도',
                        isActive:true 
                    }
                }
                return item 
            })
        })
    }

    // 삼항연산자
    click7 = ()  => {
        const { data } = this.state 
        this.setState({
            data : data.map( item => item.no === 5 ? 
                {...item , name:'이수근',age:30, addr:'인천'}:item )
        })
    }

    click8 = (num)  => {
        const { data } = this.state 
        this.setState({
            data: data.map( item => item.no === num ? 
                {...item , name:'강호동00', name:30} : item )
        })
    }

    render() {
        const { data } = this.state 
        return (
            <div>
                <h1>삭제(filter), 수정(map - if)</h1>
                <p>
                    <button onClick={this.click1}>삭제1</button>
                    <button onClick={this.click2}>삭제2</button>
                    <button onClick={this.click3}>삭제3</button>
                </p>
                <hr/>

                <p>
                    <button onClick={() => this.click4(3)}>삭제1</button>
                    <button onClick={() => this.click4(5)}>삭제2</button>
                    <button onClick={() => this.click4(2)}>삭제3</button>
                </p>

                <p>
                    <button onClick={this.click5}>수정1</button>
                    <button onClick={this.click6}>수정2</button>                    
                    <button onClick={this.click7}>수정3</button>                    
                </p>

                <p>
                <button onClick={() => this.click8(3)}>수정1</button>
                <button onClick={() => this.click8(4)}>수정2</button>   
                </p>

                <ul>
                    {
                        data.map( item => <li key={item.no}>
                            {item.no} / { item.name} / { item.age } / { item.addr} /
                            {item.isActive ? '참여':'미참여'}
                        </li>)
                    }
                </ul>
                
            </div>
        );
    }
}

export default Test15;