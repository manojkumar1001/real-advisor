/* @flow */
import * as React from 'react';
import { graphql } from 'react-relay';
import { nextQuery } from '../controls/relay';
import { Properties } from '../shared/Properties';

import type { resultQuery } from './__generated__/resultQuery.graphql';

const PropertyPage = props => <Properties property={props.data?.property} />;

const NULL_PROPERTY_ID =
  'UHJvcGVydHk6MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAw';

const PropertyP = nextQuery<resultQuery, { propertyId: string }>(ctx => ({
  query: graphql`
    query resultQuery($propertyId: ID!) {
      property: node(id: $propertyId) {
        ...Property_property
      }
    }
  `,
  variables: {
    propertyId: ctx.query.propertyId || NULL_PROPERTY_ID,
  },
  cacheStrategy: 'cache-first',
}))(PropertyPage);

export default PropertyP;
