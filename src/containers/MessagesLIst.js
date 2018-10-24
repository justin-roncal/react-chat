import React, { Component, PropTypes } from "react";

const MessagesList = ({ message }) => (
  <section id="messages-list">
    <ul>
      {message.map(message => (
        <Messages key={messages.id} {...message} />
      ))}
    </ul>
  </section>
);

MessagesList.PropTypes = {
    messages.PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired
            author: PropTypes.string.isRequired
        })
    )
}