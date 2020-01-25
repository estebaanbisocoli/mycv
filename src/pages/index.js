import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import Layout from "../components/layout"
import Linkdein from "../components/linkdin"
import  makeStyles from "@material-ui/core/styles"



const IndexPage = () => {
  return(
  <Layout>
    <div>
      <h4 style={{ color: "white" }}>Sitio en construcción</h4>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button href="https://www.linkedin.com/in/estebaanbisocoli" target="_blank" size="large" variant="outlined" style={{borderColor: "white"}} startIcon={<Linkdein></Linkdein>}><span style={{color: "white", textTransform: "none"}}>Esteban Bisocoli</span></Button>
      </div>
    </div>
  </Layout>
)}

export default IndexPage
