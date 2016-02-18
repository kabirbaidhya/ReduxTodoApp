import React from 'react';
import filters from '../constants/filters';
import {setVisibility} from '../actions/actions';

class Filter extends React.Component {

    handleChange(e) {
        const {dispatch} = this.props;

        dispatch(setVisibility(e.target.value));
    }

    getFilterList() {
        var filterList = [];

        for(let name in filters) {
            filterList.push({value: filters[name], label: name});
        }

        return filterList;
    }

    render() {

        return (
            <div className="filter">
                <label>
                    Filter: {' '}
                    <select value={this.props.filter} onChange={this.handleChange.bind(this)}>
                        {this.getFilterList().map((item, index) =>
                            <option key={index} value={item.value}>{item.label}</option>
                        )}
                    </select>
                </label>
            </div>
        );
    }
}

export default Filter;
