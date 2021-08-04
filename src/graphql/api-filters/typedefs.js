import { gql } from 'apollo-server'

export const apiFiltersTypeDefs = gql`
  input ApiFiltersInput {
    _order: FilterOrder
    _sort: String
    _start: Int
    _limit: Int
  }

  enum FilterOrder {
    DESC
    ASC
  }
`
