import { View } from 'react-native';
import { useToken } from '@occ-ui/components';
import React from 'react';

export default function Example({ scale, token }: any) {
  const resolvedGreen = useToken(scale, token);
  return (
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: resolvedGreen,
      }}
    />
  );
}
