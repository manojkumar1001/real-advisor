/* @flow */

import * as React from 'react';
import { Flex } from '@rebass/grid/emotion';
import Head from 'next/head';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from '../controls/link';
import { Properties } from '../shared/Properties';

const style = {
  alignment: {
    maxWidth: 960,
    marginTop: 5,
    marginBottom: 16,
    width: '100%',
    padding: 16,
  },
  buttonAlignment: {
    maxWidth: 960,
    width: '100%',
    padding: 10,
  },
};

// const ResultPage = () => <Result></Result>

// const NULL_PROPERTY_ID =
//   'UHJvcGVydHk6MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAw';

// const PropertyP = nextQuery<pagesQuery, { propertyId: string }>(ctx => ({
//   query: graphql`
//     query pagesQuery($propertyId: ID!) {
//       property: node(id: $propertyId) {
//         ...Property_property
//       }
//     }
//   `,
//   variables: {
//     propertyId: ctx.query.propertyId || NULL_PROPERTY_ID,
//   },
//   cacheStrategy: 'cache-first',
// }))(ResultPage);

export default () => (
  <>
    <Head>
      <title>{'Home'}</title>
    </Head>

    <Flex justifyContent="center">
      <div style={style.buttonAlignment}>
        <Link href={{ pathname: '/property' }}>
          <Button
            to="/property"
            color="primary"
            variant="contained"
            css={{ marginTop: 24 }}
          >
            create new
          </Button>
        </Link>
      </div>
    </Flex>
    <Flex justifyContent="center">
      <Paper css={style.alignment}>
        <Properties />
      </Paper>
    </Flex>
  </>
);
