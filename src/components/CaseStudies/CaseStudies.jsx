import React from "react";
import Keywords from "../../Pages/Keywords/Keywords";
import CTAAction from "../../Pages/CTAAction/CTAAction";
import BlogArticle from "../../Pages/BlogArticle/BlogArticle";
import BlogSummery from "../../Pages/BlogSummery/BlogSummery";

const CaseStudies = () => {
  return (
    <>
      <BlogSummery />
      <BlogArticle />
      <Keywords />
      <CTAAction />
    </>
  );
};

export default CaseStudies;
