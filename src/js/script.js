document.getElementById('loadCssIcon').addEventListener('click', function() {
    // ʹ�� import ���� CSS
    import('./styles.css').then(() => {
        console.log('CSS �ļ�������ɣ�');
    }).catch(() => {
        console.error('���� CSS �ļ�ʧ�ܣ�');
    });
});