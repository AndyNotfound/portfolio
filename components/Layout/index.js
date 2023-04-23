import Footer from "../Footer";
import Navbar from "../Navbar";
import { useEffect } from "react";

export default function Layout({ children }) {
  useEffect(() => {
    function handleMouseMove(event) {
      requestAnimationFrame(() => {
        const cursor = document.getElementById("cursor");
        const circle = document.getElementById("circle");
        var cursor_top = event.pageY - cursor.clientHeight / 2;
        var cursor_left = event.pageX - cursor.clientWidth / 2;
        var circle_top = event.pageY - circle.clientHeight / 2;
        var circle_left = event.pageX - circle.clientWidth / 2;

        // Check if cursor is outside the left boundary of the viewport
        if (cursor_left < 0) {
          cursor_left = 0;
          circle_left = cursor.clientWidth;
        }

        // Check if cursor is outside the right boundary of the viewport
        if (cursor_left > window.innerWidth - cursor.clientWidth - 20) {
          cursor_left = window.innerWidth - cursor.clientWidth * 2;
          circle_left =
            cursor_left + cursor.clientWidth - circle.clientWidth - 10;
        }

        // Check if circle is outside the left boundary of the viewport
        if (circle_left < 0) {
          circle_left = 0;
        }

        // Check if circle is outside the right boundary of the viewport
        if (circle_left > window.innerWidth - circle.clientWidth) {
          circle_left = window.innerWidth - circle.clientWidth;
        }

        cursor.style.top = cursor_top + "px";
        cursor.style.left = cursor_left + "px";
        circle.style.top = circle_top + "px";
        circle.style.left = circle_left + "px";
      });
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div id="cursor" className="cursor"></div>
      <div id="circle" className="circle"></div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
