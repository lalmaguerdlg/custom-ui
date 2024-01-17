import React from 'react';
import {
  Center,
  Badge,
  BadgeText,
  BadgeIcon,
  Icon,
  Box,
  Text,
  VStack,
  HStack,
  SettingsIcon,
  Divider,
  AddIcon,
  Image,
  CheckIcon,
  Heading,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Button,
  ButtonText,
  Menu,
  MenuIcon,
  MenuItem,
  MenuItemLabel,
  GlobeIcon,
} from '@occ-ui/components';
import {
  PaintBucket,
  PuzzleIcon,
  BadgeCheckIcon,
  BadgePlusIcon,
} from 'lucide-react-native';
import { ComponentProps } from 'react';

type BadgeProps = ComponentProps<typeof Badge>;

const BadgeBasic = ({ text = 'NEW FEATURE', ..._props }: any) => {
  const [action, setAction] = React.useState<BadgeProps['action']>('error');

  return (
    <>
      <Button
        onPress={() =>
          setAction((old) => (old === 'error' ? 'warning' : 'error'))
        }
      >
        <ButtonText>Change Badge variant</ButtonText>
      </Button>
      <Badge action={action} gap="$1">
        <BadgeText>{text}</BadgeText>
        <BadgeIcon as={GlobeIcon} />
      </Badge>
    </>
  );
};

BadgeBasic.description =
  'This is a basic Badge component example. The badge component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.';

export default BadgeBasic;

export {
  Center,
  Badge,
  BadgeText,
  BadgeIcon,
  Icon,
  Box,
  Text,
  VStack,
  HStack,
  PuzzleIcon,
  SettingsIcon,
  AddIcon,
  PaintBucket,
  Divider,
  Image,
  CheckIcon,
  Heading,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Button,
  ButtonText,
  GlobeIcon,
  BadgeCheckIcon,
  Menu,
  MenuIcon,
  MenuItem,
  MenuItemLabel,
  BadgePlusIcon,
};
