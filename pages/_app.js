import 'tailwindcss/tailwind.css'
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import Header from '../components/Header';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp