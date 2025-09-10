import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Queries } from "../../api";
import { ROUTES } from "../../constants";
import { Breadcrumbs, SocialLinks } from "../../coreComponents";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: WebSettingData } = Queries.useGetWebSetting();
  const WebSetting = WebSettingData?.data;

  const { data: Blog } = Queries.useGetBlogDetail(id ?? "");
  const BlogDetailsData = Blog?.data;
  return (
    <Fragment>
      <Breadcrumbs mainTitle={BlogDetailsData?.title ?? "Blog Details"} parent="Blog" parentLink={ROUTES.BLOG.BLOG} />
      <section className="blog-details-ss pt-130 pb-80">
        <div className="container">
          {/*=== Blog Details Wrapper ===*/}
          <div className="blog-details-wrapper">
            <div className="row">
              <div className="col-xl-12">
                {/*=== Blog Post Main ===*/}
                <div className="blog-post-main mb-70">
                  <div className="blog-post-item">
                    <div className="post-thumbnail">
                      <img src={BlogDetailsData?.blogImage} alt="Post Thumbnail" />
                    </div>
                    <div className="post-content" data-aos="fade-up" data-aos-duration={800} >
                      <div dangerouslySetInnerHTML={{ __html: BlogDetailsData?.description || "" }} />
                    </div>
                  </div>
                  <div className="entry-footer">
                    <div className="tag-links">
                      <span>Tag:</span>
                      <a href="#">{BlogDetailsData?.tag}</a>
                    </div>
                    <div className="social-share">
                      <span>Share:</span>
                      <SocialLinks socialMedia={WebSetting?.socialMedia} variant="inline" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BlogDetails;
