import React, { Component, PropTypes } from 'react';
import idgen from './idgen';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.renderTrigger = this.renderTrigger.bind(this);
  }

  componentDidMount() {
    $(this.refs[this.idx]).dropdown();
  }

  render() {
    const { children, ...props } = this.props;
    this.idx = 'dropdown_' + idgen();

    return (
      <span props>
        { this.renderTrigger() }
        <ul className='dropdown-content' id={ this.idx }>
          { children }
        </ul>
      </span>
    );
  }

  renderTrigger() {
    return React.cloneElement(
      this.props.trigger, {
        ref: this.idx,
        className: 'dropdown-button',
        'data-beloworigin': true,
        'data-activates': this.idx
      }
    );
  }
}

Dropdown.propTypes = {
  /**
   * The button to trigger the dropdown
   */
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node,
  /**
   * 	If true, the dropdown will show over the activator. Default: false
   */
  overorigin: PropTypes.bool
};

Dropdown.defaultProps = {
  overorigin: false
};

export default Dropdown;
