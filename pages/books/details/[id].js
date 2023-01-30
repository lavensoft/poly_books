import { BookAboutSection, BookHeaderSection, BookRecommendSection } from "@components";
import { Col, Row } from "react-bootstrap";
import { DATA } from "@mock";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
const details = ({data}) => {

    return (
        <>
            <BookHeaderSection data={data}/>
            <Row>
                <Col md={8}>
                    <BookAboutSection data={data}/>
                </Col>
                <Col md={4}>
                    <BookRecommendSection/>
                </Col>
            </Row>
        </>

    );
}
export async function getStaticProps (context) {
    const {params} = context;
    console.log(params);
    const {id} = params;
    const data =DATA.books.find(s=> s.id == id);
    return {
        props:{data:data}
    }
}
export async function getStaticPaths() {
    const data = DATA.books;
    const paths = data.map(post => {
      return {
        params: { id: `${post.id}` }
      }
    })
  
    return {
      paths: paths,
      fallback: true
    }
  }
  
  
export default details;