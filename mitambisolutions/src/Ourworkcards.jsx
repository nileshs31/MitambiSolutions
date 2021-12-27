import React from 'react'

const Ourworkcards = ({ ourWorks }) => {
    return (
        <>
            {ourWorks.map((ourWork) => {
                return (
                    <>
                        <div className="card" style={{ 'width': '21rem', 'padding': '1rem', 'margin': 'auto' }} key={ourWork.id}>
                            <img className="card-img-top cardImg" src={ourWork.ImageLink} alt="" />
                            <div className={ourWork.ImageLink == "" ? "" : "fadingHr"} style={{ 'margin-top': '1rem', 'margin-bottom': '0' }}></div>
                            <div className="card-body">
                                <h4 className="card-title" style={{ 'font-weight': '600' }}>{ourWork.Title}</h4>
                                <div className="fadingHr"></div>
                                <p className="card-text"> {ourWork.Description}</p>
                            </div>
                        </div>
                    </>
                )
            })}

        </>
    )
}

export default Ourworkcards

