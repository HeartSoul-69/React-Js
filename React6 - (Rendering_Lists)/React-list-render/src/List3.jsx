import PropTypes from "prop-types";

function List3 ({category = "Category" ,
                itemList = [] }) {

    // const category = props.category;
    // const itemList = props.itemList;

    const ListItems = itemList.map(items => <li key={items.id}>
                                                {items.name} : &nbsp;
                                               <b>{items.price}</b> 
                    </li>)

    return (
    <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{ListItems}</ol>
    </>    
);
};
List3.propTypes = {
    category : PropTypes.string,
    itemList : PropTypes.arrayOf(PropTypes.shape({id : PropTypes.number,
                                                name : PropTypes.string,
                                                price : PropTypes.number,
})),
}

export default List3;