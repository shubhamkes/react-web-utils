import React, { Component } from 'react';
import './optionsModal.component.css';
import { ModalManager } from 'drivezy-web-utils/build/Utils/modal.utils';
export default class OptionsModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: this.props.options,
            description: this.props.description,
            selected: [],
            callback: this.props.callback,
            template: this.props.template,
        };
    }

    onSelecting(option) {
        const { selected } = this.state;
        let index = selected.indexOf(option);
        if (index === -1 && (option.isSelected == true)) {
            selected.push(option);
        } else {
            selected.splice(index, 1);
        }
        this.setState({ selected });
    }

    render() {
        const { options, isSelected, selected, callback, description, template } = this.state;
        return (
            <div className="list-options">
                {options.length > 0 ?
                    <div className="body-options">

                        <div className="description-block">
                            <div id="desc">{description}</div>

                            <div className="menu-options" >
                                {
                                    options.map((option, key) => {
                                        return (
                                            <div key={key} className={option.isSelected ? "card selected" : "card"} onClick={() => { option.isSelected = !option.isSelected; this.onSelecting(option) }}>
                                                {template(option)}
                                            </div>
                                        )
                                    })
                                }
                            </div>
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