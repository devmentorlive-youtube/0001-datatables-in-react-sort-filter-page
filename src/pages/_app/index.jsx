import "./globals.css";
import Page from "@/ui/page";

export default function App({ Component, pageProps }) {
  return (
    <Page
      id="0001-datatables-in-react-sort-filter-page"
      videoId="TODO"
      title="React Datatables are Easy - Sort, Filter, and Page"
      description="In this lesson we build a datatable component from scratch and implement sorting, filtering, and paging the React way.">
      <Component {...pageProps} />
    </Page>
  );
}
