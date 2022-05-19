import React from 'react';
import { connect } from 'react-redux';
import { setFilter, clearTodos } from '../actions';
import { FaTrashAlt } from "react-icons/fa";
import { FaSmileBeam } from "react-icons/fa";
import { FILTER_COMPLETED, FILTER_ALL, FILTER_ACTIVE } from '../constants/filters';

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFilter: (e) => dispatch(setFilter(e.target.value)),
        onClickClear: () => dispatch(clearTodos()),
    }
}

const Footer = ({filter, onChangeFilter, onClickClear}) => {
    return (
        <div className="footer">
            <select onChange={onChangeFilter} value={filter}>
                <option className="all" value={FILTER_ALL}>All Todo</option>
                <option className="active"  value={FILTER_ACTIVE}>Active</option>
                <option className="completed" value={FILTER_COMPLETED}>Completed</option>
            </select>
            <button className="clear" 
                onClick={onClickClear}
                >Clear All <FaTrashAlt/></button>
            <h6>Copyright © Quantrok1204 <FaSmileBeam/></h6>    
        </div>       
    );
}

export default connect(null, mapDispatchToProps)(Footer);

