import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ALL_ITEMS_QUERY } from "./Items";
import styled from "styled-components";

const DeleteButton = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

export default class DeleteItem extends Component {
  update = (cache, payload) => {
    // manually update the cache on the client, so it matches the server
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
    data.items = data.items.filter(
      (item) => item.id !== payload.data.deleteItem.id
    );
    cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_ITEM_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteItem, { error }) => (
          <DeleteButton
            onClick={() => {
              if (confirm("Are you sure you want to delete this item?")) {
                deleteItem().catch((err) => {
                  alert(err.message);
                });
              }
            }}
          >
            {this.props.children}
          </DeleteButton>
        )}
      </Mutation>
    );
  }
}
