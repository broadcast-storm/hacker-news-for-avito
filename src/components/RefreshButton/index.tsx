/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import RefreshSvg from '../../icons/refresh.svg';

interface RefreshButtonProps {
  onClick(): void;
}

const RefreshButton = ({ onClick }: RefreshButtonProps): JSX.Element => (
  <div
    className="group flex rounded border-b-2 border-grey-dark overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    <button
      className="block text-white text-sm shadow-border bg-blue-500 group-hover:bg-blue-800 text-sm py-2 px-3 font-sans tracking-wide uppercase font-bold"
      type="button"
    >
      Обновить
    </button>
    <div className="bg-blue-400 group-hover:bg-blue-800 shadow-border p-3">
      <div className="w-4 h-4">
        <img src={RefreshSvg} alt="" className="w-full" />
      </div>
    </div>
  </div>
);

export default RefreshButton;
