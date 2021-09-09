import NewsItem from './Item';
import { Story } from '../../store/newStories/newStoriesSlice';

interface NewsListProps {
  storiesStatus: 'loading' | 'success' | 'error';
  storiesList: Story[];
}

const NewsList = ({
  storiesStatus,
  storiesList,
}: NewsListProps): JSX.Element => (
  <div>
    {storiesStatus === 'success'
      ? storiesList.map((item) => <NewsItem key={item.id} story={item} />)
      : null}
  </div>
);

export default NewsList;
