import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import image from './item.jpg'
import cart from './cart.svg'
import scales from './scales-26.png'
import heart from './shape.svg'
import {addToFavAC} from "../../redux/actions/items-actions"
import connect from "react-redux/es/connect/connect"

// const mapStateToProps = state => ({
//     favs: state.showItemsListReducer.items
// })

const mapDispatchToProps = dispatch => ({
    addToFav: (id, status) => dispatch(addToFavAC(id, status))
})

 class ItemCard extends Component {

    addToFav = async (itemId) => {
        let random = Math.round(Math.random());
        let url = '';
        if (random > 0.5) {
            url = 'https://my-json-server.typicode.com/aero-frontend/test-task/FAVORITE_SUCCESS'
        } else {
            url = 'https://my-json-server.typicode.com/aero-frontend/test-task/FAVORITE_FAIL';
        }

        let res = await fetch(`${url}`, {
            method: 'GET',
            headers: {}
        });
        const resJson = await res.json();
        const { addToFav } = this.props;
        if (resJson.status === "FAVORITE_SUCCESS") {
            const favInfo = resJson.data.inFav;
              addToFav(itemId, favInfo);
        } else if (resJson.status === "FAVORITE_FAIL") {
            const message = resJson.data.message;
            console.log('fail-message', message);
        }
    }


    render() {
        let {product} = this.props;

        return <div className='item-card'>
                <div className='item-card__item-number'>Арт. {product.code} </div>
                <img src={image} className='item-card__item-picture'/>
                <div className='item-card__item-info'>
                    <div className='item_card__item-avail'>
                        <i className="fas fa-check"/> {product.availability && 'В наличии'} </div>
                    <div className='item-card__item-name'> {product.title} </div>
                    <div className='item-card__item-techs'>
                        {product.params.map(({name, value}) => (
                            <div>
                                <span>{name} </span>
                                <span className='item_card__item-value'>{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <Button className='item_card__button-purchase d-flex '>
                        <img src={cart} className='item-card__icon-purchase'/>
                        <div className='item-card__button-purchase_text'> Купить</div>
                    </Button>
                    <div className='d-flex item_card__icons mt-3'>
                        <img src={heart} className='item-card__fav mr-2' onClick={() => this.addToFav(product.id)}/>
                        <img src={scales} className='mr-3'/>
                    </div>
                </div>
            </div>
    }
}

export default connect(
  //  mapStateToProps,
    null,
    mapDispatchToProps
)(ItemCard)