import React from 'react';

const Profile = ({ name, job, address, image }) => {
  return (
    <div className="col-xl-6 col-lg-7 col-md-12">
      <div className="card profile-header">
        <div className="body">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="profile-image float-md-right">
                <img src={image} alt={name} />
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-12">
              <h4 className="m-t-0 m-b-0">
                <strong>{name.split(' ')[0]}</strong> {name.split(' ')[1]}
              </h4>
              <span className="job_post">{job}</span>
              <p>{address}</p>
              <div>
                <button className="btn btn-primary btn-round">Follow</button>
                <button className="btn btn-primary btn-round btn-simple">Message</button>
              </div>
              <p className="social-icon m-t-5 m-b-0">
                <a title="Twitter" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a title="Facebook" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a title="Google-plus" href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a title="Behance" href="#">
                  <i className="fa fa-behance"></i>
                </a>
                <a title="Instagram" href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
