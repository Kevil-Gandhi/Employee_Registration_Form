let emp = {};

let valid_ecode = () => {
  let ecode = document.getElementById("emp_code").value;
  let ecode_error = document.getElementById("ecode_error");
  let ecode_RegExp = /^[EMP]{3}\d{6}$/;

  if (!ecode_RegExp.test(ecode)) {
    ecode_error.innerHTML = "In valid";
    ecode_error.classList.remove("success");
    ecode_error.classList.add("error");

    return false;
  } else {
    ecode_error.innerHTML = "Valid";
    ecode_error.classList.remove("error");
    ecode_error.classList.add("success");

    return true;
  }
};

let valid_ename = () => {
  let ename = document.getElementById("emp_name").value;
  let ename_error = document.getElementById("ename_error");
  let ename_RegExp = /^[a-zA-Z ]{3,}$/;

  if (!ename_RegExp.test(ename)) {
    ename_error.innerHTML = "In valid";
    ename_error.classList.remove("success");
    ename_error.classList.add("error");

    return false;
  } else {
    ename_error.innerHTML = "Valid";
    ename_error.classList.remove("error");
    ename_error.classList.add("success");

    return true;
  }
};

let valid_uname = () => {
  let uname = document.getElementById("emp_uname").value;
  let uname_error = document.getElementById("uname_error");
  let uname_RegExp = /^[a-zA-Z]{3,}[!@#$%^&*()_+]{1,}[a-zA-Z0-9]{0,}$/;

  if (!uname_RegExp.test(uname)) {
    uname_error.innerHTML = "In valid";
    uname_error.classList.remove("success");
    uname_error.classList.add("error");

    return false;
  } else {
    uname_error.innerHTML = "Valid";
    uname_error.classList.remove("error");
    uname_error.classList.add("success");

    return true;
  }
};

let valid_password = () => {
  let password = document.getElementById("emp_password").value;
  let pass_error = document.getElementById("pass_error");
  let pass_RegExp =
    /^[a-zA-Z]{1,}[!@#$%^&*()_+]{1}[a-zA-Z0-9!@#$%^&*()_+]{2,}$/;

  if (!pass_RegExp.test(password)) {
    pass_error.innerHTML = "In valid";
    pass_error.classList.remove("success");
    pass_error.classList.add("error");

    return false;
  } else {
    pass_error.innerHTML = "valid";
    pass_error.classList.remove("error");
    pass_error.classList.add("success");

    return true;
  }
};

let valid_mail = () => {
  let mail = document.getElementById("emp_mail").value;
  let mail_error = document.getElementById("mail_error");
  let mail_RegExp = /^[a-zA-Z0-9_-]{5,}@[a-zA-Z]{4,}\.[a-zA-Z]{2,}$/;

  if (!mail_RegExp.test(mail)) {
    mail_error.innerHTML = "In valid";
    mail_error.classList.remove("success");
    mail_error.classList.add("error");

    return false;
  } else {
    mail_error.innerHTML = "Valid";
    mail_error.classList.remove("error");
    mail_error.classList.add("success");

    return true;
  }
};

let valid_dept = () => {
  let dept = document.getElementById("department").value;
  let dept_error = document.getElementById("dept_error");

  if (dept == "") {
    dept_error.innerHTML = "Select Department";
    dept_error.classList.remove("success");
    dept_error.classList.add("error");

    return false;
  } else {
    dept_error.innerHTML = "Valid";
    dept_error.classList.remove("error");
    dept_error.classList.add("success");

    return true;
  }
};

let valid_mob = () => {
  let mob_no = document.getElementById("emp_mob").value;
  let mob_error = document.getElementById("mob_error");
  let mob_RegExp = /^[6-9]{1}[0-9]{9}$/;

  if (!mob_RegExp.test(mob_no)) {
    mob_error.innerHTML = "In valid";
    mob_error.classList.remove("success");
    mob_error.classList.add("error");

    return false;
  } else {
    mob_error.innerHTML = "Valid";
    mob_error.classList.remove("error");
    mob_error.classList.add("success");

    return true;
  }
};

let valid_sal = () => {
  let salary = document.getElementById("emp_sal").value;
  let sal_error = document.getElementById("sal_error");
  let sal_RegExp = /^[0-9]{5,}$/;

  if (!sal_RegExp.test(salary)) {
    sal_error.innerHTML = "In valid";
    sal_error.classList.remove("success");
    sal_error.classList.add("error");

    return false;
  } else {
    sal_error.innerHTML = "Valid";
    sal_error.classList.remove("error");
    sal_error.classList.add("success");

    return true;
  }
};

let valid_hra = () => {
  let hra = document.getElementById("emp_hra").value;
  let hra_error = document.getElementById("hra_error");
  let hra_RegExp = /^[0-9]{1,2}$/;

  if (!hra_RegExp.test(hra)) {
    hra_error.innerHTML = "In valid";
    hra_error.classList.remove("success");
    hra_error.classList.add("error");

    return false;
  } else {
    hra_error.innerHTML = "Valid";
    hra_error.classList.remove("error");
    hra_error.classList.add("success");

    return true;
  }
};

let cal_sal = () => {
  let grs_sal = document.getElementById("emp_grs_sal");
  let tax = document.getElementById("emp_tax");
  let net_sal = document.getElementById("emp_net_sal");
  let salary = document.getElementById("emp_sal").value;
  let hra = document.getElementById("emp_hra").value;

  salary = Number.parseInt(salary);
  hra = Number.parseInt(hra);

  if (valid_sal() && valid_hra()) {
    let g_sal = salary + (salary * hra) / 100;
    grs_sal.value = g_sal;

    if (g_sal < 100000) {
      tax.value = 10;
    } else if (g_sal >= 100000 && g_sal < 200000) {
      tax.value = 20;
    } else if (g_sal >= 200000) {
      tax.value = 30;
    } else {
      tax.value = 0;
    }

    net_sal.value = g_sal - (g_sal * tax.value) / 100;

    if (net_sal.value > 50000) {
      tax.style.color = "red";
    } else {
      tax.style.color = "green";
    }
  } else {
    grs_sal.value = "0";
    tax.value = "0";
    net_sal.value = "0";
  }
};

let validate_form = () => {
  let result = document.getElementById("result");

  valid_ecode();
  valid_ename();
  valid_uname();
  valid_password();
  valid_mail();
  valid_dept();
  valid_mob();
  valid_sal();
  valid_hra();

  if (
    valid_ecode() &&
    valid_ename() &&
    valid_uname() &&
    valid_password() &&
    valid_mail() &&
    valid_dept() &&
    valid_mob() &&
    valid_sal() &&
    valid_hra()
  ) {
    result.innerHTML = "All valid value";
    result.classList.remove("error");
    result.classList.add("success");

    return true;
  } else {
    result.innerHTML = "In valid value in form";
    result.classList.remove("success");
    result.classList.add("error");

    return false;
  }
};

let store_data = () => {
  if (validate_form()) {
    addRow(" ", " ");

    emp.emp_code = document.getElementById("emp_code").value;
    addRow("Employee Code", document.getElementById("emp_code").value);

    emp.emp_name = document.getElementById("emp_name").value;
    addRow("Employee Name", document.getElementById("emp_name").value);

    emp.emp_uname = document.getElementById("emp_uname").value;
    addRow("User Name", document.getElementById("emp_uname").value);

    emp.emp_password = document.getElementById("emp_password").value;
    addRow("Password", document.getElementById("emp_password").value);

    emp.emp_mail = document.getElementById("emp_mail").value;
    addRow("E-Mail", document.getElementById("emp_mail").value);

    emp.gender = document.querySelector("input[name=gender]:checked").value;
    addRow("Gender", emp.gender);

    emp.department = document.getElementById("department").value;
    addRow("Department", document.getElementById("department").value);

    emp.emp_mob = document.getElementById("emp_mob").value;
    addRow("Mobile No.", document.getElementById("emp_mob").value);

    emp.emp_sal = document.getElementById("emp_sal").value;
    addRow("Salary", document.getElementById("emp_sal").value);

    emp.emp_hra = document.getElementById("emp_hra").value;
    addRow("HRA", document.getElementById("emp_hra").value);

    emp.emp_grs_sal = document.getElementById("emp_grs_sal").value;
    addRow("Gross Salary", document.getElementById("emp_grs_sal").value);

    emp.emp_tax = document.getElementById("emp_tax").value;
    addRow("Tax", document.getElementById("emp_tax").value);

    emp.emp_net_sal = document.getElementById("emp_net_sal").value;
    addRow("Net Salary", document.getElementById("emp_net_sal").value);

    localStorage.setItem("emp", JSON.stringify(emp));
  } else {
    alert("First Enter Valid Data in Form");
  }
};

let display_data = () => {
  let dis_data = document.getElementById("dis_data");

  dis_data.style.display = "block";
};

function addRow(attribute, value) {
  var tbody = document.getElementById("tab_body");

  var newRow = document.createElement("tr");

  var attributeCell = document.createElement("td");
  var valueCell = document.createElement("td");

  attributeCell.textContent = attribute;
  valueCell.textContent = value;

  newRow.appendChild(attributeCell);
  newRow.appendChild(valueCell);

  tbody.appendChild(newRow);
}

let reset_form = () => {
  location.reload();
};

function populateForm(emp) {
  document.getElementById("emp_code").value = emp.emp_code;
  document.getElementById("emp_name").value = emp.emp_name;
  document.getElementById("emp_uname").value = emp.emp_uname;
  document.getElementById("emp_password").value = emp.emp_password;
  document.getElementById("emp_mail").value = emp.emp_mail;
  // document.getElementById(emp.gender).checked = true; // assuming emp.gender is either "male" or "female"
  document.getElementById("emp_mob").value = emp.emp_mob;
  document.getElementById("emp_sal").value = emp.emp_sal;
  document.getElementById("emp_hra").value = emp.emp_hra;
  document.getElementById("emp_grs_sal").value = emp.emp_grs_sal;
  document.getElementById("emp_tax").value = emp.emp_tax;
  document.getElementById("emp_net_sal").value = emp.emp_net_sal;
}

let show_store_data = document.getElementById("show_store_data");

show_store_data.addEventListener("change", function () {
  if (this.checked) {
    let storedEmp = localStorage.getItem("emp");
    if (storedEmp) {
      emp = JSON.parse(storedEmp);
      populateForm(emp);
    }
  } else {
    reset_form();
  }
});
