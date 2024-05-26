import React from "react";

const PageTitle = ({ pageTitle }) => {
  return (
    <>
      <section
        className="page-title-section"
        style={{ backgroundColor: "#182b45" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ul className="list-inline custom-breadcrumb">
                <li className="list-inline-item">
                  <a
                    className="h2 text-primary font-secondary"
                    href="@@page-link"
                  >
                    {pageTitle}
                  </a>
                </li>
                <li className="list-inline-item text-white h3 font-secondary @@nasted"></li>
              </ul>
              <p className="text-lighten">Home / {pageTitle}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageTitle;
