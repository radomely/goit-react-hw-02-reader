import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication';
import Counter from './Counter';
import styles from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = { pageNumber: 1 };

  handleIncrement = () => {
    this.setState(state => ({
      pageNumber: state.pageNumber + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(state => ({
      pageNumber: state.pageNumber - 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { pageNumber } = this.state;

    return (
      <div className={styles.reader}>
        <Publication
          title={items[pageNumber - 1].title}
          text={items[pageNumber - 1].text}
        />
        <Counter
          pageNumber={pageNumber}
          lastPage={items.length}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
