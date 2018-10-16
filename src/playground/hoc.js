// Higher Order Component
// Reuse code 
// Prop hijacking
// Prop manipulation
// abstract state

import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
  <div>  
    <h1>Info</h1>
    <p>The Info is: {props.info}</p>
  </div>
);


// regular function
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
     { props.isAdmin && <p>This is private inof. Pleases don't share!!</p>}
     <WrappedComponent {...props}/>
    </div>
  );
};


// requireAnthentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props}/>
      ) : (
        <p>You are welcome everyDay here baby!!</p>
        )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);



// ReactDom.render(<AdminInfo isAdmin={true} info="this is the details" />, document.getElementById('app'));
ReactDom.render(<AuthInfo isAuthenticated={true} info="this is the details" />, document.getElementById('app'));
