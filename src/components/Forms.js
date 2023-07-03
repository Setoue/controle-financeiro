import React, { useState } from 'react'
import * as style from '../styles/forms'
import useCalculate from '../hooks/useCalculate';
import Grid from './Grid';

const Forms = () => {

    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setIsExpense] = useState(Boolean);

    const generateID = () => Math.round(Math.random() * 1000);

    const { handleAdd, transactionsList, setTransactionsList } = useCalculate();

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor")
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo");
            return;
        }

        const transaction = {

            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    }

    return (
        <>
            <style.Container>
                <style.InputContent>
                    <style.Label>Descrição</style.Label>
                    <style.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </style.InputContent>
                <style.InputContent>
                    <style.Label>Valor</style.Label>
                    <style.Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </style.InputContent>
                <style.RadioGroup>
                    <style.Input
                        type='radio'
                        id='rIncome'
                        defaultChecked
                        name='group1'
                        onChange={() => setIsExpense(true)}
                    />
                    <style.Label htmlFor='rIncome'>Entrada</style.Label>

                    <style.Input
                        type='radio'
                        id='rExpenses'
                        name='group1'
                        onChange={() => setIsExpense(true)}
                    />
                    <style.Label htmlFor='rExpenses'>Saídas</style.Label>
                </style.RadioGroup>
                <style.Button onClick={handleSave}>Adicionar</style.Button>
            </style.Container>
            <Grid itens={transactionsList} setItens={setTransactionsList} />
        </>
    )
}

export default Forms