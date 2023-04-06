import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function Project() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Navbar />
      <main>
        <h1>{slug}</h1>
      </main>
      <Footer />
    </>
  );
}
