// Higher Order Component (HOC) -> a component (HOC) that renders another component

import React from 'react';
import ReactDOM from 'react-dom';


//This is the first component we want to render
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);


//This is the second component we want to render and it renderer the first component wrapped
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} /> {/* Here we render a Info component by adding a AdminInfo props to Info props*/}
        </div>
    );
};


const AdminInfo = withAdminWarning(Info); //<- pass the first component as argument to the second component

//render AdminInfo and create a props for AdminInfo
ReactDOM.render(<AdminInfo isAdmin={true} info="This is the details" />, document.getElementById('app'));


/////// ANOTHER EXAMPLE 

// const requireAuthentication = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAutenticated ? (<WrappedComponent {...props} />) : (<p>Please login to view the info!</p>)}
//         </div>
//     );
// };

//const AuthInfo = requireAuthentication(Info);
//ReactDOM.render(<AuthInfo isAutenticated={true} info="This is the details" />, document.getElementById('app'));