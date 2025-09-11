import { Fragment } from "react";
import { Queries } from "../../api";
import { FormatDate } from "../../utils/DateFormatted";
import { Link } from "react-router-dom";
import { useBasicTableFilterHelper } from "../../utils/hook";
import { Pagination } from "antd";
import { Href, ROUTES } from "../../constants";
import { Breadcrumbs } from "../../coreComponents";

const Blog = () => {
  const { pageNumber, pageSize, params, handlePaginationChange } = useBasicTableFilterHelper({
    initialParams: { page: 1, limit: 6 },
  });

  const { data: Blog } = Queries.useGetBlog(params);
  const All_Blog = Blog?.data;

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Blog" />
      <section className="blog-grid-page-ss pt-130 pb-130">
        <div className="container">
          <div className="row">
            {/*=== Blog Post Item ===*/}
            {All_Blog?.blog_data?.map((item, index) => (
              <div className="col-xl-4 col-md-6 col-sm-12" key={index}>
                <div className="blog-post-item style-three mb-30" data-aos="fade-up" data-aos-duration={1200}>
                  <div className="post-thumbnail">
                    <img src={item.thumbnailImage} alt="Blog Thumbnail" />
                  </div>
                  <div className="post-content">
                    <div className="post-meta style-one">
                      <span className="category">
                        <Link to={Href}>{item.tag}</Link>
                      </span>
                      <span className="date">
                        <Link to={Href}>{FormatDate(item?.createdAt)}</Link>
                      </span>
                    </div>
                    <h4 className="title">
                      <Link to={`${ROUTES.BLOG.BLOG_DETAILS}/${item._id}`}>{item.title}</Link>
                    </h4>
                    <p>{item.subtitle}</p>
                    <Link to={`${ROUTES.BLOG.BLOG_DETAILS}/${item._id}`} className="read-more style-one">
                      <span>
                        <i className="fas fa-plus" />
                        Read More
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="sasly-pagination text-center mt-30">
                <Pagination total={All_Blog?.totalData} pageSize={pageSize} current={pageNumber} align="center" onChange={handlePaginationChange} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Blog;
