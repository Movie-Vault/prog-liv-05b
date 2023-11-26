// import { useState, useEffect, useSelector } from 'react';

// const MoviesSearch = () => {
//     const [items, setItems] = useState();
//     const [filteredItems, setFilteredItems] = useState([]);
//     const search = useSelector(state => state.search);

//     useEffect(() => {
                
//     }, []);
//     useEffect(() => {
//         if (items) {
//             const searchedItems = items.filter(item => item.name.includes(search));
//             setFilteredItems(searchedItems);
//         }
//     }, [items, search])

//     return (
//         <div className="itemLists">
//             {filteredItems.map(item => (
//                 <div className="itemCard" key={item.id}>
//                     <img src={item.img} alt='clothes' />
//                     <div className="itemText">
//                         <h4>{item.brand}</h4>
//                         <p>{item.description}</p>
//                         <p>{item.color}</p>
//                         <h3><strong>${item.price}</strong></h3>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default MoviesSearch;
