import React from 'react';

const Finish = props => {
  const { user } = props;

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-4">
          <img src={user.avatar} width="100%" alt="" />
        </div>
        <div className="col-8 d-flex align-items-center">
          <h4>
            {user.firstname} {user.lastname}
          </h4>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Mobile:</strong> {user.mobile}
          </p>
          <p>
            <strong>Location:</strong> {user.country}, {user.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Finish;
