/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      totalAmount
      products {
        items {
          id
          productID
          orderID
          createdAt
          updatedAt
          user
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        totalAmount
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      image
      price
      featured
      orders {
        items {
          id
          productID
          orderID
          createdAt
          updatedAt
          user
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        price
        featured
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProductOrder = /* GraphQL */ `
  query GetProductOrder($id: ID!) {
    getProductOrder(id: $id) {
      id
      productID
      orderID
      product {
        id
        name
        description
        image
        price
        featured
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      order {
        id
        user
        date
        totalAmount
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      user
    }
  }
`;
export const listProductOrders = /* GraphQL */ `
  query ListProductOrders(
    $filter: ModelProductOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productID
        orderID
        product {
          id
          name
          description
          image
          price
          featured
          createdAt
          updatedAt
        }
        order {
          id
          user
          date
          totalAmount
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user
      }
      nextToken
    }
  }
`;
