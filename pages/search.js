import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import { useRouter } from "next/router";
import Response from "../Response";
import SearchResult from "../components/SearchResult";
function Search({ results }) {

  const router = useRouter();


  return (
    <div>
      <Head>
        <title>{`${router.query.term} -  Google Search`}</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <SearchHeader />
      <SearchResult results ={results} />
    </div>
  );
}

export default Search;
export async function getServerSideProps(context) {
  const useDummyData = false;
  
  const startIndex = context.query.start || '0';

  const data = useDummyData
    ? Response
    : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}
  `).then((res) => res.json());

  return {
    props: {
      results: data,
  
    },
  };
}