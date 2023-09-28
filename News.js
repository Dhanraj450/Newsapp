import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articals, setArticals] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [page, setPage] = useState([1]);
  const [totalResults, setTotalResults] = useState([0]);

  const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=86daf202e1b147d7990da2bc8191124f&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parseData = await data.json();
    props.setProgress(70);
    setArticals(parseData.articals);
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(
      props.category
    )} - TazaKhabar`;

    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=86daf202e1b147d7990da2bc8191124f&page=${
      page + 1
    }&pagesize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticals(articals.concat(parseData.articals));
    setTotalResults(parseData.totalResults);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "30px", marginTop: "90px" }}>
        TazaKhabar - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articals.length}
        next={fetchMoreData}
        hasMore={articals.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container bg-green">
          <div className="row">
            {articals.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : " "
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
            ;
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
