// API
import { api } from '../api';
// Types
import { Employee } from '@/types';

export const employeesAPI = api.injectEndpoints({
    endpoints: (builder) => ({
       getAllEmployees: builder.query<Employee[], void>({
            query: () => ({
                url: '/employees',
                method: 'GET'
            })
       }),
       getEmployee: builder.query<Employee, string>({
        query: (id) => ({
            url: `/employees/${id}`,
            method: 'GET'
            })
        }),
       editEmployee: builder.mutation<string, Employee>({
        query: (employee) => ({
            url: `/employees/edit/${employee.id}`,
            method: 'PUT'
            })
        }),
        removeEmployee: builder.mutation<string, string>({
            query: (id) => ({
              url: `/employees/remove/${id}`,
              method: "DELETE",
              body: { id },
            }),
          }),
       addEmployee: builder.mutation<Employee, Employee>({
        query: (employee) => ({
            url: `/employees/add`,
            method: 'POST',
            body: employee
            })
        })
})});

// Hooks
export const { 
    useGetEmployeeQuery,
    useGetAllEmployeesQuery, 
    useAddEmployeeMutation, 
    useEditEmployeeMutation,
    useRemoveEmployeeMutation,
  } = employeesAPI;

// Endpoints
export const { endpoints: { 
    getAllEmployees,
    getEmployee,
    editEmployee,
    removeEmployee,
    addEmployee
 } } = employeesAPI;