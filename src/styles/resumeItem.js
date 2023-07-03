import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 15px;
    width: 30%;

    @media (max-width: 750px){
        width: 25%;

        p{
            font-size: 10px;
        }
        span{
            font-size: 12px;
            /* display: none; */
        } 
    }
`;

export const HeaderCard = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;  
    margin:20px auto;  

    svg{
        width: 20px;
        height: 20px;
    }
`;

export const HeaderTitle = styled.p`

    font-size: 20px;
`;


export const Total = styled.span`
    font-size: 25px;
    font-weight: bold;
`;