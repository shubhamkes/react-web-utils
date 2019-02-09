/**
 * Modal wrapper 
 * Accepts various props such as isVisible(boolean), headerText, modalHeader, modalBody, modalFooter, closeModal(function)
 * To render header, either pass modalHeader component or header text
 * rest modalBody and modalFooter is optional
 * 
 * e.g. 
 * <ModalWrap 
 *    isVisible={isVisible}
 *    headerText="tesfh" 
 *    modalBody={() => (<h1> hudgdub</h1>)} 
 *    closeModal={() => this.setState({ isVisible: false })}
 * />
 */

import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IsUndefined } from 'common-js-util';
// import './modalWrapper.component.css';

export class ModalWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            modals: [] // Array maintained for opening multiple modals at the same time
        }
    }

    unsafe_componentwillreceiveprops(nextProps) {
        if (this.state.isVisible != nextProps.isVisible) {
            this.setState({ isVisible: nextProps.isVisible });
        }
    }

    openModal = ({ ...args }) => {
        let { modals } = this.state;
        args.isVisible = true;
        args.backdrop = !IsUndefined(args.backdrop) ? args.backdrop : true;
        var index = modals.push({ ...args })
        this.setState({ modals });
    }


    /**
     * @param  {object} modal
     * this method help us to close the modal when click outside of modal
     * this method will work according to value of variable: backdrop
     */
    toggle(modal, key) {
        const { modals } = this.state;
        modal.isVisible = !modal.isVisible;
        modals[key] = modal;
        this.setState({ modals });
    }

    closeModal = ({ key }) => {
        let { modals = [] } = this.state;
        if (typeof key == 'undefined' || typeof key == 'object' || key == null) {
            // key = modals.length;
            modals.pop();
        } else {
            modals.splice(key, 1);
        }

        this.setState({ modals });
    }


    render() {

        const { modals, size = 'lg' } = this.state;

        return (
            <div className="modals-wrapper">
                {
                    modals.map((modal, key) =>
                        <Modal key={key} size={size} toggle={() => this.toggle(modal, key)} isOpen={modal.isVisible}
                            className={modal.className} backdrop={modal.backdrop}>
                            {
                                modal.modalHeader ?
                                    <ModalHeader toggle={() => {
                                        console.log(modal, key);
                                        this.closeModal(modal, key)
                                    }}>{modal.modalHeader()}</ModalHeader>
                                    :
                                    modal.headerText ?
                                        <ModalHeader toggle={() => {
                                            this.closeModal(modal, key)


                                        }}>{modal.headerText}</ModalHeader>
                                        : null
                            }

                            {
                                modal.modalBody &&
                                modal.modalBody()
                            }

                            {
                                modal.modalFooter &&
                                <ModalFooter>
                                    {modal.modalFooter()}
                                </ModalFooter>
                            }
                        </Modal>
                    )
                }

            </div>
        )
    }
}
