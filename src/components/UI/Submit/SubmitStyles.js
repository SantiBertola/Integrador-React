import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
        background-color: #e4584f;
        border: 2px solid black;
        border-radius: 7px;
        margin: 5px;
        padding: 10px;
        cursor: pointer;
        font-size: 14px;
        width: 200px;

    :hover {
        border: 2px solid #e4584f;
        color: #e4584f;
        background-color: #2b3438;
        transition: 0.3s all ease-in;
    }
`;
