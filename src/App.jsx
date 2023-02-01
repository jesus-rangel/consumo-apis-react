// Shift + alt + f = Format document
import { useState, useEffect, useMemo, useCallback } from "react";
import { TVShowAPI } from "./api/tv-show";
// import logoImg from "./assets/images/logo.png";
import { BACKDROP_BASE_URL } from "./config";
import Logo from "./components/Logo/Logo";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import TVShowList from "./components/TVShowList/TVShowList";
import SearchBar from "./components/SearchBar/SearchBar";
import s from "./style.module.css";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  const [recommendationList, setRecommendationList] = useState([]);

  // Version normal
  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList && popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  // Version with useCallback function
  /* const fetchPopulars = useCallback(async () => {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }, [currentTVShow]); */

  // Version with useMemo function
  /* const fetchPopulars = useMemo(() => {
    return async () => {
      const popularTVShowList = await TVShowAPI.fetchPopulars();
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
      }
    };
  }, [currentTVShow]); */

  async function fetchByTitle(title) {
    const searchResponse = await TVShowAPI.fetchByTitle(title);
    if (searchResponse.length > 0) {
      setCurrentTVShow(searchResponse[0]);
    }
  }

  async function fetchRecommendations(tvShowId) {
    const recommendationListResp = await TVShowAPI.fetchRecommendations(
      tvShowId
    );
    if (recommendationListResp.length > 0) {
      setRecommendationList(recommendationListResp.slice(0, 10));
    }
  }

  function updateCurrentTVShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  console.log(currentTVShow);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover
        `
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              title="WatchShows"
              subtitle="Find a show you may like"
              image=""
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_shows}>
        {currentTVShow && (
          <TVShowList
            onClickItem={updateCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
