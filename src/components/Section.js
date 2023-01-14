import style from './Section.module.css';

function Section (){
    return(
        <section>
        <div className = {style.area2} id="area2">
            <div className={style.titulo1}>
                <p>O que é Lorem Ipsum?</p>
            </div>
            <div className = {style.info2}>
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                <button className= {style.btn2} onclick="copiarTexto ()" title="copiar">⨅</button>
            </div>
        </div>
        <div className = {style.area1}>
        </div>
    
        </section>
    );
}

export default Section;