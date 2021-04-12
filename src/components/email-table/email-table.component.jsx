import React from 'react';

import { ReactComponent as SortArrowIcon } from '../../assets/icon_arrow01.svg';
import './email-table.styles.scss';
import TableRow from './table-row/table-row.component';

const TableHeaderLabels = {
    FROM: 'from',
    TO: 'to',
    SUBJECT: 'subject',
    DATE: 'date'
}

const EmailTable = ({ emails }) => {
    const { FROM, SUBJECT, DATE } = TableHeaderLabels;
    const [sortConfig, setSortConfig] = React.useState({ key: DATE, direction: 'asc' });
    
    const sortedEmails = React.useMemo(() => {
        let items = [...emails];
        
        items.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                if (sortConfig.key !== DATE) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                } else {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                if (sortConfig.key !== DATE) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                } else {
                    return sortConfig.direction === 'asc' ? -1 : 1;

                }
            }
            return 0;
        });

        return items;
    }, [emails, sortConfig, DATE]);


    const sortColumn = key => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    }

    const getDirectionClass = () => {
        return sortConfig.direction === 'asc' ? 'asc' : 'desc';
    }

    const getIsSortedClass = (columnKey) => {
        return columnKey === sortConfig.key ? 'sorted' : '';
    }

    return (
        <>
            <table className="emails">
                <thead>
                    <tr>
                        <th>
                            <div
                                className={`header-wrap ${getIsSortedClass(FROM)}`}
                                onClick={() => sortColumn(FROM)}>
                                <span className="header-label">From</span>
                                {sortConfig.key === FROM ?
                                    <SortArrowIcon className={getDirectionClass()} /> : null
                                }
                            </div>
                        </th>
                        <th>
                            <div>
                                <span className="header-label">To</span>
                            </div>
                        </th>
                        <th>
                            <div
                                className={`header-wrap ${getIsSortedClass(SUBJECT)}`}
                                onClick={() => sortColumn(SUBJECT)}>
                                <span className="header-label">Subject</span>
                                {sortConfig.key === SUBJECT ?
                                    <SortArrowIcon className={getDirectionClass()} /> : null
                                }
                            </div>
                        </th>
                        <th>
                            <div
                                className={`header-wrap ${getIsSortedClass(DATE)}`}
                                onClick={() => sortColumn(DATE)}>
                                <span className="header-label">Date</span>
                                {sortConfig.key === DATE ?
                                    <SortArrowIcon className={getDirectionClass()} /> : null
                                }
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedEmails.map(email => (
                        <TableRow key={email.id} email={email} getIsSortedClass={getIsSortedClass}/>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default EmailTable;