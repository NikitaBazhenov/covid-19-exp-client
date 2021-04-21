import { memo, ReactNode } from 'react';
import ThemeProvider from './ThemeProvider';
import QueryProvider from './QueryProvider';
import LocationProvider from './LocationProvider';
import ToggleCasesProvider from './ToggleCasesProvider';
import ToggleTotalProvider from './ToggleTotalProvider';
import TabsProvider from './TabsProvider';
import CountriesNumberProvider from './CountriesNumberProvider';
import TotalCasesProvider from './TotalCasesProvider';

interface IProps {
  children: ReactNode;
}

const compose = (providers: any[], children: ReactNode) =>
  providers.reduce((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);

function AppProvider({ children }: IProps) {
  return compose([
    ThemeProvider,
    QueryProvider,
    LocationProvider,
    ToggleCasesProvider,
    ToggleTotalProvider,
    TabsProvider,
    CountriesNumberProvider,
    TotalCasesProvider
  ], children);
}

export default memo(AppProvider);