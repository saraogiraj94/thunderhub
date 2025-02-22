/* eslint-disable */
import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetMessagesQueryVariables = Types.Exact<{
  initialize?: Types.Maybe<Types.Scalars['Boolean']>;
  lastMessage?: Types.Maybe<Types.Scalars['String']>;
}>;


export type GetMessagesQuery = { __typename?: 'Query', getMessages?: Types.Maybe<{ __typename?: 'getMessagesType', token?: Types.Maybe<string>, messages: Array<Types.Maybe<{ __typename?: 'messagesType', date: string, contentType?: Types.Maybe<string>, alias?: Types.Maybe<string>, message?: Types.Maybe<string>, id: string, sender?: Types.Maybe<string>, verified: boolean, tokens?: Types.Maybe<number> }>> }> };


export const GetMessagesDocument = gql`
    query GetMessages($initialize: Boolean, $lastMessage: String) {
  getMessages(initialize: $initialize, lastMessage: $lastMessage) {
    token
    messages {
      date
      contentType
      alias
      message
      id
      sender
      verified
      tokens
    }
  }
}
    `;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *      initialize: // value for 'initialize'
 *      lastMessage: // value for 'lastMessage'
 *   },
 * });
 */
export function useGetMessagesQuery(baseOptions?: Apollo.QueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
      }
export function useGetMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<typeof useGetMessagesLazyQuery>;
export type GetMessagesQueryResult = Apollo.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;