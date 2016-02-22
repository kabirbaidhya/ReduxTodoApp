import React from 'react';
import {connect} from 'react-redux';
import Component from './base/Component';
import filters from '../constants/filters';
import {setVisibility} from '../actions/actions';

class Filter extends Component {

    handleChange(e) {
        const {dispatch} = this.props;

        let filter = e.target.value;
        console.log(setVisibility);
        console.log(setVisibility({filter}));

        dispatch(setVisibility({filter}));
    }

    getFilterList() {
        var filterList = [];

        for(let name in filters) {
            filterList.push({value: filters[name], label: name});
        }

        return filterList;
    }

    render() {
        const {filter, freezed} = this.props;

        return (
            <div className="filter">
                <label>
                    Filter: {' '}
                    <select value={filter} onChange={this.handleChange.bind(this)} disabled={freezed}>
                        {this.getFilterList().map((item, index) =>
                            <option key={index} value={item.value}>{item.label}</option>
                        )}
                    </select>
                </label>
            </div>
        );
    }
}

export default connect()(Filter);
