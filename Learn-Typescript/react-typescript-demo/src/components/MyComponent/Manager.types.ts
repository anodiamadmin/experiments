export type ManagerProps = {
  managerId: number;
  managerName: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  managerDept: "HR" | "Software" | "Accounts"; // String literal type
};