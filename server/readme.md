# Employee Attendance Management API Endpoints

This API provides endpoints for managing employee details, recording attendance, and user authentication in an Employee Attendance Management System.

## API Endpoints

### GET Requests

- **Get all employees:**
  - `/api/emp`

- **Get all attendance records:**
  - `/api/attendance`

- **Get attendance record of a particular employee:**
  - `/api/attendance/{empId}`

### POST Requests

- **Register an admin:**
  - `/api/auth/signup`

- **Login an admin:**
  - `/api/auth/login`

- **Add a new employee record:**
  - `/api/emp`

- **Add a new attendance record:**
  - `/api/attendance/`

### PUT Requests

- **Edit details of a particular employee:**
  - `/api/emp/edit`

- **Edit details of a particular attendance record:**
  - `/api/attendance/edit`

### DELETE Requests

- **Delete the employee record of a particular employee and associated attendance records:**
  - `/api/emp/delete/?id=<empId>`

- **Delete a particular attendance record using employee ID and date:**
  - `/api/attendance/delete/?id=<empId>&date=<date>`
