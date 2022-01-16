/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProductOrder = /* GraphQL */ `
  subscription OnCreateProductOrder($user: String) {
    onCreateProductOrder(user: $user) {
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
export const onUpdateProductOrder = /* GraphQL */ `
  subscription OnUpdateProductOrder($user: String) {
    onUpdateProductOrder(user: $user) {
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
export const onDeleteProductOrder = /* GraphQL */ `
  subscription OnDeleteProductOrder($user: String) {
    onDeleteProductOrder(user: $user) {
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
