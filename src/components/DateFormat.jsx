import React from 'react';

const DateFormat = ({ isoDate }) => {
    const date = new Date(isoDate);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return <span>{formattedDate}</span>;
};

export default DateFormat;