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
            <h3 className="page-expense__title">{description}</h3>
            <span className="page-expense__sub-title">{moment(createdAt).format('DD/MM/YYYY')}</span>
        </div>
        <h3 className="page-expense__data">{numeral(amount / 100).format('$0,0.00')}</h3>
    </Link>
);

export default (ExpenseListItem); 