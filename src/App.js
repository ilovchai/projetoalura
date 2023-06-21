import Header from './componentes/Logo/Header';
import Pesquisa from './componentes/pesquisa'
import UltimosLancamentos from './componentes/UltimosLancamentos';
import styled from 'styled-components'


const AppContainer = styled.div`
  
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);

  li{
    list-style: none;
  }

` 

function App() {
  return (
  <AppContainer>
    <Header/>
    <Pesquisa/>
    <UltimosLancamentos/>
  </AppContainer>
  );
}

export default App;
