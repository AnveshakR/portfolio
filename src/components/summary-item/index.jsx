import { Link } from 'gatsby';
import React from 'react';
import '../../styles/global.css';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-heading pb-1',
  description: 'text-md font-light text-text whitespace-pre-line',
  table: 'w-full text-left', 
  td: 'text-text px-1 py-0.5',
};

const parseTable = (description) => {
  const rows = description.trim().split('\n');
  
  if (!rows.every(row => row.includes('|'))) return null; // Ensure it's a table format

  const tableData = rows.map(row => row.split('|').map(cell => cell.trim()));

  return (
    <table className={classes.table}>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex} className={classes.td}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const SummaryItem = ({ name, description, link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      {parseTable(description) || <p className={classes.description}>{description}</p>}
    </div>
  );
};

export default SummaryItem;
