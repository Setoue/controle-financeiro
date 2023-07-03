import { useContext } from "react";
import { CalculateContext } from "../context/calculate";

const useCalculate = () => {

    const context = useContext(CalculateContext)

    return context;
}

export default useCalculate;