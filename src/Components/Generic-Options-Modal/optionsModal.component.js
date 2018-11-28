/**
 * Options modal component is used for showing various options and return back selected option;
 * It takes  3 arguments- description(String), options(Array of objects) and callback function as a props
 */
import React, { Component } from 'react';
import './optionsModal.component.css';
import { ModalManager } from 'drivezy-web-utils/build/Utils';
export default class OptionsModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: this.props.options,
            description: this.props.description,
            isSelected: '',
            selected: {},
            callback: this.props.callback
        };
    }

    onSelecting(option, key) {
        this.setState({ isSelected: key, selected: option });
    }

    render() {
        const { options, isSelected, selected, callback, description } = this.state;
        return (
            <div className="list-options">
                {options.length > 0 ?
                    <div className="body-options">
                        <p id="desc">{description}</p>
                        <div className="menu-options">
                            {
                                options.map((option, key) => {
                                    return (
                                        <div key={key} className={isSelected === key ? "card selected" : "card"} onClick={() => this.onSelecting(option, key)}>
                                            <i className={isSelected === key ? option.icon : `${option.icon} icon`} aria-hidden="true"></i>
                                            <p>{option.option}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="footer">
                            <button className="btn btn-primary btn-sm" onClick={() => ModalManager.closeModal()}>Cancel</button>
                            <button className="btn btn-success btn-sm" onClick={() => callback(selected)} >Submit</button>

                        </div>
                    </div>
                    : <p id="desc">Oops ! No options are available</p>}
            </div>
        );
    }
}