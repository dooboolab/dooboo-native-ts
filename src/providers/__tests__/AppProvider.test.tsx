import * as React from 'react';

import { AppProvider, useAppContext } from '../AppProvider';
import { Button, Text, View } from 'react-native';
import { act, fireEvent, render } from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const FakeChild = () => {
  const { state, setUser, resetUser } = useAppContext();

  return (
    <View>
      <Text testID='TEXT'>{JSON.stringify(state, null, 2)}</Text>
      <Button
        testID='BUTTON'
        onPress={() => {
          resetUser();
        }}
        title='Button'
      />
    </View>
  );
};

describe('[AppProvider] rendering test', () => {
  let json: renderer.ReactTestRendererJSON;
  const component = (
    <AppProvider>
      <FakeChild />
    </AppProvider>
  );

  it('component and snapshot matches', () => {
    json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toBeTruthy();
  });
});

// TODO: add more interaction test, refer to ThemeProvider test
