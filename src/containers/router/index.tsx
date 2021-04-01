import React from 'react';
import { withRouter } from "react-router-dom";

const MainRouter = () => {
    const context: string = 'Context';
    return (
        <div className='main-container'>
            {context}
        </div>
    );
};

export default withRouter(MainRouter);
