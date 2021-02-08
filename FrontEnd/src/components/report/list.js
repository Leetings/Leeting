import React from "react";
import { Link } from "react-router-dom";
import propTypes  from "prop-types";
import moment from 'moment';
import 'moment/locale/ko';
 
function List({ no, id, reportid, detail, date }) {

    var sYear = date.substring(2,4);
    var sMonth = date.substring(5,7);
    var sDate = date.substring(8,10);

    var dateformat = sYear + '.' + sMonth + '.' + sDate;
    return (
        <div className="content">
            <div className="id">{id}</div>
            <div className="reportid">
                <div className="b-title-box">
                    <Link
                        to={{
                            pathname: `detail/${no}`,
                            state: {
                                no, id, reportid, detail, date
                            }
                        }}
                    >
                        <span title="자세히 보기">{reportid+ " "}</span>
                    </Link>
                </div>
            </div>
            <div className="date">{dateformat}</div>
            
        </div>
            
    );
}

List.propTypes  = {
    no: propTypes.number.isRequired,
    id: propTypes.string.isRequired,
    reportid: propTypes.string.isRequired,
    detail: propTypes.string.isRequired,
    date: propTypes.string.isRequired
};

export default List;