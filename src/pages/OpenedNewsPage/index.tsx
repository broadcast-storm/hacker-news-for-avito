/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useStoreDispatch, useStoreSelector } from '../../store/hooks';
import {
  clearAll,
  fetchComments,
  fetchOpenedStory,
  refreshComments,
} from '../../store/openedStory/openedStorySlice';
import CommentsList from '../../components/CommentsList';
import RefreshButton from '../../components/RefreshButton';
import ArrowSvg from '../../icons/left-arrow.svg';
import LoaderText from '../../components/LoaderText';
import NotFound from '../NotFound';

interface RouteParams {
  id: string;
}

const OpenedNewsPage = (): JSX.Element => {
  const { id } = useParams<RouteParams>();
  const dispatch = useStoreDispatch();
  const { commentsStatus, storyStatus, storyData, comments } = useStoreSelector(
    (state) => state.openedStory,
  );

  const [showingComments, setShowingComments] = useState({ start: 0, end: 4 });
  const [fetching, setFetching] = useState(true);

  const scrollHandler = (event: Event) => {
    const target = event.target as Document;
    if (
      target.documentElement.scrollHeight -
        (target.documentElement.scrollTop + window.innerHeight) <
      200
    )
      setFetching(true);
  };

  const refreshCommentsFunc = () => {
    setFetching(false);
    setShowingComments({
      start: 0,
      end: 4,
    });
    dispatch(refreshComments(parseInt(id, 10)));
  };

  useEffect(() => {
    const timeRefresh = setInterval(() => {
      refreshCommentsFunc();
    }, 60000);
    document.addEventListener('scroll', scrollHandler);
    dispatch(fetchOpenedStory(parseInt(id, 10)));
    return () => {
      document.removeEventListener('scroll', scrollHandler);
      dispatch(clearAll());
      clearInterval(timeRefresh);
    };
  }, []);

  useEffect(() => {
    if (
      storyStatus === 'success' &&
      fetching &&
      storyData?.kids &&
      storyData.kids.length > comments.length
    ) {
      dispatch(
        fetchComments({
          start: showingComments.start,
          end: showingComments.end,
        }),
      )
        .then(() => {
          setShowingComments((prev) => ({
            start: prev.end + 1,
            end: prev.end + 5,
          }));
        })
        .finally(() => setFetching(false));
    }
  }, [storyStatus, fetching]);

  const makeDate = () => {
    const date = new Date(storyData!.time * 1000);
    const day = `0${date.getDate()}`;
    const month = `0${date.getMonth() + 1}`;
    const year = date.getFullYear();
    const hours = `0${date.getHours()}`;
    const minutes = `0${date.getMinutes()}`;
    const seconds = `0${date.getSeconds()}`;
    return `${day.substr(-2)}/${month.substr(-2)}/${year} ${hours.substr(
      -2,
    )}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
  };

  return (
    <div>
      {storyStatus === 'error' ? (
        <NotFound />
      ) : storyStatus === 'success' && storyData ? (
        <>
          <div className="max-w-4xl px-10 mx-auto my-4 py-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <span className="font-light text-gray-600">{makeDate()}</span>
              {storyData.url ? (
                <a
                  className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                  href={storyData.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ссылка на сайт
                </a>
              ) : (
                <span className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">
                  Нет ссылки
                </span>
              )}
            </div>
            <div className="mt-2">
              <p className="text-2xl text-gray-700 font-bold">
                {storyData.title}
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <NavLink
                className="text-blue-600 hover:underline flex justify-left items-center"
                to="/"
              >
                <img src={ArrowSvg} alt="" className="w-3 mr-1" />
                <span>К списку новостей</span>
              </NavLink>
              <div>
                <span className="flex items-center">
                  Автор:{' '}
                  <p className="text-gray-700 font-bold">{storyData.by}</p>
                </span>
              </div>
            </div>
          </div>
          {commentsStatus === 'loading' ? (
            <LoaderText text="Загрузка комментариев..." />
          ) : (
            <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-md px-10 py-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className=" text-lg font-semibold text-gray-900">
                  Комментарии ({storyData.kids ? storyData.kids.length : 0})
                </h3>

                <RefreshButton onClick={refreshCommentsFunc} />
              </div>
              <CommentsList
                commentsStatus={commentsStatus}
                comments={comments}
              />
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default OpenedNewsPage;
