import styled from "styled-components";


export const CategoriesContainer = styled.div`
        display: flex;  
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 100%;

        @media (max-width: 992px) {
            flex-direction: column;
        }

`

export const CategoriesButtons = styled.button`
        background-color: ${({ selected }) =>
            selected ? 'black' : '#e4584f'};
        color: ${({ selected }) =>
            selected ? '#e4584f' : 'black'};

        border: 2px solid ${({ selected }) =>
            selected ? '#e4584f' : 'black'};
        border-radius: 10px;
        padding: 5px;
        cursor: pointer;
        width: 300px;

    :hover {
        border: 2px solid #e4584f;
        color: #e4584f;
        background-color: #2b3438;
        transition: 0.3s all ease-in;
    }

    @media (max-width: 992px) {
        width: 50%;
    }
    @media (max-width: 576px) {
        width: 60%;
    }

`

