import * as style from "../styles/gridItem";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
    return (
        <style.Tr>
            <style.Td>{item.desc}</style.Td>
            <style.Td>{item.amount}</style.Td>
            <style.Td alignCenter>
                {item.expense ? (
                    <FaRegArrowAltCircleDown color="red" />
                ) : (
                    <FaRegArrowAltCircleUp color="green" />
                )}
            </style.Td>
            <style.Td alignCenter>
                <FaTrash onClick={() => onDelete(item.id)} />
            </style.Td>
        </style.Tr>
    )
}
export default GridItem