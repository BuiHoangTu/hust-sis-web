/**
 * 
 * @param {string} valueType: textContent|value 
 */
function loadStudentInfo(valueType) {
    var studentInfoJSON = localStorage.getItem("studentInfo");

    if (studentInfoJSON) {
        // Chuyển đổi thành đối tượng JavaScript
        var studentInfo = JSON.parse(studentInfoJSON);
        document.getElementById('name')[valueType] = studentInfo.name;
        document.getElementById('year')[valueType] = parseInt(studentInfo.year);
        document.getElementById('level')[valueType] = studentInfo.level;
        document.getElementById('program')[valueType] = studentInfo.program;
        document.getElementById('faculty')[valueType] = studentInfo.faculty;
        document.getElementById('status')[valueType] = studentInfo.status;
        document.getElementById('gender')[valueType] = studentInfo.gender;
        document.getElementById('class')[valueType] = studentInfo.class;
        document.getElementById('course')[valueType] = parseInt(studentInfo.course);
        document.getElementById('email')[valueType] = studentInfo.email;

    }
}