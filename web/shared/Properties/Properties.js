import React from 'react';

import { graphql } from 'react-relay';
import { createQuery, createFragment } from '../../controls/relay';

import { Properties_property } from './__generated__/Properties_property.graphql';
import { PropertiesQuery } from './__generated__/PropertiesQuery.graphql';

const PropertyFragment =
  createFragment <
  Properties_property >
  graphql`
    fragment Properties_property on Property {
      id
      livingSurface
      landSurface
      numberOfRooms
      numberOfParkings
    }
  `;

const PropertiesQueryRenderer =
  createQuery <
  PropertiesQuery >
  graphql`
    query PropertiesQuery {
      properties {
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
        }
        totalCount
        edges {
          node {
            id
            createdAt
            numberOfRooms
            numberOfParkings
            landSurface
            livingSurface
          }
        }
      }
    }
  `;

export const Properties = () => {
  return (
    <PropertyFragment>
      {() => (
        <PropertiesQueryRenderer>
          {({ data }) => {
            <h1>{data}</h1>;
          }}
        </PropertiesQueryRenderer>
      )}
    </PropertyFragment>
  );
};
