import { addParameters } from '@storybook/client-api';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { config } from '@occ-ui/config';
import { Center, GluestackUIProvider } from '@occ-ui/components';
import gstheme from './gstheme';
import { themes } from '@storybook/theming';
import { useDarkMode } from '../src/hooks/useDarkMode';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: '',
      order: [
        'Overview',
        ['Introduction'],
        'Design Tokens',
        [
          'Colors',
          'Typography',
          'Space',
          'Opacity',
          'Breakpoints',
          'Borders',
          'Radii',
          'Shadows',
        ],
        'components',
        ['PRIMITIVES', 'COMPOSITES', 'CUSTOM'],
      ],
    },
  },
  docs: {
    theme: gstheme,
    inlineStories: false,
    container: ({ children, context }) => {
      return <DocsContainer context={context}>{children}</DocsContainer>;
    },
  },
  darkMode: {
    current: 'light',
    light: {
      ...themes.light,
      brandTitle: 'Gluestack Design System',
      brandUrl: '/',
      brandImage: '/images/logo-light.png',
    },
    dark: {
      ...themes.dark,
      brandTitle: 'Gluestack Design System',
      brandUrl: '/',
      brandImage: '/images/logo-dark.png',
    },
  },
};

export const decorators = [
  (Story) => {
    const colorMode = useDarkMode();
    function getColorMode() {
      return colorMode ? 'dark' : 'light';
    }
    return (
      <GluestackUIProvider config={config} colorMode={getColorMode()}>
        <Center>
          <Story />
        </Center>
      </GluestackUIProvider>
    );
  },
];
