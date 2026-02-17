import {
  AdaptivityProvider,
  AppRoot,
  ColorScheme,
  ConfigProvider,
  Panel,
  SizeType,
  View,
} from '@vkontakte/vkui';
import type * as React from 'react';

import Header from './shared/Header/Header';

type Props = {
  children: React.ReactNode;
};

const Main: React.FC<Props> = ({ children }) => (
  <ConfigProvider colorScheme={ColorScheme.LIGHT}>
    <AdaptivityProvider sizeX={SizeType.COMPACT}>
      <AppRoot>
        <View activePanel="main">
          <Panel id="main">
            <Header />
            <div className="container">{children}</div>
          </Panel>
        </View>
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>
);

export default Main;
