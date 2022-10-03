import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { SupabaseStack } from '../src/supabase-stack';

const pjPrefix = 'Supabase';

test('Snapshot', () => {
  const app = new App();

  const noOption = new SupabaseStack(app, `${pjPrefix}-no-option`);
  const graphql = new SupabaseStack(app, `${pjPrefix}-graphql`, { gqlEnabled: true });

  expect(Template.fromStack(noOption)).toMatchSnapshot();
  expect(Template.fromStack(graphql)).toMatchSnapshot();
});