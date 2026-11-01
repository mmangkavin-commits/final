export default function AdminUsers() {
  const users = [
    {
      id: 1,
      name: "Kavin",
      email: "kavin@gmail.com",
      role: "user",
    },
    {
      id: 2,
      name: "Admin",
      email: "admin@gmail.com",
      role: "admin",
    },
    {
      id: 3,
      name: "David",
      email: "david@gmail.com",
      role: "user",
    },
  ];

  return (
    <div>

      {/* HEADER */}
      <div className="mb-8">

        <p className="text-sm uppercase tracking-wider text-cyan-400">
          Management
        </p>

        <h1 className="mt-2 text-3xl font-black text-white">
          Users
        </h1>

        <p className="mt-2 text-gray-500">
          View and manage BluePhoenix users.
        </p>

      </div>

      {/* USER TABLE */}
      <div className="overflow-hidden rounded-2xl border border-cyan-500/15 bg-[#061522]/80">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="border-b border-white/5 bg-black/20">

              <tr>

                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  User
                </th>

                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Email
                </th>

                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Role
                </th>

                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-white/5 transition hover:bg-white/2"
                >

                  {/* NAME */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                        {user.name.charAt(0).toUpperCase()}
                      </div>

                      <span className="font-semibold text-white">
                        {user.name}
                      </span>

                    </div>

                  </td>

                  {/* EMAIL */}
                  <td className="px-6 py-5 text-gray-400">
                    {user.email}
                  </td>

                  {/* ROLE */}
                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        user.role === "admin"
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "bg-gray-500/10 text-gray-400"
                      }`}
                    >
                      {user.role}
                    </span>

                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-5 text-right">

                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                      Active
                    </span>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}