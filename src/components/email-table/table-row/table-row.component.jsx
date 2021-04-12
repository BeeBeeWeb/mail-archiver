import React, { Fragment, useState } from 'react';

import { ReactComponent as RightArrowIcon } from '../../../assets/icon_arrow02.svg';
import { ReactComponent as MailSpIcon } from '../../../assets/icon_mail_sp.svg';
import { ReactComponent as AttachmentIcon } from '../../../assets/icon_clip.svg';

import './table-row.styles.scss';

const TableRow = ({ email, getIsSortedClass }) => {
    const [isOpen, setOpenState] = useState(false);

    const getFormattedDate = (date) => {
        const today = new Date();
        const emailDate = new Date(date);
        if (new Date(date).setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) {
            return emailDate.getHours() + ':' + emailDate.getMinutes()
        } else if (emailDate.getFullYear() === today.getFullYear()) {
            const formattedDate = date.toLocaleDateString('en-GB', { month: 'short', day: 'numeric' });
            return formattedDate.split(' ')[1] + ' ' + formattedDate.split(' ')[0];
        } else {
            return emailDate.getFullYear() + '/' + (emailDate.getMonth() + 1) + '/' + emailDate.getDate();
        }
    }

    return (
        <Fragment>
            <tr onClick={() => setOpenState(!isOpen)}>
                <td className="from-to-mobile-icon">
                    <MailSpIcon />
                </td>
                <td className={`from ${getIsSortedClass('from')}`}>
                    <div>{email.from}</div>
                </td>
                <td className="to">
                    <div>
                        {/* {email.to.toString().replaceAll(',', ', ')} */}
                        {email.to[0]}{email.to.length > 1 ? `, ... ` : ''}
                        {email.to.length > 1 ? <span className="to-count">+{email.to.length - 1}</span> : null}
                    </div>
                </td>
                <td className={`subject ${getIsSortedClass('subject')}`}>
                    <div>
                        <span>{email.subject}</span>
                        {email.attachments.length ? <AttachmentIcon /> : null}
                    </div>
                </td>
                <td className={`date ${getIsSortedClass('date')}`}>
                    <span>{getFormattedDate(new Date(email.date))}</span>
                    <RightArrowIcon />
                </td>
            </tr>
            <tr className={`${isOpen ? 'open' : ''}`}>
                <td className="email-td" colSpan="5">
                    <div className="email-body">
                        <div>
                            {email.body}
                            <br />
                            <br />
                            {email.attachments.map((att, i) => (
                                <div key={i} className="attachments">
                                    <AttachmentIcon style={{width: '15px'}} />
                                    <a href="#">{att}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </td>
            </tr>
        </Fragment>
    )
}

export default TableRow;