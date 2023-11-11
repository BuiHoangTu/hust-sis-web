const GENDERS = ["Nam", "Nữ", "Khác"];

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

const originalInfo = {}
for (const field_key in editableFields) {
    if (Object.prototype.hasOwnProperty.call(editableFields, field_key)) {
        originalInfo[field_key] = editableFields[field_key].innerText
    }
}

let currentInfo = {};

function storePrevEditing() {
    for (const field_key in editableFields) {
        if (Object.prototype.hasOwnProperty.call(editableFields, field_key)) {
            currentInfo[field_key] = editableFields[field_key].innerText
        }
    }
}

function restoreEditing() {
    editable = false;

    for (const field_key in editableFields) {
        if (Object.prototype.hasOwnProperty.call(editableFields, field_key)) {
            // console.log(`Restoring ${field_key} from ${editableFields[field_key].innerText} back to ${currentInfo[field_key]} `)
            editableFields[field_key].innerText = currentInfo[field_key]
            editableFields[field_key].contentEditable = "false"
        }
    }
    postEditActions.hidden = true;

    console.log(currentInfo)
}

function reset() {
    editable = false;

    for (const field_key in editableFields) {
        if (Object.prototype.hasOwnProperty.call(editableFields, field_key)) {
            // console.log(`Restoring ${field_key} from ${editableFields[field_key].innerText} back to ${originalInfo[field_key]} `)
            editableFields[field_key].innerText = originalInfo[field_key]
            editableFields[field_key].contentEditable = "false"
        }
    }
    postEditActions.hidden = true;

    console.log(originalInfo)
}

let editable = false;

function setEditFields() {
    if (editable) return;

    editable = !editable;
    storePrevEditing();

    // setting non text field
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
    label.id = "label-hoc"
    editableFields.tinhTrangHocTap.appendChild(checkbox)
    editableFields.tinhTrangHocTap.appendChild(label)

    // gioiTinh
    editableFields.gioiTinh.innerText = null;
    GENDERS.forEach((gender) => {
        const radio_btn = document.createElement("input")
        radio_btn.type = "radio";
        radio_btn.name = "gioiTinh";
        radio_btn.value = gender;
        radio_btn.id = "radio-btn-" + gender;

        const label = document.createElement("label");
        label.innerHTML = gender;
        label.id = "label-" + gender;

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

    //////////////// others
    setHiddenAndEditable(editable)
}


function save() {
    editable = false;

    ///////////////////////// parse non-text value
    // namVaoTruong
    const year = document.getElementById("numberbox-namVaoTruong");
    editableFields.namVaoTruong.innerText = year.value;
    year.remove();

    // tinhTrangHocTap
    const checkbox = document.getElementById("checkbox-hoc");
    document.getElementById("label-hoc").remove();
    editableFields.tinhTrangHocTap.innerText = checkbox.checked ? "Học" : "Nghỉ"
    checkbox.remove();

    // gioiTinh
    let selectedGender = document.querySelector('input[name="gioiTinh"]:checked');
    if (selectedGender) editableFields.gioiTinh.innerText = selectedGender.value;
    else editableFields.gioiTinh.innerText = currentInfo.gioiTinh;
    // removing box
    GENDERS.forEach((gender) => {
        document.getElementById("radio-btn-" + gender)?.remove()
        document.getElementById("label-" + gender)?.remove();
    })

    // khoaHoc
    const khoa = document.getElementById("numberbox-khoaHoc");
    editableFields.khoaHoc.innerText = khoa.value;
    khoa.remove();

    /////////////////// others
    setHiddenAndEditable(editable)

    console.log("New info: ")
    storePrevEditing()
    console.log(currentInfo)
}

function setHiddenAndEditable(isEditable) {
    editableFields.hoVaTen.contentEditable = isEditable;
    editableFields.bacDaoTao.contentEditable = isEditable;
    editableFields.chuongTrinh.contentEditable = isEditable;
    editableFields.khoaQuanLy.contentEditable = isEditable;
    editableFields.lop.contentEditable = isEditable;
    editableFields.email.contentEditable = isEditable;

    postEditActions.hidden = !isEditable;
}