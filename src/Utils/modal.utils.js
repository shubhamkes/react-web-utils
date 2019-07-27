import React, { Component } from 'react';
import InfoModal from './../Components/Info-Modal/infoModal.component';
import OptionsModal from './../Components/Generic-Options-Modal/optionsModal.component'

export class ModalManager {
    _currentGlobalLoader = null;
    static registerModal(ref) {
        this._currentGlobalLoader = ref;
    }
    static openModal({ ...args }) {
        if (this._currentGlobalLoader) {
            this._currentGlobalLoader.openModal({ ...args });
        }
    }
    static closeModal({ ...args }) {
        this._currentGlobalLoader.closeModal({ ...args });
    }
    static info({ description, headerText }) {
        ModalManager.openModal({
            headerText: headerText,
            modalBody: () => <InfoModal description={description} />
        })
    }

    /* Method for showing list of option and return selected one
    *  Three parameters
    *  descrption: text information, options:array of objects and a Callback method
    * */
    static getOption({ description, options, callback, field, template }) {
        ModalManager.openModal({
            headerText: "Choose an option",
            modalBody: () => <OptionsModal description={description} options={options} callback={callback} field={field} template={template} />
        })
    }
}

// const modalManager = new ModalManager();