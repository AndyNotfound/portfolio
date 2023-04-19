import Image from "next/image";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <section className="notfound">
      <Image src="/assets/notfound.svg" width={600} height={600} alt="" />
      <div className="notfoundDetail">
        <h1 className="page-header">404 Not Found</h1>
        <Link href="/projects" className="primary-button">
          Find Projects
        </Link>
      </div>
    </section>
  );
}
