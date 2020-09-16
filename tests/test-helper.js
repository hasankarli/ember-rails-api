import Application from 'ember-rails-api/app';
import config from 'ember-rails-api/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
