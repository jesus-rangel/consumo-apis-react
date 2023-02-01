import TVShowListItem from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

const TVShowList = ({ tvShowList, onClickItem }) => (
  <div>
    <div className={s.title}> You'll probably like</div>
    <div>
      {tvShowList.map((tvShow) => {
        return (
          <span key={tvShow.id}>
            <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
          </span>
        );
      })}
    </div>
  </div>
);

export default TVShowList;
