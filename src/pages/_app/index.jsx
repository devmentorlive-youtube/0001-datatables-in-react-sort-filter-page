import "./globals.css";
import Page from "@/ui/page";

export default function App({ Component, pageProps }) {
  return (
    <Page id="TODO" videoId="TODO" title="TODO" description="TODO">
      <Component {...pageProps} />{" "}
    </Page>
  );
}
