import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

numeral.register('locale', 'it', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
        ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '€'
    }
});
numeral.locale('it');

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <Link className="page-expense__item" to={`/edit/${id}`}>
        <div>
            <h3>{description}</h3>
            <p className="page-expense__data">{moment(createdAt).format('DD MMMM YYYY')}</p>
        </div>
        <p>{numeral(amount / 100).format('$0,0.00')}</p>
    </Link>
);

export default (ExpenseListItem); 