import React from "react";
import { Container, Logo, Frase } from "./styles"
import img from "../../img/Logo-Baby-Buda-nuvem-01.png";

function Header(){
    return(
        <Container>
            <Logo src={img} />
            <Frase>Baby Yoga</Frase>
        </Container>
    )
}

export default Header;