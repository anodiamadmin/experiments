import React from "react";

// Define an interface for the component props
interface UserProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

// Functional Component using the interface
const UserCard: React.FC<UserProps> = ({ name, age, isAdmin }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isAdmin ? "Admin" : "User"}</p>
    </div>
  );
};

// Example Usage
const UserDetails: React.FC = () => {
  return (
    <div className="p-6">
      <UserCard name="John Doe" age={30} isAdmin={true} />
      <UserCard name="Jane Smith" age={25} isAdmin={false} />
    </div>
  );
};

export default UserDetails;