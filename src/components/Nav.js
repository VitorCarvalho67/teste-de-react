import style from './Nav.module.css'

function Nav (){
    return(
        <nav>
            <div className = {style.info1} >INFORMAÇÕES NECESSÁRIAS DA NAV</div>
            <div className = {style.btns} >
                <a>Home</a>
                <a>Login</a>
                <a>Suporte</a>
            </div>
        </nav>
    );
}

export default Nav;
