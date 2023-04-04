import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useRouter } from "next/router";

export default function Project() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Navbar />
      <main>
        <h1>{id}</h1>
      </main>
      <Footer />
    </>
  );
}
