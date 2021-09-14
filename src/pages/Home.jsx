import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Home Page</title>
        <link rel="canonical" href="http://mysite.com/home" />
        <meta name="description" content="This is a descripition of the about page"/>
      </Helmet>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
