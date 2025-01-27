import { composePlugins, withNx, withReact } from '@nx/rspack';
import { withModuleFederation } from '@nx/module-federation/rspack';
import { ModuleFederationConfig } from '@nx/module-federation';

import baseConfig from './module-federation.config';

const prodConfig: ModuleFederationConfig = {
  ...baseConfig,
  remotes: [['hub', 'http://localhost:4201/']],
};

export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig, { dts: false })
);
