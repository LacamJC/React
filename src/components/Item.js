import PropTypes from "prop-types";

function Item({marca, lancamento}){
    return(
        <>
            <li className="list__item">{marca} - {lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired,
}


Item.defaultProps = {
    marca: 'Valor nulo',
    lancamento: 0
}

export default Item;