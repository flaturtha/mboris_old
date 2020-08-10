import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
    
      <SEO
        title="M. Boris &mdash; cosmic horror fiction author"
        keywords={[`monsters`, `Col. Krill`]}
      />

    </Layout>
  );
}

export default IndexPage;
