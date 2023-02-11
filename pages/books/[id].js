import { ReadLayout } from "@components";
import { DATA } from "@mock";

const books = ({data}) => {
 console.log(data);
     return(
        <div>
            read books
        </div>
     )
};
books.Layout = ReadLayout;
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
export default books;