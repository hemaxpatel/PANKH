const UserProfile = ({ user }) => {
  // console.log(user);
  const {
    username,
    email,
    collegeId,
    contactNumber,
    designation,
    department,
    institute,
  } = user;
  return (
    <>
      <div className="flex flex-col items-center w-full p-6 bg-white rounded-lg shadow-lg md:items-start">
        <div className="flex flex-col items-center w-full space-y-4 md:flex-row md:items-start md:space-x-6 md:space-y-0">
          {/* Profile Picture */}
          <div className="relative -mt-12 md:mt-0">
            <div className="flex items-center justify-center w-24 text-3xl font-bold text-white rounded-full shadow-lg aspect-square bg-primaryblue">
              {username.charAt(0) || "A"}
            </div>
          </div>

          {/* Profile Details */}
          <div className="w-full space-y-4">
            <div className="p-4 border rounded-lg bg-blue-50">
              <span className="text-sm font-semibold text-gray-600">
                Full Name:
              </span>
              <p className="text-lg font-medium text-primaryblue">{username}</p>
            </div>
            <div className="p-4 border rounded-lg bg-blue-50">
              <span className="text-sm font-semibold text-gray-600">
                Email:
              </span>
              <p className="text-lg font-medium text-primaryblue">{email}</p>
            </div>
            {collegeId && (
              <div className="p-4 border rounded-lg bg-blue-50">
                <span className="text-sm font-semibold text-gray-600">
                  Student ID:
                </span>
                <p className="text-lg font-medium text-primaryblue">
                  {collegeId}
                </p>
              </div>
            )}
            {contactNumber && (
              <div className="p-4 border rounded-lg bg-blue-50">
                <span className="text-sm font-semibold text-gray-600">
                  Mobile Number:
                </span>
                <p className="text-lg font-medium text-primaryblue">
                  {contactNumber}
                </p>
              </div>
            )}
            {designation && (
              <div className="p-4 border rounded-lg bg-blue-50">
                <span className="text-sm font-semibold text-gray-600">
                  Designation:
                </span>
                <p className="text-lg font-medium text-primaryblue">
                  {designation}
                </p>
              </div>
            )}
            {department && (
              <div className="p-4 border rounded-lg bg-blue-50">
                <span className="text-sm font-semibold text-gray-600">
                  Department:
                </span>
                <p className="text-lg font-medium text-primaryblue">
                  {department}
                </p>
              </div>
            )}
            {institute && (
              <div className="p-4 border rounded-lg bg-blue-50">
                <span className="text-sm font-semibold text-gray-600">
                  Institute:
                </span>
                <p className="text-lg font-medium text-primaryblue">
                  {institute}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
