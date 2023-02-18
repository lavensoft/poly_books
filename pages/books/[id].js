import { ContentSection, FilterButton, ReadLayout } from "@components";
import { DATA } from "@mock";
import { ProgressBar } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const books = ({ data }) => {
  return (
    <>
      <ContentSection />
      <div className="row">
        <ProgressBar now={30} className={`col-11`} />
        <div className={`col-1`}>
          <button className="btn btn-default px-1"><BsChevronLeft/></button>
          2/11
          <button className="btn btn-default px-1"><BsChevronRight/></button>
        </div>
      </div>
    </>

  )
};
books.Layout = ReadLayout;
export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;
  const data = DATA.books.find(s => s.id == id);
  return {
    props: { data: data }
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
export default books;