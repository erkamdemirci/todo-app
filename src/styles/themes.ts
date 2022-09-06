export interface ThemeProps {
  background: string;
  text: string;
  darkBorder: string;
  lightBorder: string;
}
export const darkTheme: ThemeProps = {
  background: 'var(--dark-background)',
  text: 'var(--dark-text)',
  darkBorder: 'var(--dark-border)',
  lightBorder: 'var(--light-border)'
};
export const lightTheme: ThemeProps = {
  background: 'var(--light-background)',
  text: 'var(--light-text)',
  darkBorder: 'var(--dark-border)',
  lightBorder: 'var(--light-border)'
};
