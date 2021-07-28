import React, { useEffect, useState } from 'react';
import GlobalStyle from '../styled/Global'
import PlanAdd from './PlanAdd'
import PlanList from './PlanList'


const Plan = () => {
    const [plans , setPlans ] = useState([])

    useEffect( ()  => {
        const getData = async() => {
            const res = await fetch('http://localhost:4000/plans')
            const data = await res.json()
            setPlans( data )
        }
        getData() 
    },[])


    const onAdd  = async(form) => {
        const res = await fetch('http://localhost:4000/plans',{
            method:'post' ,
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify( form )
        })
        const data = await res.json()
        setPlans([...plans, data] )
    }

    const onDel  = async(id) => {
        const res = await fetch(`http://localhost:4000/plans/${id}`,{
            method:'delete'
        })
        setPlans( plans.filter( plan => plan.id !== id ))
    }

    const getPlan = async(id) => {
        const res = await fetch(`http://localhost:4000/plans/${id}`)
        const data = await res.json()
        return data 
    }

    const onToggle  = async(id) => {
        const togglePlan = await getPlan(id)
        //변경
        const upDataPlan = {...togglePlan , done : !togglePlan.done }
        //값넣기
        const res = await fetch(`http://localhost:4000/plans/${id}`, {
            method: 'put',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify( upDataPlan )
        })
        const data = await res.json() 
        getView()
    }
    const getView = ()  => {
        const config = { method:'get'}
        fetch('http://localhost:4000/plans', config)
        .then( res => res.json())
        .then( res => setPlans( res ))
    }

    return (
        <div>
            <GlobalStyle />
            <PlanAdd onAdd={onAdd} />
            <PlanList plans={plans}  onDel={onDel} onToggle={onToggle} />
        </div>
    );
};

export default Plan;