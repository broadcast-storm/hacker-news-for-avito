import { Link } from 'react-router-dom';
import { Story } from '../../../store/newStories/newStoriesSlice';

interface NewsItemProps {
  story: Story;
}

const NewsItem = ({ story }: NewsItemProps): JSX.Element => {
  const makeDate = () => {
    const date = new Date(story.time * 1000);
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
    <Link
      to={`${process.env.PUBLIC_URL}/${story.id}`}
      className="block group bg-white p-8 rounded-lg shadow-lg relative hover:shadow-2xl transition duration-500 my-4 cursor-pointer"
    >
      <h2 className="text-lg md:text-2xl text-gray-800 font-semibold mb-3 group-hover:text-blue-500">
        {story.title}
      </h2>
      <p>
        Рейтинг: <span className="font-bold">{story.score}</span>
      </p>
      <p className="leading-6 tracking-normal">
        Автор: <span className="font-bold">{story.by}</span>
      </p>
      <p className="text-gray-600 text-sm mt-2">Опубликовано: {makeDate()}</p>
    </Link>
  );
};

export default NewsItem;
