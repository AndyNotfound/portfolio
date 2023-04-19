import Article from "@/components/ProjectDetail/article";
import Recommendation from "@/components/ProjectDetail/recommendation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

export default function Project({ article, recommendation }) {
  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  const {
    frontmatter: {
      by: author,
      fullTitle,
      excerpt,
      keyword = "Gohand Silitonga, Website, Application, Creative",
    },
  } = article;

  return (
    <>
      <Head>
        <title>{capitalizeFirstLetter(fullTitle.toLowerCase())}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={excerpt} />
        <meta name="keywords" content={keyword} />
        <meta name="author" content={author} />
      </Head>
      <Article props={article} />
      <hr className="line" />
      <Recommendation props={recommendation} />
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
