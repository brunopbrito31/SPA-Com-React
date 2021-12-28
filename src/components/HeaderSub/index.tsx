import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

interface HeaderSubProps{
    menSel: number;
}


const HeaderSub: React.FC<HeaderSubProps> = (props) => {
    return(
        <Container>
            <Link to="/zooapp" className={props.menSel ===1 ? "link-ipag-sel":"link-ipag"}>Home</Link>
            <Link to="/suporte" className={props.menSel === 2 ? "link-ipag-sel":"link-ipag"}>Suporte</Link>
            <Link to="/contato" className={props.menSel === 3 ? "link-ipag-sel":"link-ipag"}>Contato</Link>
        </Container>
    )
}

export default HeaderSub;