import { useEffect, useState } from 'react';
import LoaderText from '../../components/LoaderText';
import NewsList from '../../components/NewsList';
import RefreshButton from '../../components/RefreshButton';
import { useStoreDispatch, useStoreSelector } from '../../store/hooks';
import {
  fetchStories,
  fetchStoryIds,
} from '../../store/newStories/newStoriesSlice';

const MainPage = (): JSX.Element => {
  const dispatch = useStoreDispatch();
  const { storyIdsStatus, storiesStatus, storiesList } = useStoreSelector(
    (state) => state.newStories,
  );

  const [showingItems, setShowingItems] = useState({
    start: storiesList.length,
    end: storiesList.length + 4,
  });
  const [fetching, setFetching] = useState(storiesStatus !== 'success');
  const [refreshing, setRefreshing] = useState(false);

  const scrollHandler = (event: Event) => {
    const target = event.target as Document;
    if (
      target.documentElement.scrollHeight -
        (target.documentElement.scrollTop + window.innerHeight) <
      300
    )
      setFetching(true);
  };

  const refreshNews = () => {
    setShowingItems({
      start: 0,
      end: 4,
    });
    setRefreshing(true);
    setFetching(true);
    dispatch(fetchStoryIds());
  };

  useEffect(() => {
    const timeRefresh = setInterval(() => {
      refreshNews();
    }, 60000);
    document.addEventListener('scroll', scrollHandler);
    if (storyIdsStatus !== 'success') dispatch(fetchStoryIds());
    return () => {
      document.removeEventListener('scroll', scrollHandler);
      clearInterval(timeRefresh);
    };
  }, []);

  useEffect(() => {
    if (storyIdsStatus === 'success' && fetching && storiesList.length < 100) {
      dispatch(
        fetchStories({
          start: showingItems.start,
          end: showingItems.end,
          isRefreshing: refreshing,
        }),
      )
        .then(() => {
          setShowingItems((prev) => ({
            start: prev.end + 1,
            end: prev.end + 5,
          }));
        })
        .finally(() => {
          setFetching(false);
          setRefreshing(false);
        });
    }
  }, [storyIdsStatus, fetching]);

  return (
    <div className="lg:w-1/2 mx-auto">
      {storiesStatus === 'loading' ? (
        <LoaderText text="Загрузка новостей" />
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h3 className=" text-lg font-semibold text-gray-900">
              Последние новости
            </h3>

            <RefreshButton onClick={refreshNews} />
          </div>
          <NewsList storiesStatus={storiesStatus} storiesList={storiesList} />
        </>
      )}
    </div>
  );
};

export default MainPage;
