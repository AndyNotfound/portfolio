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
      excerpt: pageDesc,
      keyword: pageKey = "Gohand Silitonga, Website, Application, Creative",
      coverImage,
    },
    slug,
  } = article;

  const pageTitle = capitalizeFirstLetter(fullTitle.toLowerCase());
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta property="title" content={pageTitle} />
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={pageDesc} />
        <meta property="og:description" content={pageDesc} />
        <meta name="keywords" content={pageKey} />
        <meta property="og:image" content={coverImage} />
        <meta property="og:image:alt" content={`${fullTitle} Preview`} />
        <meta
          property="og:url"
          content={`https://gohand-silitonga.my.id/projects/${slug}`}
        />
        <meta property="og:site_name" content={fullTitle} />
        <meta property="og:type" content="website" />
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
  let currentId;
  const getArticle = () => {
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", slug + ".md"),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    currentId = frontmatter.id;
    return { frontmatter, slug, content };
  };

  const getRecommendation = (currentId) => {
    const files = fs.readdirSync(path.join(process.cwd(), "projects"));

    const recom = files
      .map((filename) => {
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
      })
      .filter(({ frontmatter }) => frontmatter.id !== currentId);

    const shuffledRecom = recom.sort(() => Math.random() - 0.5);
    return shuffledRecom.slice(0, 3);
  };

  return {
    props: { article: getArticle(), recommendation: getRecommendation(currentId) },
  };
}
