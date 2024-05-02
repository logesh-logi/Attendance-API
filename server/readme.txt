API ENDPOINTS:

GET Request:
/api/emp:
This route get details about all employees.

/api/attendance:
This route gets all attendance records.

/api/attendance/{empId}:
This route is used to get attendance record of particular Employee by providing EmpId as route parameter.

POST Request

/api/auth/signup:
This route is used to register admin using email and password in request body.

/api/auth/login:
This route is used to login admin using email and password in request body.

/api/emp:
This route is used to add new Employee record. It is mandatory that it has Employee name , email and EmpId data in the request body.

/api/attendance/:
This route is used to add new Attendance record. It must contains date, empId, status in request body.

PUT Request:
/api/emp/edit:
This route is used to edit details of particular employee. It must contain EmpId along with other data that is needed to modified in request body.

/api/attendance/edit:
This route is used to edit details of particular Attendance record. It must contain date and EmpId in request body.

DELETE Request:
/api/emp/delete/?id=<empId>:
This route is used to delete the Employee record of particular Employee using the EmpId. This also delete every record associated with particular employee in Attendance records.

/api/attendance/delete/?id=<empId>&date=<date>:
This route is used to delete the particular attendance record using EmpId and date
