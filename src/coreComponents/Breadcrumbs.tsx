import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import { BreadcrumbsProps } from "../types";

const Breadcrumbs: FC<BreadcrumbsProps> = ({ mainTitle, parent, parentLink }) => {
  return (
    <section className="page-hero-ss">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content text-center">
              <h1 className="page-title">{mainTitle}</h1>
              <ul className="breadcrumb-link">
                <li>
                  <Link to={ROUTES.HOME}>Home</Link>
                </li>
                {parent && (
                  <li>
                    <Link to={parentLink || ROUTES.HOME}>{parent}</Link>
                  </li>
                )}
                <li>{mainTitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
