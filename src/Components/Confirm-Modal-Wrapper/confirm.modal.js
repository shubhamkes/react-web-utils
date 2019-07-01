import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import './confirm.modal.css';

export class ConfirmModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            message: '',
            input: []
        }
    }

    confirmModal({ message, callback, title = '', input = [], template, isEmpty }) {
        this.setState({ isVisible: true, message, callback, title, input, template, isEmpty });
    }

    confirm = (callback) => {
        this.setState({ isVisible: false });
        callback();
    }

    toggle = () => {
        this.setState({ isVisible: !this.state.isVisible });
    }

    closeModal = () => {
        this.setState({ isVisible: false })
    }

    modalData = ({ message, callback, input, template, isEmpty }) => {
        return (
            <div className="confirm-modal">
                <div className="card confirm-text">
                    <div className="card-body confirm-content">
                        <div className={template ? 'header' : ''}>{message ? message : ''}</div>
                        <div> {template ? template : ''}</div>
                    </div>
                </div>
                {/* <div className="modal-body">
                    <p>
                        {message}
                    </p>
                </div>
                
                {
                    input.map((column, key) => {
                        return (<div className='box'>{column.display_name}
                            <input type='text' className="text-box" value={column.value} placeholder={column.placeholder}
                                onChange={e => {
                                    input[key].value = e.target.value;
                                    this.setState({ input });
                                }}
                            />
                        </div>
                        )
                    })
                } */}
                {/* <div className="modal-footer curved-bottom">
                    <div className="action-button">
                        <button className="btn btn-secondary" onClick={(e) => this.closeModal()}>Cancel</button>
                        <button className="btn btn-danger" onClick={(e) => this.confirm(callback(input))}>Confirm</button>
                    </div>
                </div> */}
                <div className="modal-footer confirm-footer">
                    <button className="btn btn-sm btn-secondary" onClick={(e) => this.closeModal()}>Cancel</button>
                    <button disabled={isEmpty} className="btn btn-sm btn-success" onClick={(e) => this.confirm(callback)}>Confirm</button>
                </div>
            </div>
        )
    }

    render() {
        const { isVisible, input, title, template, isEmpty } = this.state;
        return (
            <div className="modal-block">
                <Modal size={template ? "xl" : "md"} isOpen={isVisible} toggle={this.toggleModal} className="form-settings-modal">
                    <ModalHeader toggle={this.toggleModal}>
                        {title || 'Confirm'}
                    </ModalHeader>
                    <ModalBody className="confirm">
                        {this.modalData({ message: this.state.message, callback: this.state.callback, input, template, isEmpty })}
                    </ModalBody>
                </Modal>
                {/* <ModalWrapper
                    size='md'
                    isVisible={isVisible}
                    modalBody={<this.modalData message={this.state.message} callback={this.state.callback} />}
                    // modalBody={() => this.modalData({ message: this.state.message, callback: this.state.callback })}
                    headerText="Confirm"
                /> */}
            </div>
        )
    }
}
