
import * as style from '../styles/grid';
import GridItem from './GridItem';

const Grid = ({ itens, setItens }) => {

    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    }

    return (
        <style.Table>
            <style.Thead>
                <style.Tr>
                    <style.Th width={40}>Descrição</style.Th>
                    <style.Th width={40}>Valor</style.Th>
                    <style.Th width={10} alignCenter>Tipo</style.Th>
                    <style.Th width={10}></style.Th>
                </style.Tr>
            </style.Thead>
            <style.Tbody>
                {itens?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete} />
                ))}
            </style.Tbody>
        </style.Table>
    )
}

export default Grid