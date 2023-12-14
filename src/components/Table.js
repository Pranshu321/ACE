import React from "react";

const Table = () => {
  const grade = [
    {
      id: 1,
      name: "O",
      category: "Outstanding",
    },
    {
      id: 2,
      name: "A",
      category: "Very Good",
    },
    {
      id: 3,
      name: "B",
      category: "Good",
    },
    {
      id: 4,
      name: "C",
      category: "Average",
    },
    {
      id: 5,
      name: "D",
      category: "Start",
    },
    {
      id: 6,
      name: "E",
      category: "Stub",
    },
  ];
  return (
    <div id="grade" className="w-full flex flex-col mt-5 justify-center items-center">
      <h2 className="text-[32px] font-bold text-center sm:text-center">
        Metric Grade Table
      </h2>
      <div className="overflow-x-auto border-2 rounded-lg p-4 overflow-hidden mt-2 flex w-1/2 justify-center items-center flex-col mx-10">
        <table align="center" className="table">
          <thead className="text-xl font-semibold text-teal-600">
            <tr>
              <th></th>
              <th>Grade</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {grade.map((item) => (
              <tr key={item.id}>
                <th className="font-semibold text-base">{item.id}</th>
                <td className="font-bold text-lg">{item.name}</td>
                <td className="font-bold text-lg">{item.category}</td>
              </tr>
            ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
