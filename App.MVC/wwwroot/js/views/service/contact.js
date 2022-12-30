import * as Modal from '../../view-components/modal.js';

$(function () {
    handleSubmitBtn()
})

function handleSubmitBtn() {
    $('.js-submit-btn').on('click', function () {
        Modal.layoutModal.resetStatus();
        Modal.layoutModal.setTitle('系統通知');
        Modal.layoutModal.setContent(['確認送出嗎？'])
        Modal.layoutModal.show();
    })
}