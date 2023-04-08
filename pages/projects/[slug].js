import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchData } from "@/helpers";
import Article from "@/components/ProjectDetail/article";
import Recommendation from "@/components/ProjectDetail/recommendation";

export default function Project(props) {
  return (
    <>
      <Navbar />
      <main>
        <Article props={props} />
        <hr className="line" />
        <Recommendation />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const paths = await fetchData({
    url: "api/projects/path",
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const response = await fetchData({
    url: `api/projects/${slug}`,
  });
  return {
    props: response,
  };
}
