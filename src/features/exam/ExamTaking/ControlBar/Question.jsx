import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Question({ partId, seq, flag = true, id }) {
  const question = useSelector((store) => store.tackle.userChoice[id]);
  const type = question?.value ? 'fill' : 'unfill';
  const handleClick = async (e, path) => {
    e.preventDefault();
    document.getElementById(partId).click();
    const element = document.querySelector(path);
    const scrollor = () => {
      element.style.backgroundColor = 'rgba(40, 96, 225, 0.2)';

      window.scrollTo({
        top: element.offsetTop - 130,
      });
    };
    const unscrollor = () => {
      element.style.backgroundColor = '#fff';
    };
    setTimeout(scrollor, 300);
    setTimeout(unscrollor, 2000);
  };

  return (
    <Link
      to={`#question-${id}` ?? '#'}
      className={classNames(
        'w-8 h-7 rounded ring-[0.8px] flex items-center justify-center cursor-pointer hover:ring-[1.2px] relative hover:underline',
        {
          'bg-white ring-black text-t_dark hover:bg-ac_blue hover:ring-ac_blue hover:text-t_white': type === 'unfill',
          'bg-ac_blue/20 ring-ac_blue text-ac_blue': type === 'fill',
          'bg-ac_red/20 ring-ac_red text-ac_red': type === 'wrong',
          'bg-ac_green/20 ring-ac_green text-ac_green': type === 'correct',
        },
        {
          "before:content-[''] before:absolute before:-top-[0.8px] before:-right-[0.8px] before:border-t-8 before:border-r-8 before:border-t-ac_red before:border-r-transparent before:w-0 before:rotate-90 before:rounded":
            question?.flag === true,
        },
      )}
      onClick={(e) => handleClick(e, `#question-${id}`)}
    >
      <span className="font-normal text-h6 select-none">{question?.seq}</span>
    </Link>
  );
}

export default Question;
