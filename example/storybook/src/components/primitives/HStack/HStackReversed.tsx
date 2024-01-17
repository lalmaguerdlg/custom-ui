import { HStack } from '@occ-ui/components';
import { Box } from '@occ-ui/components';
import React from 'react';

const HStackReversed = ({ space, ...props }: any) => {
  return (
    <HStack space={space} mt="$5" {...props} reversed>
      <Box sx={{ w: 100, h: 100, bg: '$blue300' }} />
      <Box sx={{ w: 100, h: 100, bg: '$blue400' }} />
      <Box sx={{ w: 100, h: 100, bg: '$blue500' }} />
      <Box sx={{ w: 100, h: 100, bg: '$blue600' }} />
    </HStack>
  );
};

HStackReversed.description =
  'This is a basic HStack component example. HStack is a primitive component to layout its children horizontally.';

export default HStackReversed;
