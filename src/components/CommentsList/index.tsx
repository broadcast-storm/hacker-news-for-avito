/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  Comment,
  fetchAnswers,
} from '../../store/openedStory/openedStorySlice';
import { useStoreDispatch } from '../../store/hooks';

interface CommentsListProps {
  commentsStatus: 'loading' | 'success' | 'error';
  comments: Comment[];
}

const CommentsList = ({
  commentsStatus,
  comments,
}: CommentsListProps): JSX.Element => {
  const dispatch = useStoreDispatch();

  const makeDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
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
    <>
      {commentsStatus === 'success' && comments ? (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div className="flex" key={comment.id}>
              <div className="flex-shrink-0 mr-3" />
              <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                <strong>
                  {comment.deleted ? 'Комментарий удален' : comment.by}
                </strong>{' '}
                <span className="text-xs text-gray-400">
                  {makeDate(comment.time)}
                </span>
                <p className="text-sm">{comment.text}</p>
                <div className="mt-4 flex items-center">
                  {comment.kids ? (
                    <div
                      className="text-md text-gray-500 font-semibold cursor-pointer hover:text-blue-500"
                      onClick={() =>
                        dispatch(fetchAnswers({ commentId: comment.id }))
                      }
                    >
                      {comment.kids.length} ответов{' '}
                      {comment.answers &&
                      comment.answers.answersStatus === 'loading' ? (
                        <span>Загрузка...</span>
                      ) : null}
                    </div>
                  ) : null}
                </div>
                {comment.answers &&
                comment.answers.answersStatus === 'success' ? (
                  <div className="space-y-4">
                    {comment.answers.answersData.map((answer) => (
                      <div className="flex" key={answer.id}>
                        <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                          <strong>{answer.by}</strong>{' '}
                          <span className="text-xs text-gray-400">
                            {makeDate(answer.time)}
                          </span>
                          <p className="text-xs sm:text-sm">{answer.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default CommentsList;
