import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import CommingSoon from "../components/commingSoon"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CommingSoon />
  </Layout>
)

export default IndexPage
