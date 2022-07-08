import { gql } from "@apollo/client";

// get user auth state
export const FETCH_CRUSHES = gql`
  query FetchCrushes($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;
