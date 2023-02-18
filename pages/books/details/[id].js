import { BookAboutSection, BookHeaderSection, BookRecommendSection } from "@components";
import { Col, Row } from "react-bootstrap";
import { DATA } from "@mock";
const details = ({data}) => {

    return (
        <>
            <BookHeaderSection data={data}/>
            <Row>
                <Col md={8}>
                    <BookAboutSection data={data}/>
                </Col>
                <Col md={4}>
                    <BookRecommendSection data={data}/>
                </Col>
            </Row>
        </>

    );
}
export async function getStaticProps (context) {
    const {params} = context;
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