import PropTypes from 'prop-types';

function List(props){

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // Alphabetical order
    // fruits.sort((a,b) => a.calories - b.calories); // Numerical order
    // const low_cal = fruits.filter(fruit => fruit.calories < 50); // Filter calories
    const items = props.items;
    const title = props.category;
    const listItems = items.map(item => <li key={item.id}> 
        {item.name}: {item.calories} 
        </li>);
    
    return(
        <>
            <h3>{title}</h3>
            <ol>{listItems}</ol>
        </>
    );
}

export default List