import React from 'react'

function Navbar() {
    return (
        <div>
            <div className="navBar">
                <div className="navBar-brand">
                    <img className="navBar-logo" src="data:image/png;base64,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" alt="logo" />
                    <span className="navBar-brandText">MY APPLICATION</span>
                </div>
                <div className="navBar-user">
                    <img className="navBar-logo navBar-logo-id" src="data:image/jpeg;base64,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" alt="image" />
                    <span className="navBar-brandText">Vishesh Hasoriya</span>
                </div>

            </div>
        </div>
    )
}

export default Navbar