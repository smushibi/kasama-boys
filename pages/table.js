import { useState } from 'react';

const data = [
  { name: 'John Doe', age: 30 },
  { name: 'Jane Smith', age: 25 },
  { name: 'Bob Johnson', age: 35 },
];

const Table = () => {
  const [users] = useState(data);

  return (
    <table className="table-auto m-20">
      <thead>
        <tr className="bg-gray-200 text-gray-700">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.name} className="text-gray-700">
            <td className="border px-4 py-2">{user.name}</td>
            <td className="border px-4 py-2">{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
