import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";

const progressBar = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 1,
});
Router.events.on("routeChangeStart", progressBar.start);
Router.events.on("routeChangeComplete", progressBar.finish);
Router.events.on("routeChangeError", progressBar.finish);
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
