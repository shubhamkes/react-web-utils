
// export class ConfirmUtils {
//     _currentGlobalLoader = null;
//     static RegisterConfirm(ref) {
//         this._currentGlobalLoader = ref;
//     }
//     static confirmModal({ message, callback }) {
//         if (this._currentGlobalLoader && this._currentGlobalLoader.confirmModal) {
//             this._currentGlobalLoader.confirmModal({ message, callback });
//         }
//     }
// }


module.exports.ConfirmUtils = class {
    _currentGlobalLoader = null;
    static RegisterConfirm(ref) {
        this._currentGlobalLoader = ref;
    }
    static confirmModal({ message, callback }) {
        if (this._currentGlobalLoader && this._currentGlobalLoader.confirmModal) {
            this._currentGlobalLoader.confirmModal({ message, callback });
        }
    }
}
