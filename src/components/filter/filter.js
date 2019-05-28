import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import connect from "react-redux/es/connect/connect"
import {showItemsListAC} from "../../redux/actions/items-actions"

const mapStateToProps = state => ({
    itemsList: state.showItemsListReducer.items
})

const mapDispatchToProps = dispatch => ({
    showItemsList: items => dispatch(showItemsListAC(items))
})

class Filter extends Component {
    state = {
        'Canon': false,
        'Fujifilm': false,
        'Nikon': false,
        'Panasonic': false,
        'Leica': false,
        'Olympus': false,
        'Pentax': false,
        'Sigma': false,
        'General Electrics': false,
        'Zenit': false
    }

    toggleFilter = (name) => {
        const newState = {...this.state}
        newState[name] = !this.state[name]
        this.setState(newState)
    }

    showFilterResults = async (names) => {

        let random = Math.round(Math.random());
        let url = '';
        if (random > 0.5) {
            url = 'https://my-json-server.typicode.com/aero-frontend/test-task/FILTER_SUCCESS'
        } else {
            url = 'https://my-json-server.typicode.com/aero-frontend/test-task/FILTER_FAIL';
        }

        let res = await fetch(`${url}`, {
            method: 'GET',
            headers: {}
        });
        const resJson = await res.json();
        const { showItemsList } = this.props;
        if (resJson.status === "FILTER_SUCCESS") {
            const filterResult = resJson.data.products;
            showItemsList(filterResult)
        } else if (resJson.status === "FILTER_FAIL") {
            const message = resJson.data.message;
            console.log('fail-message', message);
        }
    }

    render() {
        let filters = Object.keys(this.state);

        let columnedFilters = [];
        let filtersInRow = [];
        for (let i = 0; i < filters.length; i++) {
            let filterName = filters[i];
            let isNextRow = (i + 1) % 2 === 0;

            filtersInRow.push(
                <div key={i} className="col">
                    <label className="filter__checkbox-container">
                        {filterName}
                        <input
                            type="checkbox"
                            checked={this.state[filterName]}
                            onChange={() => this.toggleFilter(filterName)}
                        />
                        <span className="filter__checkbox-checkmark" />
                    </label>
                </div>
            );

            if (isNextRow) {
                columnedFilters.push(
                    <div key={i} className="row">
                        {filtersInRow}
                    </div>
                );

                filtersInRow = [];
            }
        }
        return <div className='filter'>
                <Button className='filter__button-show' onClick={() => this.showFilterResults(this.state)}> Показать результат </Button>
                <Button className='filter__button-clean'> Очистить фильтр </Button>

                <div className='filter__info'>
                    <div className=''> Производитель</div>
                    <div className='filter__checkbox-info'>
                        {columnedFilters}
                    </div>
                </div>
            </div>
    }
}

export default connect(
     mapStateToProps,
    mapDispatchToProps
)(Filter)