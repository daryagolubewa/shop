import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

export default class Filter extends Component {
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
                <Button className='filter__button-show'> Показать результат </Button>
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