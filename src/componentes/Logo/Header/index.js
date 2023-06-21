import Logo from '../../Logo'
import Opcoes from '../Opcoes'
import Icones from '../Icones'
import styled from 'styled-components'

const HeaderContainer = styled.header`

    background-color: #FFF; 
    display: flex;
    justify-content: center;
  
`
function Header(){
    return(
        <HeaderContainer>
            <Logo/>
            <Opcoes/>
            <Icones/>
        </HeaderContainer>
    )
}

export default Header