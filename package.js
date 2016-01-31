Package.describe({
  name: 'clinical:active-layout-pagescreen-config',
  version: '0.0.3',
  summary: 'Default pagescreen configuration for ActiveLayout. For testing and debugging, mostly.',
  git: 'https://github.com/clinical-meteor/active-layout-pagescreen-config',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('clinical:active-layout@0.7.5');
  api.use('clinical:router@2.0.17');

  api.imply('clinical:active-layout');
  api.imply('clinical:router');

  api.addFiles('client/pagescreen-config.js', 'client');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:active-layout-pagescreen-config');
});
