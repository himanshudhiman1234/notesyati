import React from 'react'

const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <div>
            <main>{children}</main>
        </div>
    </React.Fragment>
    );
};
export default Layout;