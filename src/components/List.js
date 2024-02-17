import Item from './Item';
import '../scss/main.css'
function List(){
    return(
        <>
        <ul className="list">
            <Item marca="Volksvagen" lancamento={1990}/>
            <Item marca="Nissan" lancamento={2009}/>
            <Item />
        </ul>
        </>
    )
}


export default List;