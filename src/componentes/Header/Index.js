import Logo from '../Logo/index'
import OpcoesHeader from '../../componentes/Logo/OpcoesHeader/Index'
import IconesHeader from '../../componentes/Logo/IconesHeader/Index'
import Style from 'styled-components'

const HeaderContainer = Style.header`

    background-color: #ffff;
    display: flex;
    justify-content: center;
  
`

function Header(){
    return(
        <HeaderContainer>
          <Logo/>
          <OpcoesHeader/>
          <IconesHeader/>
        </HeaderContainer>
      
    )
}

export default Header