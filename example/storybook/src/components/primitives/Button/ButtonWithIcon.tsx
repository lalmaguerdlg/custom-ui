import React from 'react';
import { AddIcon, InfoIcon, HStack } from '@occ-ui/components';
import { Button, ButtonIcon, ButtonText } from '@occ-ui/components';

const ButtonWithIcons = ({}) => {
  return (
    <HStack space="md">
      <Button gap="$2">
        <ButtonIcon as={InfoIcon} />
        <ButtonText>LeftIcon</ButtonText>
      </Button>
      <Button variant="solid" gap="$2">
        <ButtonText>RightIcon</ButtonText>
        <ButtonIcon as={AddIcon} />
      </Button>
    </HStack>
  );
};

ButtonWithIcons.description =
  'This is an example of a Button with icons.  A button is a component that users can tap to trigger an action.';

export default ButtonWithIcons;
