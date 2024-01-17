// gluestack-ui.config.ts
import { LinearGradient } from 'expo-linear-gradient';
import { createConfig } from '@occ-ui/components';
import { config as defaultConfig } from '@occ-ui/config';

export const config = createConfig({
  ...defaultConfig,
  components: {
    LinearGradient: {
      theme: {
        props: {
          // @ts-ignore
          as: LinearGradient,
        },
      },
    },
  },
});

// Get the type of Config
type ConfigType = typeof config;

// Extend the internal ui config
declare module '@occ-ui/components' {
  interface UIConfig extends ConfigType {}
}
