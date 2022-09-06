import * as S from './styles';
import DarkThemeIcon from '../../assets/icons/dark-theme-icon';
import LightThemeIcon from '../../assets/icons/light-theme-icon';

interface ThemeTogglerProps {
  themeToggler: () => void;
}

function TogglerButton({ themeToggler }: ThemeTogglerProps) {
  return (
    <S.ButtonDiv className=" w-fit mx-auto rounded-full -mb-6 self-end">
      <button onClick={themeToggler} className="w-full h-full rounded-full p-3">
        {window.localStorage.getItem('theme') === 'dark' ? (
          <S.Icons>
            <DarkThemeIcon classes={'h-8 w-8'} />
          </S.Icons>
        ) : (
          <S.Icons>
            <LightThemeIcon classes={'h-8 w-8'} />
          </S.Icons>
        )}
      </button>
    </S.ButtonDiv>
  );
}
export default TogglerButton;
