export type ManagerProps = {
  managerId: number;
  managerName: {
    firstName: string;
    middleName?: string; //Optional
    lastName: string;
  };
  managerDept: "HR" | "Software" | "Accounts"; // String literal type
};