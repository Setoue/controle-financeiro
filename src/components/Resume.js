import React from 'react'
import * as style from '../styles/resume'
import ResumeItem from './ResumeItem'
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from 'react-icons/fa';

import useCalculate from '../hooks/useCalculate.js';


const Resume = () => {

    const { income, expense, total } = useCalculate();

    return (
        <>
            <style.Container>
                <ResumeItem Title='Entradas' Icon={FaRegArrowAltCircleUp} Value={income} Color={0} />
                <ResumeItem Title='Saídas' Icon={FaRegArrowAltCircleDown} Value={expense} Color={1} />
                <ResumeItem Title='Total' Icon={FaDollarSign} Value={total} Color={2} />
            </style.Container>
        </>

    )
}

export default Resume