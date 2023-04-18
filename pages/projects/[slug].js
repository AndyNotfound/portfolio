import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Article from "@/components/ProjectDetail/article";
import Recommendation from "@/components/ProjectDetail/recommendation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Project({ article, recommendation }) {
  return (
    <>
      <Navbar />
      <main>
        <Article props={article} />
        <hr className="line" />
        <Recommendation props={recommendation} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("projects"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const getArticle = () => {
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", slug + ".md"),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return { frontmatter, slug, content };
  };

  const getRecommendation = () => {
    const files = fs.readdirSync(path.join(process.cwd(), "projects"));

    const recom = files.map((filename) => {
      const slug = filename.replace(".md", "");

      const markdownWithMeta = fs.readFileSync(
        path.join(process.cwd(), "projects", filename),
        "utf-8"
      );

      const { data: frontmatter } = matter(markdownWithMeta);

      return {
        slug,
        frontmatter,
      };
    });

    const shuffledRecom = recom.sort(() => Math.random() - 0.5);
    return shuffledRecom.slice(0, 3);
  };

  return {
    props: { article: getArticle(), recommendation: getRecommendation() },
  };
}
