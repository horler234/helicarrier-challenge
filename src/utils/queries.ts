import { gql } from "@apollo/client";

// get user auth state
export const FETCH_CRUSHES = gql`
  query FetchCrushes {
    crushes {
      id
      name
      country
      dateAdded
    }
  }
`;
