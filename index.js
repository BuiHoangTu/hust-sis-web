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
const postEditActions = document.getElementById("post-editing-action")

let currentInfo = {};

function storePrevEditing() {
    for (const field_key in editableFields) {
        if (Object.prototype.hasOwnProperty.call(editableFields, field_key)) {
            currentInfo[field_key] = editableFields[field_key].innerText
        }
    }
    console.log("Saving data")
    console.log(currentInfo)
}

function restoreEditing() {
    for (const field_key in editableFields) {
        if (Object.prototype.hasOwnProperty.call(editableFields, field_key)) {
             editableFields[field_key].innerText = currentInfo[field_key]
        }
    }
}

let editable = false;

function setEditFields() {
    if (editable) return;

    editable = !editable;

    // setting non text field
    do {
        storePrevEditing();
        // namVaoTruong
        editableFields.namVaoTruong.innerText = null;
        const year = document.createElement("input");
        year.type = "number";
        year.name = "namVaoTruong"
        year.value = currentInfo.namVaoTruong;
        year.id = "numberbox-namVaoTruong"
        editableFields.namVaoTruong.appendChild(year)

        // tinhTrangHocTap
        editableFields.tinhTrangHocTap.innerText = null;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "tinhTrangHocTap"
        checkbox.checked = currentInfo.tinhTrangHocTap === "Học"
        checkbox.id = "checkbox-hoc"
        const label = document.createElement("label");
        label.innerHTML = "Học";
        editableFields.tinhTrangHocTap.appendChild(checkbox)
        editableFields.tinhTrangHocTap.appendChild(label)

        // gioiTinh
        editableFields.gioiTinh.innerText = null;
        const genders = ["Nam", "Nữ", "Khác"];
        genders.forEach((gender) => {
            const radio_btn = document.createElement("input")
            radio_btn.type = "radio";
            radio_btn.name = "gioiTinh";
            radio_btn.value = gender;
            radio_btn.id = "radio-btn-" + gender;

            const label = document.createElement("label");
            label.innerHTML = gender;

            editableFields.gioiTinh.appendChild(radio_btn);
            editableFields.gioiTinh.appendChild(label);
        })

        // khoaHoc
        editableFields.khoaHoc.innerText = null;
        const khoa = document.createElement("input");
        khoa.type = "number";
        khoa.name = "khoaHoc"
        khoa.value = currentInfo.khoaHoc;
        khoa.id = "numberbox-khoaHoc"
        editableFields.khoaHoc.appendChild(khoa)
    } while (false);

    editableFields.hoVaTen.contentEditable = editable;
    editableFields.bacDaoTao.contentEditable = editable;
    editableFields.chuongTrinh.contentEditable = editable;
    editableFields.khoaQuanLy.contentEditable = editable;
    editableFields.lop.contentEditable = editable;
    editableFields.email.contentEditable = editable;

    postEditActions.hidden = !editable
}