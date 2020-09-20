import React from 'react'
import {Link} from 'react-router-dom'
const NotFoundPage = () => (
    <div>
        Link1 - <Link to = "/create">Go page generater</Link>
        <br></br>
        Link2 - <Link to = "/">Go page dashboard</Link>
    </div>
);
export default NotFoundPage;