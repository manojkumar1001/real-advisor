/* @flow */

import React from 'react';
import { graphql } from 'react-relay';
import { Flex, Box } from '@rebass/grid/emotion';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from '../../controls/link';

import {
  type FragmentRefs,
  createFragment,
  createMutation,
} from '../../controls/relay';

import type { Property_property } from './__generated__/Property_property.graphql';
import type { PropertyUpsertMutation } from './__generated__/PropertyUpsertMutation.graphql';

type PropertyData = {|
  lead?: Property_property,
|};

const PropertyFragment = createFragment<PropertyData>(
  graphql`
    fragment Property_property on Property {
      id
      livingSurface
    }
  `
);

const PropertyUpsertLead = createMutation<PropertyUpsertMutation, {}>(graphql`
  mutation PropertyUpsertMutation($input: UpsertPropertyInput!) {
    upsertProperty(input: $input) {
      property {
        id
        livingSurface
        landSurface
        numberOfRooms
        numberOfParkings
      }
    }
  }
`);

const style = {
  alignment: {
    maxWidth: 900,
    marginTop: 16,
    width: '100%',
    padding: 16,
  },
  input: {
    margin: 10,
  },
};

type Props = {|
  ...FragmentRefs<PropertyData>,
  step?: string,
|};

export const Property = (props: Props) => {
  const property = {
    landSurface: 2,
    livingSurface: 2,
    numberOfRooms: 2,
    numberOfParkings: 2,
  };
  return (
    <>
      <Flex justifyContent="center">
        <div style={style.alignment}>
          <Link href={{ pathname: '/' }}>
            <Button
              to="/"
              color="primary"
              variant="contained"
              css={{ marginTop: 80 }}
            >
              Back to list
            </Button>
          </Link>
        </div>
      </Flex>
      <PropertyFragment property={props.property}>
        {() => (
          <Flex justifyContent="center">
            <Paper css={style.alignment}>
              <PropertyUpsertLead>
                {({ mutate }) => (
                  <>
                    <Box width={[1 / 2]}>
                      <TextField
                        id="living-surface"
                        label="Living Surface"
                        margin="normal"
                        variant="filled"
                        style={style.input}
                        onChange={e =>
                          (property.livingSurface = e.target.value)
                        }
                      />
                      <TextField
                        id="land-surface"
                        label="Land Surface"
                        margin="normal"
                        variant="filled"
                        style={style.input}
                        onChange={e => (property.landSurface = e.target.value)}
                      />
                      <TextField
                        id="number-of-rooms"
                        label="Number Of Rooms"
                        margin="normal"
                        variant="filled"
                        style={style.input}
                        onChange={e =>
                          (property.numberOfRooms = e.target.value)
                        }
                      />
                      <TextField
                        id="number-of-parkings "
                        label="Number Of Parkings"
                        margin="normal"
                        variant="filled"
                        style={style.input}
                        onChange={e =>
                          (property.numberOfParkings = e.target.value)
                        }
                      />
                    </Box>
                    <Link href={{ pathname: '/result' }}>
                      <Button
                        to="/"
                        color="primary"
                        variant="contained"
                        css={{ marginTop: 80, float: 'right' }}
                        onClick={() => mutate({ property })}
                      >
                        save
                      </Button>
                    </Link>
                  </>
                )}
              </PropertyUpsertLead>
            </Paper>
          </Flex>
        )}
      </PropertyFragment>
    </>
  );
};
