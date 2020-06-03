import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";
import styled from "styled-components";

const AddToCartButton = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

class AddToCart extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{
          id,
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(addToCart, { error, loading }) => (
          <AddToCartButton disabled={loading} onClick={addToCart}>
            Add{loading && "ing"} To Cart
          </AddToCartButton>
        )}
      </Mutation>
    );
  }
}
export default AddToCart;
