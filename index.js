const editableFields = {
    hoVaTen: document.getElementById("ho-va-ten"),
    namVaoTruong: document.getElementById("nam-vao-truong"),
    bacDaoTao: document.getElementById("bac-dao-tao"),
    chuongTrinh: document.getElementById("chuong-trinh"),
    khoaQuanLy: document.getElementById("khoa-quan-ly"),
    tinhTrangHocTap: document.getElementById("tinh-trang-hoc-tap"),
    gioiTinh: document.getElementById("gioi-tinh"),
    lop: document.getElementById("lop"),
    khoaHoc: document.getElementById("khoa-hoc"),
    email: document.getElementById("email"),
};

let currentInfo = {};

function storePrevEditing() {
    for (const field_key in editableFields) {
        if (Object.prototype.hasOwnProperty.call(editableFields, field_key)) {
            currentInfo[field_key] = editableFields[field_key]
        }
    }
}

let editable = false;
function setEditFields() {
    editable = !editable;
    for (const field_key in editableFields) {
        if (Object.prototype.hasOwnProperty.call(editableFields, field_key)) {
            if (! editableFields[field_key]) console.log(field_key + "is null")
            editableFields[field_key].contentEditable = editable;
            console.log(field_key + "is can edit: " + editable)
        }
    }
}