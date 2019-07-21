import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ItemCard from '../item-card/item-card'
import Filter from '../filter/filter'
import { showItemsListAsyncAC } from '../../redux/actions/items-actions'
import connect from 'react-redux/es/connect/connect'

 const mapStateToProps = state => ({
   itemsList: state.showItemsListReducer.items
 })

const mapDispatchToProps = dispatch => ({
    showItemsList: items => dispatch(showItemsListAsyncAC(items))
})

 class App extends Component {

    // async componentDidMount() {
    //     const { showItemsList } = this.props;
    //     const response = await fetch('https://my-json-server.typicode.com/aero-frontend/test-task/PRODUCTS_SUCCESS', {
    //         method: 'GET',
    //         headers: {}
    //     });
    //     if (response.status) {
    //         const itemsList = await response.json();
    //         const items = itemsList.data.products
    //         showItemsList(items);
    //     }
    // }

     componentDidMount() {
        
     }

    render() {
        let { itemsList } = this.props;
        return (
            <div className='d-flex col-xl-10 main-block'>
                { itemsList.map(item => (
                    <ItemCard product={item} key={item.id}/>
                ))}
                <Filter/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)