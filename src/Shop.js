import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from './redux/index'
const Shop = () => {
    const dispatch = useDispatch()
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreator, dispatch)
    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            <button className="btn btn-primary mx-2" onClick={() => { withdrawMoney(100) }}> - </button>
            Update Balance
            <button className="btn btn-primary mx-2" onClick={() => { depositMoney(100) }}> + </button>
        </div>
    )
}

export default Shop