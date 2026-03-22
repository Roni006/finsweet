import singleBlog from '../../assets/images/single-blog.png'
const BlogArticle = () => {
  return (
    <>
      <section>
        <div className="max-w-[842px] mx-auto py-[90px]">
          <div>
            <h1 className="whowe-title">About the Project</h1>
            <p className="gblsw p-[12px_0_24px_0] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul className="list-disc pl-5">
              <li className="gblsw">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li className="gblsw">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </li>
              <li className="gblsw">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </li>
              <li className="gblsw">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
              </li>
            </ul>
            <img className="py-10" src={singleBlog} alt="single blog image" />
          </div>

          <div>
            <h1 className="whowe-title">How We Do It</h1>
            <p className="gblsw p-[12px_0_24px_0] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul className="list-disc pl-5">
              <li className="gblsw">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li className="gblsw">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </li>
              <li className="gblsw">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </li>
              <li className="gblsw">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArticle;
