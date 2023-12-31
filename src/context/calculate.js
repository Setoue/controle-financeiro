
import { createContext, useState, useEffect } from 'react';

export const CalculateContext = createContext({})

export const CalculateProvider = ({ children }) => {

    const data = localStorage.getItem("transactions");

    const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : [])
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {

        const amountExpense = transactionsList
            .filter((item) => item.expense)
            .map((transaction) => Number(transaction.amount));

        const amountIncome = transactionsList
            .filter((item) => !item.expense)
            .map((transaction) => Number(transaction.amount)); //HERE

        const expense = amountExpense.reduce((acc, cur) => cur + acc, 0).toFixed(2);
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);


        const total = Math.abs(income - expense).toFixed(2)

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);

    }, [transactionsList])

    const handleAdd = (transaction) => {
        const newArrayTransaction = [...transactionsList, transaction];

        setTransactionsList(newArrayTransaction);

        localStorage.setItem('transactions', JSON.stringify(newArrayTransaction));

    }

    return <CalculateContext.Provider value={{ income, expense, total, handleAdd, transactionsList, setTransactionsList }}>
        {children}
    </CalculateContext.Provider>
}

