import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
