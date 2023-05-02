import Footer from "../Footer";
import Navbar from "../Navbar";
import { useEffect, useRef } from "react";

export default function Layout({ children }) {
  const cursorRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    function handleMouseMove(event) {
      requestAnimationFrame(() => {
        var cursor_top = event.pageY - cursorRef.current.clientHeight / 2;
        var cursor_left = event.pageX - cursorRef.current.clientWidth / 2;
        var circle_top = event.pageY - circleRef.current.clientHeight / 2;
        var circle_left = event.pageX - circleRef.current.clientWidth / 2;

        // Check if cursorRef.current is outside the left boundary of the viewport
        if (cursor_left < 0) {
          cursor_left = 0;
          circle_left = cursorRef.current.clientWidth;
        }

        // Check if cursorRef.current is outside the right boundary of the viewport
        if (
          cursor_left >
          window.innerWidth - cursorRef.current.clientWidth - 20
        ) {
          cursor_left = window.innerWidth - cursorRef.current.clientWidth * 2;
          circle_left =
            cursor_left +
            cursorRef.current.clientWidth -
            circleRef.current.clientWidth -
            10;
        }

        // Check if circleRef.current is outside the left boundary of the viewport
        if (circle_left < 0) {
          circle_left = 0;
        }

        // Check if circleRef.current is outside the right boundary of the viewport
        if (circle_left > window.innerWidth - circleRef.current.clientWidth) {
          circle_left = window.innerWidth - circleRef.current.clientWidth;
        }

        cursorRef.current.style.top = cursor_top + "px";
        cursorRef.current.style.left = cursor_left + "px";
        circleRef.current.style.top = circle_top + "px";
        circleRef.current.style.left = circle_left + "px";
      });
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="circle" ref={circleRef}></div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
