import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    -drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`
/* O CODIGO FAZ COM QUE O LOGO SEJA INCLICAVEL, INSELECIONAVEL*/
const LogoImg = styled.img`
    margin-right: 10px;
    -drag: none;
    user-select: none; 
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`
function Logo(){
    return (
        <LogoContainer>
            <LogoImg 
            src={logo} 
            alt='logo da página'        
            />
            <p><strong>Alura</strong>Books</p>
      </LogoContainer>
    )

}

export default Logo